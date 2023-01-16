const Exo3 = () => {
    const aujourdhui = new Date();
    const montant = 6230 ;
    return ( <div>
        <p> {  new Intl.DateTimeFormat("fr-FR").format(aujourdhui)} </p>
        <p> { new Intl.DateTimeFormat("fr-FR", {dateStyle : "long"}).format(aujourdhui) } </p>
        <p> le prix est { new Intl.NumberFormat("fr-FR",  { style: 'currency', currency: 'EUR' }).format(montant) } </p>
     </div> );
}
 
export default Exo3;