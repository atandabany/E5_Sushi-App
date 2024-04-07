import { LignePanier } from "./LignePanier"; // Importation de la classe LignePanier depuis le fichier correspondant

export class Commande { 
    commande: Array<LignePanier> // Déclaration d'un tableau de type LignePanier pour stocker les lignes de commande

    constructor(commande:Array<LignePanier>) {
        this.commande = commande // Initialisation de l'attribut commande avec les lignes de commande passées en paramètre du constructeur
    }
}