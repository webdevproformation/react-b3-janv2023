import axios from "axios";
import { useRef , useContext } from "react"
import { identifiantVerif } from "../../verif/liste";
import { useNavigate } from "react-router-dom"
import Alert from "../Alert"; 
import { useAlert } from "../../hook/useAlert"
import bcrypt from "bcryptjs";
import { authContext } from "../../context/authContext";

const Login = () => {
    const loginRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [alerte , setAlerte, getError ] = useAlert(identifiantVerif);
    const {login} = useContext(authContext);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const identifiants = {
            login : loginRef.current.value ,
            password : passwordRef.current.value
        }

        if(getError(identifiants)) return ;
        
        // requete ajax pour récupérer les identifiants => si login et password existent => connecté sinon => erreur identifiants invalides
        //console.log(identifiants)
        // requete ajax qui récupére l'ensemble des enregistrements de la table users 
        axios.get(`${import.meta.env.VITE_API}users.json`)
            .then( (reponse) => {
                const users = [];
                for(let key in reponse.data){
                    users.push({...reponse.data[key], id : key})
                }
                const recherche = users.find( profil => {
                    return profil.login === identifiants.login  && bcrypt.compareSync( identifiants.password , profil.password ) 
                } )
                if(recherche) {
                    setAlerte({type:"success" , liste : ["connexion réussie"]})
                    login(identifiants)
                    setTimeout( ( ) => {
                        setAlerte({});
                        navigate("/admin"); // hook de redirection react-router-dom
                    }, 1000)
                    return 
                }
                setAlerte({type:"warning" , liste : ["identiants invalides"]})
            }
            
            )
            .catch(ex => setAlerte({type:"danger" , liste : ["problème avec l'API - "+ ex.message]}))

        // parcourir comparer chaque enregistrement avec login / password 
        // si rien ne correspond => message => identifiants invalides
        // si ça fonctionne => message connexion  !! 

    }
    const handleFocus = () => {
        setAlerte({})
    }
    return ( <>
        <h1 className="text-center my-5">Accéder au back office</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex justify-content-center ">
                <input type="text" 
                       placeholder="votre login" 
                       className="me-2 form-control w-25"
                       ref={loginRef}
                       onFocus={handleFocus} />
                <input type="password" 
                       placeholder="votre mot de passe" 
                       className="ms-2 form-control w-25"
                       ref={passwordRef}
                       onFocus={handleFocus} />
            </div>
            <div className="mb-3 d-flex justify-content-center ">
                <input type="submit" className="btn btn-outline-dark btn-lg" value="connexion" />
            </div>
        </form>
        <Alert alerte={alerte} />
    </> );
}
 
export default Login;