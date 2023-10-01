import { useStorage } from '#imports';
import Fuse from 'fuse.js';

import { Personnes } from './types';
export default defineEventHandler(async (event) => {
  const query = await getQuery(event);
  const q = query.q;

  if (!q) {
    return new Error('q get param is required');
  }

  const personnes: Personnes = await useStorage('assets:server').getItem(
    `db/personnes.json`
  );

  const options = {
    includeScore: true,
    keys: [
      'prenom',
      'nom',
      'numero_de_telephone',
      'adresse_email',
      'description',
    ],
  };

  const fuse = new Fuse(personnes, options);

  const result = fuse.search(q);

  if (!result) {
    return new Error('Error while searching for results');
  }

  return result;
});
