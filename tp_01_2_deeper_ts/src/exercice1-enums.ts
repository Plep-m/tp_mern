// Exercice 1 : Les Enums

export enum StatutCommande {
  EnAttente = "En attente",
  Expediee = "En cours d'acheminement",
  Livree = "Colis reçu !"
}

export interface Commande {
  id: number;
  statut: StatutCommande;
}

export function afficherEtat(commande: Commande): void {
  console.log(commande.statut);
}
