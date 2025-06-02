import { getPlanets, createPlanet, deletePlanet } from '$lib/db';

export const load = async () => {
  const planets = await getPlanets();
  return { planets };
};

export const actions = {
  create: async ({ request }) => {
    const form = await request.formData();
    const planet = {
      name: form.get("name"),
      species: form.get("species"),
      climate: form.get("climate"),
      image: form.get("image")
    };
    await createPlanet(planet);
    return { success: true };
  },

  delete: async ({ request }) => {
    const form = await request.formData();
    const id = form.get("id");
    await deletePlanet(id);
    return { success: true };
  }
};
