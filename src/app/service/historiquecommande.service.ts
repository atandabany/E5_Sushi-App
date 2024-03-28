import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LignePanier } from '../models/LignePanier';
import { Commande } from '../models/Commande';

@Injectable({
  providedIn: 'root'
})
export class HistoriquecommandeService {
  commandes: Array<Commande>

  constructor(private http: HttpClient) {
    this.commandes = JSON.parse(localStorage.getItem("commande") ?? "[]")
  }

  public getLigneCommande(): Array<Commande> {
    console.log(this.commandes)
    return this.commandes
  }

  public addCommande(lesLignes: Array<LignePanier>) {
    if (lesLignes.length === 0) {
      return;
    }
    let ligneCommande = new Commande(lesLignes)
    this.commandes.push(ligneCommande)
    localStorage.setItem("commande",JSON.stringify(this.commandes))
  }
}