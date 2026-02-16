// Exercice 4 : Les "Utility Types"

import { Livre } from './exercice2-classes';

export function mettreAJourLivre(
  livreOriginal: Livre,
  modifications: Partial<Livre>
): Livre {
  return { ...livreOriginal, ...modifications };
}
