import { HttpClient } from '@angular/common/http'; // Importation du module HttpClient depuis @angular/common/http pour effectuer des requêtes HTTP
import { Injectable } from '@angular/core'; // Importation du décorateur Injectable depuis @angular/core pour marquer le service comme injectable
import { LignePanier } from '../models/LignePanier'; // Importation du modèle de LignePanier
import { Box } from '../models/Box'; // Importation du modèle de Box

@Injectable({
  providedIn: 'root' // Le service est fourni au niveau de l'application
})
export class LignepanierService {
  lesPaniers: Array<LignePanier> // Déclaration d'un tableau contenant des objets de type LignePanier

  constructor(private http: HttpClient) { // Injection du service HttpClient
    this.lesPaniers = JSON.parse(localStorage.getItem("panier") ?? "[]")// Initialisation du tableau lesPaniers lors de la création de l'instance du service
  }

  // Méthode pour récupérer les lignes du panier
  public getLignePanier(): Array<LignePanier> {
    return this.lesPaniers // Retourne le tableau contenant les lignes du panier
  }

  // Méthode pour ajouter une ligne au panier
  public addLigne(uneBox: Box, qte: number) {
    let ligne = new LignePanier(uneBox, qte) // Création d'une nouvelle ligne de panier avec la box et la quantité spécifiées
    let estPresent = false // Variable pour indiquer si la box est déjà présente dans le panier

    // Parcours des lignes de panier existantes pour vérifier si la box est déjà présente
    for (const uneLigne of this.lesPaniers) {

      if (uneLigne.box.id == uneBox.id) { // Si l'identifiant de la box est déjà présent dans une ligne de panier
        estPresent = true // Marque que la box est déjà présente
        uneLigne.quantite += qte // Ajoute la quantité spécifiée à la quantité déjà présente dans la ligne de panier
      }
    }
    // Si la box n'est pas présente dans le panier, l'ajoute comme une nouvelle ligne de panier
    if (estPresent == false) { // Si la box n'est pas déjà présente dans le panier
      this.lesPaniers.push(ligne) // Ajoute la nouvelle ligne de panier au tableau
    }
    localStorage.setItem("panier",JSON.stringify(this.lesPaniers))
  }

  // Méthode pour supprimer une ligne du panier
  public deleteLigne(uneBox: Box, qte: number) {
    let estPresent = false // Variable pour suivre si la boîte est présente dans le panier
    let laLigne:undefined | LignePanier // Variable pour stocker la ligne du panier à supprimer
    // Parcours de toutes les lignes du panier
    for (const uneLigne of this.lesPaniers) {
      // Vérification si la boîte est présente dans la ligne du panier
      if (uneLigne.box.id == uneBox.id) {
        estPresent = true // La boîte est présente dans le panier
        uneLigne.quantite -= qte // Diminution de la quantité de la boîte dans la ligne du panier
        laLigne=uneLigne // Sauvegarde de la ligne du panier pour une suppression éventuelle
      }
      // Correction si la quantité devient négative
      if (uneLigne.quantite < 0) {
        uneLigne.quantite = 0 // La quantité ne peut pas être négative, donc on la fixe à zéro
      }
    }
    // Suppression de la ligne du panier si elle n'a plus de quantité et qu'elle était présente dans le panier
    if (estPresent && laLigne!.quantite<=0){
      let position= this.lesPaniers.indexOf(laLigne!) // Trouver la position de la ligne dans le panier
      this.lesPaniers.splice(position,1) // Supprimer la ligne du panier
    }
    // Mise à jour du panier dans le stockage local après les modifications
    localStorage.setItem("panier",JSON.stringify(this.lesPaniers))   
  }

  // Méthode pour calculer le total du panier
  public getTotalPanier(){
    let resultat = 0 // Variable pour stocker le total du panier
    // Parcours de toutes les lignes du panier
    for (const uneLigne of this.lesPaniers) {
      // Ajout du prix de chaque boîte multiplié par sa quantité au total
      resultat += uneLigne.quantite * uneLigne.box.prix
    }
    // Mise à jour du panier dans le stockage local après les modifications (peut-être inutile ici)
    localStorage.setItem("panier",JSON.stringify(this.lesPaniers))
    return resultat // Retourne le total du panier
  }

  // Méthode pour vider le panier
  public clearAll(){
    this.lesPaniers = [] // Vide le tableau des lignes du panier
    localStorage.setItem("panier",JSON.stringify(this.lesPaniers)) // Met à jour le stockage local avec le panier vidé
    }
  }