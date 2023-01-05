import { bdFirestore } from "./init";
import { getDocs, query, collection, orderBy} from "firebase/firestore";
/**
 * Obtenir tous les dossiers d'un utilisateur triés par date de modification descendante
 * @param {string} idUtilisateur Identifiant Firebase de l'utilisateur connecté
 * @returns {Promise<any[]>} Promesse avec le tableau des dossiers lorsque complétée
 */
 export async function lireTout() {
    return getDocs(query(collection(bdFirestore, 'portfolio'),orderBy("order", "asc"))).then(
            res => res.docs.map(doc => ({id: doc.id, ...doc.data()}))
        );
}