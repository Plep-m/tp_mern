import { Playlist } from "./models/Playlist.js";
import { rechercherTitres } from "./services/MusicAPI.js";

async function main() {
  const maPlaylist = new Playlist("Mes Favoris 2025");
  console.log(`Playlist créée : ${maPlaylist.nom}`);
  
  try {
    console.log("\n--- Recherche: Daft Punk ---");
    const chansons = await rechercherTitres("Daft Punk");

    chansons.forEach(chanson => {
      maPlaylist.ajouter(chanson);
    });
    console.log("Playlist mise à jour !");

    const dureeTotal = maPlaylist.obtenirDureeTotale();
    console.log(`Durée totale de la playlist : ${dureeTotal} secondes (${Math.floor(dureeTotal / 60)} min ${dureeTotal % 60} sec)`);
    
  } catch (error) {
    console.error("Erreur lors de la recherche :", error);
  }
  
  console.log("\n--- Test recherche vide ---");
  try {
    await rechercherTitres("");
  } catch (error) {
    console.error("Erreur capturée (attendue) :", (error as Error).message);
  }
}

main();
