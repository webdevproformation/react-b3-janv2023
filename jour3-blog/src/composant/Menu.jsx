// sfc 
// ffc
import { NavLink } from "react-router-dom"
function Menu() {
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
                        <NavLink to="/login" className="nav-link">Connexion</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/admin" className="nav-link">Admin</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default Menu;