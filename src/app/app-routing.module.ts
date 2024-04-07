import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './component/carte/carte.component';
import { CommandeComponent } from './component/commande/commande.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { PanierComponent } from './component/panier/panier.component';

// Définition des routes de l'application
const routes: Routes = [
  {path: '', component: CarteComponent}, // Route par défaut qui affiche le composant CarteComponent lorsque l'URL est vide
  {path: 'rgpd', component:RgpdComponent}, // Route pour afficher le composant RgpdComponent lorsque l'URL est '/rgpd'
  {path: 'panier', component:PanierComponent} // Route pour afficher le composant PanierComponent lorsque l'URL est '/panier'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration des routes pour le module de routage principal avec RouterModule.forRoot()
  exports: [RouterModule] // Exportation du module de routage pour qu'il soit utilisable dans d'autres modules
})
export class AppRoutingModule { } // Déclaration de la classe AppRoutingModule en tant que module Angular
