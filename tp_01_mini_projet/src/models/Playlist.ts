import { Chanson } from "./Types";

class Playlist {
  public nom : string = "MonPlaylist";
  private titres : Chanson[] = [];

  public ajoutChanson(chanson: Chanson) : void {
    this.titres.push(chanson);
  }

  public supprimerMusique(index: number) : boolean {
    if (index < 0 || index >= this.titres.length) {
      console.error("Index hors limites");
      return false;
    }

    if (this.titres[index] === undefined) {
      console.error("Aucune chanson à cet index");
      return false;
    }
    
    const tmp = this.titres[index];

    if (this.titres[this.titres.length - 1] !== undefined) {
        this.titres[index] = this.titres[this.titres.length - 1]!;
        this.titres[this.titres.length - 1] = tmp;
        this.titres.pop();
        return true;
    } else {
        console.error("Aucune chanson à la fin de la playlist");
        return false;
    }

  }

  public obtenirDurationTotale() : number {
    let total: number = 0;
    this.titres.forEach(chanson => {
      total = total + chanson.duree;
    }
  );   return total;
  }
}