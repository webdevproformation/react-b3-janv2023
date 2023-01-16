const Troisieme = () => {
    const titre = "troisieme composant";
    const propriete = "first"
    const proprieteId = "element1"
    const a = 10 ;
    const b = 30 ;
    const isLogged = true ;
    const prenom = "Alain" ;
    const html = `<a href="#">lien</a>`; 

    const calcul = (a , b) => {
        return <p>{ a  *  b}</p>
    }

    return <>
            <div id={ proprieteId } className={propriete}>{titre}</div>
            <p>{ a + b } </p>{/** effectuer des calculs dans les accolades */}
            {isLogged ? <p>Bienvenu Monsieur X </p> : <p>Veuillez vous connecter </p>}
            <p>{ prenom.toUpperCase() } </p>
            { html } {/* si une chaine de caractère contient du html, cette chaine de caractère est automatiquement échapper */}
            { calcul(2,4) }
    </>;
}
 
export default Troisieme;