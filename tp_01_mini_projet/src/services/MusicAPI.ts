import { Chanson, StyleMusical } from "../models/Types.js";

export function rechercherTitres(requete: string): Promise<Chanson[]> {
  return new Promise((resolve, reject) => {
    if (requete === "") {
      reject(new Error("Recherche vide interdite"));
      return;
    }

    console.log("Recherche en cours sur le serveur...");

    setTimeout(() => {
      const resultats: Chanson[] = [
        {
          titre: `${requete} - Mix 1`,
          artiste: "Artist Demo",
          duree: 180,
          style: StyleMusical.POP
        },
        {
          titre: `${requete} - Version 2`,
          artiste: "Band Test",
          duree: 240,
          style: StyleMusical.ROCK
        },
        {
          titre: `Best of ${requete}`,
          artiste: "Various Artists",
          duree: 200,
          style: StyleMusical.ELECTRO
        }
      ];

      resolve(resultats);
    }, 2000);
  });
}
