// Exercice 2 : Classes et Encapsulation

export interface Livre {
  titre: string;
  auteur: string;
}

export class Bibliotheque {
  private catalogue: Livre[] = [];

  ajouterLivre(nouveauLivre: Livre): void {
    this.catalogue.push(nouveauLivre);
  }

  obtenirNombreLivres(): number {
    return this.catalogue.length;
  }
}
