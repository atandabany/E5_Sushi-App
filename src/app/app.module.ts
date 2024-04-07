// Importation des modules Angular nécessaires
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Importation des modules et composants de l'application
import { AppRoutingModule } from './app-routing.module'; // Module de routage de l'application
import { AppComponent } from './app.component'; // Composant racine de l'application
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Module NG Bootstrap pour les composants Bootstrap
import { HeaderComponent } from './component/header/header.component'; // Composant de l'en-tête
import { FooterComponent } from './component/footer/footer.component'; // Composant du pied de page
import { CarteComponent } from './component/carte/carte.component'; // Composant de la carte
import { CommandeComponent } from './component/commande/commande.component'; // Composant de la commande
import { RgpdComponent } from './component/rgpd/rgpd.component'; // Composant RGPD (Règlement Général sur la Protection des Données)
import { PanierComponent } from './component/panier/panier.component'; // Composant du panier

@NgModule({
  declarations: [
    // Déclaration des composants de l'application
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarteComponent,
    CommandeComponent,
    RgpdComponent,
    PanierComponent 
  ],
  imports: [
    // Importation des modules nécessaires à l'application
    BrowserModule, // Module principal pour le navigateur
    AppRoutingModule, // Module de routage
    NgbModule, // Module NG Bootstrap
    HttpClientModule // Module pour les requêtes HTTP
  ],
  providers: [],
  bootstrap: [AppComponent] // Composant racine pour le démarrage de l'application
})
export class AppModule { } // Déclaration de la classe AppModule comme module principal de l'application
