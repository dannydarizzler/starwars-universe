import {
  getCharacters,
  createCharacter,
  deleteCharacter,
  getPlanets,
  getSpaceships
} from "$lib/db";

export const load = async () => {
  const characters = await getCharacters();
  const planets = await getPlanets();
  const spaceships = await getSpaceships();

  const charactersWithNames = characters.map((char) => {
    const planet = planets.find(p => p._id === char.planet_id);
    const spaceship = spaceships.find(s => s._id === char.spaceship_id);

    return {
      ...char,
      planetName: planet?.name || "Unbekannt",
      spaceshipName: spaceship?.name || "Unbekannt"
    };
  });

  return {
    characters: charactersWithNames,
    planets,
    spaceships
  };
};

export const actions = {
  create: async ({ request }) => {
    const form = await request.formData();
    const character = {
      name: form.get("name"),
      religion: form.get("religion"),
      weapon: form.get("weapon"),
      abilities: form.get("abilities")?.split(',').map(s => s.trim()),
      image: form.get("image"),
      planet_id: form.get("planet_id"),
      spaceship_id: form.get("spaceship_id")
    };
    await createCharacter(character);
    return { success: true };
  },

  delete: async ({ request }) => {
    const form = await request.formData();
    const id = form.get("id");
    await deleteCharacter(id);
    return { success: true };
  }
};
