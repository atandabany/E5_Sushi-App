import { LignePanier } from "./LignePanier";

export class Commande {
    commande: Array<LignePanier>

    constructor(commande:Array<LignePanier>) {
        this.commande = commande
    }
}