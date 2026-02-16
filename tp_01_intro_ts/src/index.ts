// Exercice 1 : Les Primitifs et l'Inférence
const nom: string = "Alice";
const age: number = 25;
const estAdherent: boolean = true;

// const testAge: number = "25"; // Erreur: Type 'string' is not assignable to type 'number'

const score = 10; // type 'number'

console.log("=== Exercice 1 ===");
console.log(`Nom: ${nom}, Age: ${age}, Est adhérent: ${estAdherent}`);
console.log(`Score (type inféré): ${score}`);

// Exercice 2 : Tableaux et Tuples
const sports: string[] = ["Football", "Basketball", "Tennis"];

const panier: { produit: string; prix: number }[] = [
  { produit: "Ballon", prix: 25.99 },
  { produit: "Raquette", prix: 89.5 },
  { produit: "Chaussures", prix: 120 },
];

const reponseAPI: [number, string] = [200, "OK"];

console.log("\n=== Exercice 2 ===");
console.log("Sports:", sports);
console.log("Panier:", panier);
console.log(`Réponse API: Code ${reponseAPI[0]}, Message: ${reponseAPI[1]}`);

// Exercice 3 : Les Fonctions
function calculerRemise(prix: number): number {
  return prix * 0.8; // 20% de remise
}

function saluer(prenom: string, titre?: string): string {
  if (titre) {
    return `Bonjour ${titre} ${prenom}`;
  }
  return `Bonjour ${prenom}`;
}

function formaterID(id: string | number): string {
  return `ID-${id}`;
}

console.log("\n=== Exercice 3 ===");
console.log(`Prix avec remise: ${calculerRemise(100)}€`);
console.log(saluer("Marie", "Mme"));
console.log(saluer("Pierre"));
console.log(`ID formaté: ${formaterID(12345)}`);
console.log(`ID formaté: ${formaterID("ABC-789")}`);

// Challenge : Modélisation

interface IEquipement {
  id: number;
  nom: string;
  categorie: string;
  disponible: boolean;
}

function afficherInventaire(equipements: IEquipement[]): void {
  console.log("\n=== Équipements Disponibles ===");
  equipements
    .filter((equip) => equip.disponible)
    .forEach((equip) => console.log(`- ${equip.nom}`));
}

const inventaire: IEquipement[] = [
  { id: 1, nom: "Ballon de football", categorie: "Football", disponible: true },
  { id: 2, nom: "Raquette de tennis", categorie: "Tennis", disponible: false },
  { id: 3, nom: "Ballon de basket", categorie: "Basketball", disponible: true },
  { id: 4, nom: "Filet de volley", categorie: "Volleyball", disponible: true },
  { id: 5, nom: "Gants de gardien", categorie: "Football", disponible: false },
];

afficherInventaire(inventaire);
