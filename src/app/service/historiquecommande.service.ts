import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LignePanier } from '../models/LignePanier';
import { Commande } from '../models/Commande';

@Injectable({
  providedIn: 'root'
})
export class HistoriquecommandeService {
  commandes: Array<Commande> // Déclaration d'un tableau pour stocker les commandes

  constructor(private http: HttpClient) {
    // Initialisation des commandes à partir des données du stockage local
    this.commandes = JSON.parse(localStorage.getItem("commande") ?? "[]")
  }

  // Méthode pour obtenir les lignes de commande
  public getLigneCommande(): Array<Commande> {
    console.log(this.commandes) // Affichage des commandes dans la console
    return this.commandes // Retourne les commandes
  }

  // Méthode pour ajouter une commande
  public addCommande(lesLignes: Array<LignePanier>) {
    // Vérifie s'il y a des lignes de panier à ajouter à la commande
    if (lesLignes.length === 0) {
      return; // Si non, sort de la fonction
    }
    // Création d'une nouvelle commande à partir des lignes de panier
    let ligneCommande = new Commande(lesLignes)
    // Ajout de la nouvelle commande au tableau des commandes
    this.commandes.push(ligneCommande)
    // Mise à jour des données de commande dans le stockage local
    localStorage.setItem("commande",JSON.stringify(this.commandes))
  }
}