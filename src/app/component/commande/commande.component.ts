import { Component } from '@angular/core'; // Importation du décorateur Component depuis @angular/core
import { LignepanierService } from '../../service/lignepanier.service'; // Importation du service LignepanierService depuis le chemin spécifié
import { BoxService } from '../../service/box.service';
import { Box } from '../../models/Box';
import { HistoriquecommandeService } from '../../service/historiquecommande.service';


// Définition du composant CommandeComponent avec le décorateur Component
@Component({
  selector: 'app-commande', // Sélecteur CSS utilisé pour identifier ce composant dans les fichiers HTML
  templateUrl: './commande.component.html', // Chemin vers le fichier HTML associé à ce composant
  styleUrl: './commande.component.css' // Tableau de chemins vers les fichiers CSS associés à ce composant
})

export class CommandeComponent {

  // Constructeur du composant, où le service LignepanierService est injecté
  constructor(private panierService:LignepanierService, private boxService: BoxService, private historiqueService: HistoriquecommandeService){
    
  }

  // Méthode pour récupérer le panier depuis le service LignepanierService
  getPanier(){
    return this.panierService.getLignePanier() // Appel de la méthode getLignePanier() du service LignepanierService
  }
  
  // Méthode pour calculer le total du panier depuis le service LignepanierService
  getTotal(){
    return this.panierService.getTotalPanier() // Appel de la méthode getTotalPanier() du service LignepanierService
  }

  deleteAll() {
    return this.panierService.clearAll() // Appel de la méthode clearAll() du service LignepanierService
  }

  ajoutPanier(box: Box) {
    this.panierService.addLigne(box, 1) // Appel de la méthode addLigne du service LignepanierService pour ajouter une ligne au panier
  }

  suppressionPanier(box: Box) {
    this.panierService.deleteLigne(box, 1) // Appel de la méthode deleteLigne du service

  }
  ajouterCommande(){
    console.log(this.getPanier()) // Affiche le contenu du panier dans la console
     this.historiqueService.addCommande(this.getPanier()) // Ajoute une commande à l'historique en utilisant le contenu du panier
     location.href="/panier" // Redirige vers la page du panier
  }


  getTotalPromo(){
    return this.panierService.getTotalPanierAvecPromotion()

  }

  getSaveur(){
    return this.panierService.saveursList()
  }


  
  

}
