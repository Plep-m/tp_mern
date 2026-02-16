// Exercice 3 : Introduction aux Génériques

export class Boite<T> {
  contenu: T;

  constructor(valeur: T) {
    this.contenu = valeur;
  }

  regarder(): T {
    return this.contenu;
  }
}
