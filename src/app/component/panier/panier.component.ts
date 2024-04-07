import { Component } from '@angular/core';
import { HistoriquecommandeService } from '../../service/historiquecommande.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  constructor(private historiqueCdeService: HistoriquecommandeService){
  }
  getCommande(){
    return this.historiqueCdeService.getLigneCommande()  // Appel de la méthode getLigneCommande() du service historiquecommande pour récupérer les commandes

  }
}
