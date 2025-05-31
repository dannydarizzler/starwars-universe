import { getSpaceships, createSpaceship, deleteSpaceship } from '$lib/db';

export const load = async () => {
  const spaceships = await getSpaceships();
  return { spaceships };
};

export const actions = {
  create: async ({ request }) => {
    const form = await request.formData();
    const spaceship = {
      name: form.get('name'),
      art: form.get('art'),
      bild: form.get('bild')
    };
    await createSpaceship(spaceship);
    return { success: true };
  },

  delete: async ({ request }) => {
    const form = await request.formData();
    const id = form.get('id');
    await deleteSpaceship(id);
    return { success: true };
  }
};
