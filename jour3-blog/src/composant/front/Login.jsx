import {useRef , useState} from "react"
import { identifiantVerif } from "../../verif/liste";

const Login = () => {
    const loginRef = useRef();
    const passwordRef = useRef();
    const [ alerte , setAlerte ] = useState({})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const identifiants = {
            login : loginRef.current.value ,
            password : passwordRef.current.value
        }

        const { error } = identifiantVerif.validate(identifiants , {abortEarly : false})

        if(error) {
            // gérer les messages d'erreur 
            // console.log(error.details.map(m => m.type));
            const messagesErreur = error.details.map(m => m.message);
            setAlerte({ type : 'danger' , liste : messagesErreur });
            return ; 
        }
        // requete ajax pour récupérer les identifiants => si login et password existent => connecté sinon => erreur identifiants invalides
        console.log(identifiants)

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
        { Object.keys(alerte).length > 0 && <div className={`alert alert-${alerte.type} mt-3`}>
            {alerte.liste.map((a, index) => {
                return <div key={index}>{a}</div>
            })}
        </div>}
    </> );
}
 
export default Login;