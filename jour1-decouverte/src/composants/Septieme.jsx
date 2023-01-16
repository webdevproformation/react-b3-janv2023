import { useState } from "react";

function Septieme(){

    //const a = "bonjour"
    const [a, setA] = useState("bonjour") ; // retourne un tableau avec 2 valeurs 
                                           // a = bonjour
                                           // setA = fonction qui permet de modifier la valeur de a 
    const b = "hello"  ; 

    // remplacer le texte qui est écrit dans la balise qui a la class first par le texte "comment allez vous ?"
    // javascript de base 
    const handleClick = () => {
        //document.querySelector(".first-sept").innerHTML = "comment allez vous ?"; 
        // modifier directement la valeur a => state valeur qui sont locales au composants
        setA("comment allez vous ?"); // la fonction setA() => modifier la valeur de a 
        // entrainer une rééecution du composant (un re render )
        // modifié la valeur a UNIQUEMENT dans la composant 
    }

    return (
        <div>
            <button onClick={handleClick}>action</button>
            <p className="first-sept">{a}</p>
            <p className="second">{b}</p>
        </div>
    )
}

export default Septieme ;