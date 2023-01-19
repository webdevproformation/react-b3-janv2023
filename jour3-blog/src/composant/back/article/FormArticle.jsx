import { useRef } from "react"

const FormArticle = () => {
    const titreRef = useRef();
    const contenuRef = useRef();
    const imgRef = useRef();

    const handleSubmit = (e) => {
        // bloquer le rechargement automatique de la page 
        e.preventDefault();

        // récupérer les valeurs saisies

        // vérifier qu'elles sont conformes 

        // si non conforme => message en dessous du formulaire + STOP 

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
    </> );
}
 
export default FormArticle ;