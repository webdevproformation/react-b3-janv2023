import { useState , useEffect } from "react";
import axios from "axios"

const Home = () => {
    //const [articles, setArticles] =useState([{},{},{}])
    // requête ajax => demande à un serveur => retourner [{},{},{}]
    // API === serveur qui livre des données 
    // appeler via ajax => Firebase (filiale de Google)
    // connecter à une boite mail gmail 
    // firebase.google.com 
    // {"titre" : "article 1" , "contenu" : "lorem ipsum" , "commentaires" : []}
    // {"titre" : "article 2" , "contenu" : "lorem ipsum" }
    // https://fir-h3-1265e-default-rtdb.europe-west1.firebasedatabase.app/articles.json NoSQL 
    // SELECT * FROM articles => SQL 
    const [articles, setArticles] = useState([])

    // requete ajax pour remplir le tableau vide 
    // effectuer une requête AJAX uniquement lors du chargement du composant

    useEffect( () => {
        axios.get(`${import.meta.env.VITE_API}articles.json`)
         .then( reponse => {
            const resultat = []
            for(const key in reponse.data){
                if(reponse.data[key]) resultat.push({...reponse.data[key] , id : key})
            }
            setArticles(resultat)
            //console.log(resultat);
            // { "0" : { "auteur" : "Alain" , "texte" : "super article" }, "1" : { "auteur" : "Alain" , "texte" : "beau boulot" } }
            // [{ "auteur" : "Alain" , "texte" : "super article" } , ]
         })
    } , [] ) 
  

    return ( <div className="row">
        <h1>Bienvenu sur mon Blog</h1>
        {articles.map(article => {
            return <article className="col-4"  key={article.id}>
                <div className="card">
                    <h2 className="card-header">{article.titre}</h2>
                    <img src={article.img} alt="" />
                    <div className="card-body">
                        {article.contenu }
                    </div>
                </div>
            </article>
        })}
    </div> );
}

// commentaires clé
// [{auteur : "Alain" , texte : "super"}] valeur
// {  "0" : {"auteur" : "Alain" , "texte" : "super"} }
 
export default Home;