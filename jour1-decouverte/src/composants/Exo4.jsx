const Exo4 = () => {
    const vehicules = [
        { id : 1 , nom : "Renault" , modele : 208 , prix : 15000 },
        { id : 2 , nom : "Tesla" , modele : "S" , prix : 20000 },
        { id : 3 , nom : "Nissan" , modele : "Qashqai" , prix : 12000},
    ]
    return ( 
    <> {/** fragment */}
        <h1>exo 4</h1>
        <ul>
            { vehicules.map(function(voiture){
                return <li>
                    le {voiture.nom} {voiture.modele} coûte &nbsp;
                    { new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(voiture.prix)}
                </li>
            } ) }
        </ul>
    </> );
}
 
export default Exo4;