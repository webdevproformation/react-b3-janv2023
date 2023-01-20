import { useRef } from "react"
import { identifiantVerif } from "../../../verif/liste"
import { useAlert } from "../../../hook/useAlert"
import Alert from "../../Alert"
import axios from "axios"
import bcrypt from "bcryptjs";

const FormUser = () => {
    const loginRef = useRef()
    const passwordRef = useRef()
    const [alerte , setAlerte , getError] = useAlert(identifiantVerif)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const profil = {
            login : loginRef.current.value ,
            password : passwordRef.current.value 
        };

        if(getError(profil)) return 

        console.log(profil);
        // vérifier qu'un autre user ne dispose pas du même login 
        const {data} = await axios.get(`${import.meta.env.VITE_API}users.json`)
        const users = [...data];
        const userRecherche = users.find( user => { return user.login === profil.login } )

        if(userRecherche) return setAlerte({type : "warning" , liste : ["l'email est déjà utilisé par un autre compte"]})
        
        // hashé le mot de passe de l'utilisation avant POST
        const salt = await bcrypt.genSalt(10)
        const passwordHache = await bcrypt.hash( profil.password ,salt );

        profil.password = passwordHache ;

        console.log(profil);
        
        // post 

    }
 
    return ( 
        <>
            <h1>Créer un nouveau profil utilisateur</h1>
            <form onSubmit={handleSubmit} className="mb-3">
                <input type="email" className="form-control mb-3" ref={loginRef} placeholder="votre@login.fr"/>
                <input type="password" className="form-control mb-3" ref={passwordRef} placeholder="votre password"/>
                <input type="submit" className="btn btn-dark" />
            </form>
            <Alert alerte={alerte} />
        </>
     );
}
 
export default FormUser;