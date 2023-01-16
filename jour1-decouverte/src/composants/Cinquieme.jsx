
const Cinquieme = () => {

    const user = {
        nom : "Alain" ,
        age : 22 ,
        isAdmin : true ,
        specialite : `Javascript`
    }

    //var user = 10 ;
    // 
    const verification = () => {
        if(user.age < 10){
            return <p>l'utilisateur est mineur</p>
        }else if(user.age < 20){
            return <p>l'utilisateur est ado</p>
        }else if(user.age < 60){
            return <p>l'utilisateur est adulte</p>
        }else {
            return <p>l'utilisateur est la retraite</p>
        }
    }

    return ( <div>
        <h2>Condition dans jsx </h2>
        {/** si l'utilisateur est admin => afficher bonjour => &&  if(){} */}
        {user.isAdmin && <p>bonjour</p>}
        {/** if else  => l'opérateur ternaire ? :*/}
        {user.isAdmin ? <p>Bonjour {user.nom}</p> : <p>Veuillez vous connecter</p>}
        {/** if elseif elseif else => créer une fonction dans le composant */}
        { verification() }
    </div> );
}
 
export default Cinquieme;