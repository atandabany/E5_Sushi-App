// Définition de la classe Box
export class Box {
    
    // Propriétés de la classe Box
    id: number
    nom: string
    pieces: number
    prix: number
    image: string
    aliments: Array<any>
    saveurs: Array<any>

    // Constructeur de la classe Box
    constructor(id: number, nom: string, pieces: number, prix: number, image: string, aliments: Array<any>, saveurs: Array<any>) {

        // Initialisation des propriétés de la classe avec les valeurs passées en paramètres
        this.id = id,
        this.nom = nom,
        this.pieces = pieces,
        this.prix = prix,
        this.image = image,
        this.aliments = aliments,
        this.saveurs = saveurs
    }
    // Méthode statique pour transformer un objet en instance de Box
    static transform(unObjet: any): Box {

        // Récupération des valeurs de l'objet passé en paramètre
        let id = unObjet.id
        let nom = unObjet.nom
        let pieces = unObjet.pieces
        let prix = unObjet.prix
        let image = unObjet.image
        let aliments = unObjet.aliments
        let saveurs = unObjet.saveurs

        // Création et retour d'une nouvelle instance de Box avec les valeurs récupérées
        return new Box(id, nom, pieces, prix, image, aliments, saveurs)
    }

    // Méthode statique pour transformer un tableau d'objets en un tableau d'instances de Box
    static transformArray(unTableau: Array<any>): Array<Box> {

        // Initialisation d'un tableau vide pour stocker les instances de Box
        let resultat: Array<Box> = []

        // Parcours de chaque objet dans le tableau passé en paramètre
        for (const unObjet of unTableau) {

            // Transformation de l'objet en instance de Box et ajout au tableau résultat
            let uneBox = this.transform(unObjet)
            resultat.push(uneBox)
        }
        // Retour du tableau contenant les instances de Box
        return unTableau
    }
}