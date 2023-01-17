import { useState } from "react";
import ArticleCommentaires from "./ArticleCommentaires";
import ArticleFormulaire from "./ArticleFormulaire";

const Articles = () => {

    const [articles , setArticles] = useState([
        {id : 1 , titre : "Article 1" , img : "https://source.unsplash.com/random/400x200" , texte : "lorem ipsum" , commentaires : []},
        {id : 2 , titre : "Article 2" , img : "https://source.unsplash.com/random/400x201" , texte : "lorem ipsum" , commentaires : []},
        {id : 3 , titre : "Article 3" , img : "https://source.unsplash.com/random/400x202" , texte : "lorem ipsum" , commentaires : []},
    ])

    const ajouterCommentaire = ( idArticle , commentaire ) => {
        console.log(idArticle, commentaire)
    }
    // afficher la liste des articles dans votre application React
    return ( <div className="row">
        {articles.map( article => 
            <article className="col-4" key={article.id}>
                <div className="card">
                    <h2 className="card-header">{article.titre}</h2>
                    <img src={article.img} alt="" />
                    <div className="card-body">
                        {article.texte}
                    </div>
                    {/** balise orpheline br img hr input le / final est OBLIGATOIRE */}
                    <hr />
                    {/** si la propriété commentaire de l'objet article contient aucun commentaire => ajouter un nouveau commentaire / liste des commentaires existants */ }
        <ArticleFormulaire ajouterCommentaire={ajouterCommentaire} id={article.id} />
                    <hr />
                    <ArticleCommentaires article={article} />
                    {/* envoie au composant enfant l'article */}
                </div>
            </article> )}
    </div> );
}
 
export default Articles;


