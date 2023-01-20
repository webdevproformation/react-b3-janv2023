// sfc 
// ffc
import { NavLink , useNavigate } from "react-router-dom"
import {useContext} from "react"
import { authContext } from "../context/authContext";
function Menu() {
    const {profil , logout} = useContext(authContext);
    const navigate = useNavigate()
    const handleLogout = (e) => {
        e.preventDefault();
        logout()
        navigate("/login")
    }
    return ( 
        <div className="bg-primary mb-3">
            {/**
             * primary : bleu
             * secondary : gris
             * success : vert
             * danger : rouge
             * warning : orange
             * info : bleu turquoise
             * dark : noir 
             * light : blanc gris très léger 
             */}
            <nav className="navbar navbar-expand navbar-dark container">
                <span className="navbar-brand fs-3">
                    {/** image => emoji emojipedia.org */}
                    ⚾
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={({isActive}) => {
                            return isActive ? "nav-link active text-dark" : "nav-link"
                        }}>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cycle-vie" className="nav-link">Cycle vie</NavLink>
                    </li>
                    { !profil.isLogged  ?  
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">Connexion</NavLink>
                        </li> : 
                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={handleLogout}>Déconnexion</a>
                        </li>
                    }
                </ul>
                { profil.isLogged && <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/admin" className="nav-link">Admin</NavLink>
                    </li>
                </ul> }
            </nav>
        </div>
     );
}

export default Menu;