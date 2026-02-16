
import { Utilisateur } from "./types";

// Tableau simulant une base de données
export const mockUsers: Utilisateur[] = [
  { id: 1, nom: "Alice", email: "alice@test.com" },
  { id: 2, nom: "Bob", email: "bob@test.com" },
  { id: 3, nom: "Charlie", email: "charlie@test.com" }
];

export function fetchUtilisateurs(): Promise<Utilisateur[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      
      if (success) {
        console.log("... Données récupérées !");
        resolve(mockUsers);
      } else {
        reject("Erreur : Impossible de se connecter au serveur");
      }
    }, 2000);
  });
}
