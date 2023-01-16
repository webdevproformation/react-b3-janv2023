const Quatrieme = () => {
    const etudiants = ["Alain", "Benoit" , "Céline" , "Zorro"] ;
    //const etudiants = ["<li key="0">Alain</li>", "<li key="1">Benoit</li>" , "<li key="2">Céline</li>" , "<li  key="3">Zorro</li>"] ;


    return ( <ul>
        { etudiants.map(function(etudiant , index){
            return <li key={index}>{etudiant}</li>
        }) }
    </ul>  );
}
 
export default Quatrieme;