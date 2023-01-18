import {useRef} from "react"
import { contactVerif } from "../../verif/liste";
const Contact = () => {
    const emailRef = useRef();
    const messageRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const demande = {
            email : emailRef.current.value ,
            message : messageRef.current.value
        }

        const {error} =  contactVerif.validate(demande , {abortEarly : false})
        /* console.log(r)
        return ; */
        if(error) {
            // gérer les messages d'erreur 

            console.log(error.details.map(m => m.type));
            const messages = error.details.map(m => m.message);
            console.log(messages);

        }
        // avant d'enregistrer des informations qui ont été saisie dans un formulaire , il FAUT OBLIGATOIREMENT les vérifier 
        // pour vérifier que les données sont conformes => joi 

        console.log(demande);   
    }
    return ( <>
        <h1>Nous contacter</h1>
        <p>Besoin d'informations, veuillez compléter le formulaire suivant :</p>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="votre@email.fr"  className="form-control mb-3" ref={emailRef}/>
            <textarea  placeholder="votre message" className="form-control mb-3" rows={5} ref={messageRef}></textarea>
            <input type="submit" className="btn btn-dark" />
        </form>
    </> );
}
 
export default Contact;

// dans le composant COntact
// ajouter un formulaire deux champs 
// email 
// commentaire 
// récupérer les valeurs saisies dans le formulaire 
// message d'erreur en cas d'erreur de saisie
// enregistrer les valeurs saisies dans notre base de données (API)
// message de remerciement
// reset du formulaire