import { fetchUtilisateurs } from "./service";

async function main() {
  try {
    console.log("Tentative de connexion...");
  
    const users = await fetchUtilisateurs();
    
    console.log("\nUtilisateurs récupérés :");
    console.log(users);
    console.log(`\nNombre total d'utilisateurs : ${users.length}`);
    
  } catch (error) {
    console.log("\nErreur attrapée :");
    console.log("error :", error);
  }
}

main();
