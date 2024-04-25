// Import des modules nécessaires depuis Angular et d'autres fichiers
import { Component } from '@angular/core'; // Module Component permettant de définir des composants Angular
import { Box } from '../../models/Box'; // Import du modèle de données Box
import { BoxService } from '../../service/box.service'; // Import du service BoxService pour récupérer les données des boîtes
import { LignepanierService } from '../../service/lignepanier.service'; // Import du service LignepanierService pour gérer les lignes du panier

@Component({
  selector: 'app-carte', // Sélecteur utilisé pour intégrer le composant dans un template HTML
  templateUrl: './carte.component.html', // Chemin vers le template HTML associé au composant
  styleUrl: './carte.component.css' // Chemin vers le fichier de style CSS associé au composant
})
export class CarteComponent {
  // Propriétés du composant
  boxes: Array<Box> = [] // Tableau contenant les boîtes récupérées du service
  boxeDetail: Box | null // Boîte détaillée, initialisée à null

  // Constructeur du composant, injection des services BoxService et LignepanierService
  constructor(private boxService: BoxService, private panierService: LignepanierService) {

    this.boxeDetail = null // Initialisation de la boîte détaillée à null
  }

  // Méthode exécutée lors de l'initialisation du composant
  ngOnInit() {

    // Appel de la méthode getBox() du service BoxService pour récupérer les données des boîtes
    this.boxService.getBox().subscribe((data) => {

      // Transformation des données récupérées en instances de Box et ajout au tableau boxes
      let resultats = Box.transformArray(data)
      this.boxes.push(...resultats) // Ajout des instances de Box au tableau boxes
      console.log(this.boxes) // Affichage des boîtes dans la console
    })
  }
  // Méthode appelée lorsqu'une boîte est détaillée
  onDetail(uneBox: Box) {

    this.boxeDetail = uneBox // Attribution de la boîte détaillée à la boîte sélectionnée
    console.log(this.boxeDetail) // Affichage de la boîte détaillée dans la console
  }

  // Méthode appelée lorsqu'une boîte est ajoutée au panier
  ajoutPanier(box: Box) {
    this.panierService.addLigne(box, 1) // Appel de la méthode addLigne du service LignepanierService pour ajouter une ligne au panier
  }

  // Méthode appelée lorsqu'une boite est supprimée du panier
  suppressionPanier(box: Box) {
    this.panierService.deleteLigne(box, 1) // Appel de la méthode deleteLigne du service LignepanierService pour supprimer une ligne du panier
  }

  calculerMoyennePrix() {
    let total = 0;
    // Parcourt chaque box dans le tableau
    for (let box of this.boxes) {
      // Ajoute le prix de chaque box à la somme totale
      total += box.prix;
    }
    // Calcule la moyenne en divisant la somme totale par le nombre de boxes
    let moyenne = total / this.boxes.length;
    // Retourne la moyenne calculée
    return moyenne;
  }

}
