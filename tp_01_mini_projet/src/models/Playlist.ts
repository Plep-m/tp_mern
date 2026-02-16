import { Chanson } from "./Types";

export class Playlist {
    // Propriété publique pour le nom 
    public nom: string;
    
    // Propriété privée pour le tableau de chansons
    // On l'initialise avec un tableau vide []
    private titres: Chanson[] = []; 

    constructor(nom: string) {
        this.nom = nom;
    }

    // Méthode pour ajouter 
    ajouter(chanson: Chanson): void {
        this.titres.push(chanson);
    }

    // Méthode pour retirer par index
    retirer(index: number): void {
        this.titres.splice(index, 1);
    }

    // Méthode pour la durée totale 
    obtenirDureeTotale(): number {
        // On additionne les durées de chaque chanson
        return this.titres.reduce((total, chanson) => total + chanson.duree, 0);
    }
}