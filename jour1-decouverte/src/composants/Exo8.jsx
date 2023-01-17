import { useState } from "react";

const Exo8 = () => {
    const [compteurs, setCompteurs ] = useState([
        {id : 1 , nb : 0},
        {id : 2 , nb : 3},
        {id : 3 , nb : -10}
    ])
    const handleClick = (id) => {
        const compteursModifie = compteurs.map(function(compteur){
            if(compteur.id === id) return { ...compteur , nb : compteur.nb + 1}
            // ... spread operator array et object 
            return compteur
        })
        setCompteurs(compteursModifie); 
    }
    return ( <div>
        {compteurs.map(function(compteur){
            return <div key={compteur.id}>
                <button onClick={ () => handleClick(compteur.id) }>btn {compteur.id}</button>
                <span>{compteur.nb}</span>
            </div>
        })}
    </div> );
}
 
export default Exo8;