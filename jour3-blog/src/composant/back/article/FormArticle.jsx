import { useRef } from "react"
import { articleVerif } from "../../../verif/liste"

const FormArticle = () => {
    const titreRef = useRef();
    const contenuRef = useRef();
    const imgRef = useRef();

    const handleSubmit = (e) => {
        // bloquer le rechargement automatique de la page 
        e.preventDefault();

        // récupérer les valeurs saisies
        const article = {
            titre : titreRef.current.value ,
            contenu : contenuRef.current.value,
            img  :  imgRef.current.value 
        }
        console.log( article );

        // vérifier qu'elles sont conformes 
        const { error } = articleVerif.validate(article , {abortEarly : false})
        
        // si non conforme => message en dessous du formulaire + STOP 
        // rdv 10h50 @ toute suite !! Ctrl + Maj + fleche haut ou bas
        if(error) {
            // gérer les messages d'erreur 
            // console.log(error.details.map(m => m.type));
            const messagesErreur = error.details.map(m => m.message);
            setAlerte({ type : 'danger' , liste : messagesErreur });
            return ; 
        }
        
        // si ok => essayer d'envoyer à l'api les données pour enregistrement 
        // via ajax (axios)
        
        // si tout se passe bien => vider le formulaire et bandeau merci 

        // si problème avec l'API => message probleme avec le serveur 
    }

    return ( <>
        <h1 className="mb-3">Ajouter une nouvel article</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control mb-3" placeholder="titre article"  ref={titreRef} />
            <textarea className="form-control mb-3" rows="10" placeholder="contenu principal de l'article" ref={contenuRef}></textarea>
            <input type="url" className="form-control mb-3" placeholder="url de l'image vedette" ref={imgRef} />
            <input type="submit" className="btn btn-dark"/>
        </form>
        <Alert alerte={alerte} />
    </> );
}
 
export default FormArticle ;