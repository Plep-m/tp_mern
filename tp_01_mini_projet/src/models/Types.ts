// L'Enum pour limiter les styles musicaux
export enum StyleMusical {
    ROCK = "ROCK",
    POP = "POP",
    ELECTRO = "ELECTRO",
    HIPHOP = "HIPHOP"
}

// 2. L'Interface pour définir la structure d'une chanson
export interface Chanson {
    titre: string;      
    artiste: string;  
    duree: number;     
    style: StyleMusical; 
}