// Import des modules nécessaires depuis Angular et d'autres fichiers
import { HttpClient } from '@angular/common/http'; // Module HttpClient permettant de faire des requêtes HTTP
import { Injectable } from '@angular/core'; // Décorateur Injectable permettant d'injecter ce service dans d'autres composants
import { environment } from '../../environments/environment.development'; // Import du fichier d'environnement pour récupérer l'URL de l'API
import { Observable } from 'rxjs'; // Module Observable permettant de gérer les flux de données asynchrones

// Décorateur Injectable indiquant que ce service peut être injecté dans d'autres composants
@Injectable({
  providedIn: 'root' // Indique que ce service est injecté au niveau du root (c'est-à-dire au niveau de l'application)
})
export class BoxService {

  constructor(private http: HttpClient) { } // Injection du module HttpClient dans le service via le constructeur

  // Méthode pour récupérer les données des boîtes à partir de l'API
  public getBox(): Observable<any> {
    
    // Utilisation du module HttpClient pour effectuer une requête GET vers l'URL de l'API
    // L'URL de l'API est récupérée à partir de l'environnement de développement
    return this.http.get(environment.apiBaseUrl);
  }
}
