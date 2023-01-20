import {useContext} from "react"
import {userContext} from "../contexts/authContext"

const Menu = () => {
    const {profil , logout} = useContext(userContext);
    return ( <>
        {profil.isLogged ? <p>bienvenu <button onClick={logout}>deconnexion</button></p> : <p>Connexion</p> }
    </> );
}
 
export default Menu;