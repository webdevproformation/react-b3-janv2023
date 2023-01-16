function Exo1 (){
    const prenom = "Alain" ;
    const nom = "DOE ";
    const adresse = {
        rue : "75 rue de Paris",
        cp  : 75000 ,
        ville : "Paris"
    };

    return <div>
         <p> { prenom} { nom } habite à {adresse.ville} </p>
        <p> il vit dans la rue {adresse.rue} </p>
    </div>

}

export default Exo1 ; 