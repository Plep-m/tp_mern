import { StatutCommande, Commande, afficherEtat } from './exercice1-enums';
import { Bibliotheque, Livre } from './exercice2-classes';
import { Boite } from './exercice3-generiques';
import { mettreAJourLivre } from './exercice4-utility-types';

console.log("=== Exercice 1 : Les Enums ===\n");

const commande1: Commande = { id: 1, statut: StatutCommande.EnAttente };
const commande2: Commande = { id: 2, statut: StatutCommande.Expediee };
const commande3: Commande = { id: 3, statut: StatutCommande.Livree };

console.log(`Commande ${commande1.id}:`);
afficherEtat(commande1);
console.log(`\nCommande ${commande2.id}:`);
afficherEtat(commande2);

console.log(`\nCommande ${commande3.id}:`);
afficherEtat(commande3);

console.log("\n=== Exercice 2 : Classes et Encapsulation ===\n");

const maBibliotheque = new Bibliotheque();

maBibliotheque.ajouterLivre({ titre: "1984", auteur: "George Orwell" });
maBibliotheque.ajouterLivre({ titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry" });

console.log(`Nombre de livres dans la bibliothèque : ${maBibliotheque.obtenirNombreLivres()}`);

// console.log(maBibliotheque.catalogue); // Erreur : Property 'catalogue' is private

console.log("\n=== Exercice 3 : Introduction aux Génériques ===\n");

const boiteAString = new Boite<string>("Bonjour");
const boiteANumber = new Boite<number>(42);

console.log(`Contenu de la boîte à string : ${boiteAString.regarder()}`);
console.log(`Type détecté par TypeScript : string`);

console.log(`\nContenu de la boîte à number : ${boiteANumber.regarder()}`);
console.log(`Type détecté par TypeScript : number`);

const texte: string = boiteAString.regarder();
const nombre: number = boiteANumber.regarder();

console.log("\n=== Exercice 4 : Les Utility Types ===\n");

const livreOriginal: Livre = {
  titre: "Le Seigneur des Anneaux",
  auteur: "J.R.R. Tolkien"
};

console.log("Livre original :", livreOriginal);

const livreModifie = mettreAJourLivre(livreOriginal, {
  titre: "Le Seigneur des Anneaux : La Communauté de l'Anneau"
});

console.log("\nLivre après modification :", livreModifie);

const livreModifie2 = mettreAJourLivre(livreOriginal, {
  auteur: "J.R.R. Tolkien (traduction)"
});

console.log("\nAutre modification :", livreModifie2);