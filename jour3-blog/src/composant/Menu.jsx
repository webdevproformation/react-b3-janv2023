// sfc 
// ffc
function Menu() {
    return ( 
        <div className="bg-primary">
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
                        <a href="" className="nav-link">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Connexion</a>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default Menu;