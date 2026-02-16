# TP : Approfondissement TypeScript

Projet complet couvrant les concepts avancés de TypeScript : Enums, Classes, Génériques et Utility Types.

## Structure du projet

```
tp_01_2_deeper_ts/
├── src/
│   ├── index.ts                    # Fichier principal avec tous les tests
│   ├── exercice1-enums.ts          # Énumérations
│   ├── exercice2-classes.ts        # Classes et encapsulation
│   ├── exercice3-generiques.ts     # Génériques
│   └── exercice4-utility-types.ts  # Utility Types (Partial)
├── package.json
└── tsconfig.json
```

## Exercices implémentés

### Exercice 1 : Les Enums
- Enum `StatutCommande` avec les valeurs : EnAttente, Expediee, Livree
- Interface `Commande` avec id et statut
- Fonction `afficherEtat()` pour gérer l'affichage selon le statut

### Exercice 2 : Classes et Encapsulation
- Interface `Livre` avec titre et auteur
- Classe `Bibliotheque` avec :
  - Propriété privée `catalogue`
  - Méthode `ajouterLivre()`
  - Méthode `obtenirNombreLivres()`

### Exercice 3 : Génériques
- Classe générique `Boite<T>` qui peut contenir n'importe quel type
- Méthode `regarder()` qui retourne le contenu typé

### Exercice 4 : Utility Types (Bonus)
- Fonction `mettreAJourLivre()` utilisant `Partial<Livre>`
- Fusion d'objets avec l'opérateur spread

## Lancer le projet

```bash
# Installation des dépendances
npm install

# Exécution
npm start

# Ou directement avec ts-node
npx ts-node src/index.ts
```

## Concepts clés démontrés

- ✅ **Enums** : Constantes nommées pour éviter les "magic strings"
- ✅ **Encapsulation** : Propriétés privées et méthodes publiques
- ✅ **Génériques** : Types paramétrés pour la réutilisabilité
- ✅ **Utility Types** : `Partial<T>` pour rendre les propriétés optionnelles
- ✅ **Programmation Orientée Objet** : Classes, constructeurs, méthodes
