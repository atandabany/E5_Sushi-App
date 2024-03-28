// Importe la classe Box depuis le fichier Box.ts ou Box.js situé dans le même répertoire
import { Box } from "./Box"

// Définit une classe TypeScript appelée LignePanier
export class LignePanier {
    box: Box // Déclare une variable membre box de type Box dans la classe LignePanier
    quantite: number // Déclare une variable membre quantite de type number dans la classe LignePanier
  
    // Déclare un constructeur pour la classe LignePanier prenant deux paramètres : une instance de Box et un nombre représentant la quantité
    constructor(box: Box, quantite: number) {

        // Assignation du paramètre box passé au constructeur à la variable membre box de l'instance actuelle de LignePanier
        this.box = box

        // Assignation du paramètre quantite passé au constructeur à la variable membre quantite de l'instance actuelle de LignePanier
        this.quantite = quantite


    }
}