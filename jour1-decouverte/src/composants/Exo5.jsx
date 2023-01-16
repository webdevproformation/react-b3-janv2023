const Exo5 = () => {
    const vehicules = [
        { id : 1 , nom : "Renault" , modele : 208 , prix : 15000 , enStock : true },
        { id : 2 , nom : "Tesla" , modele : "S" , prix : 20000 , enStock : false },
        { id : 3 , nom : "Nissan" , modele : "Qashqai" , prix : 12000 , enStock : true },
    ]
    return ( 
        <div>
            <h1>Exo 5</h1>
            <ul>
                { vehicules.map(function(voiture){
                    return <>
                        {voiture.enStock && <li key={voiture.id}>
                            le {voiture.nom} {voiture.modele} coûte &nbsp;
                            { new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(voiture.prix)}
                        </li>}
                    </>
                }) }
            </ul>
        </div>
     );
}
 
export default Exo5;