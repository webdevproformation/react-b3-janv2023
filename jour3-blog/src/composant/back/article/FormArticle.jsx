import { useRef } from "react"
import { articleVerif } from "../../../verif/liste"
import { useAlert } from "../../../hook/useAlert";
import axios from "axios";
import Alert from "../../Alert";

const FormArticle = () => {
    const titreRef = useRef();
    const contenuRef = useRef();
    const imgRef = useRef();
    const [alerte, setAlerte, getError] = useAlert(articleVerif)

    const handleSubmit = (e) => {
        // bloquer le rechargement automatique de la page 
        e.preventDefault();

        // récupérer les valeurs saisies
        const article = {
            titre : titreRef.current.value ,
            contenu : contenuRef.current.value,
            img  :  imgRef.current.value 
        }
       
        // vérifier qu'elles sont conformes 
        // si non conforme => message en dessous du formulaire + STOP 
        if(getError(article)) return ; 
        
        // si ok => essayer d'envoyer à l'api les données pour enregistrement 
        // via ajax (axios)
        axios.post(`${import.meta.env.VITE_API}articles.json`, article)
            // si tout se passe bien => vider le formulaire et bandeau merci 
            .then(() => {
                // vider le formulaire
                e.target.reset()
                setAlerte({type:"success", liste : ["article enregistré en bdd"]})
            })
            // si problème avec l'API => message probleme avec le serveur 
            .catch((ex) => {
                console.log(ex);
                setAlerte({type:"warning" , liste : ["problème pour enregistrer l'article sur le serveur"]})
            })
        

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