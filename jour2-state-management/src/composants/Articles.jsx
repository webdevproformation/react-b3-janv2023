import { useState } from "react";
import ArticleCommentaires from "./ArticleCommentaires";
import ArticleFormulaire from "./ArticleFormulaire";
import ArticleLike from "./ArticleLike";

const Articles = () => {

    const [articles , setArticles] = useState([
        {id : 1 , titre : "Article 1" , img : "https://source.unsplash.com/random/400x200" , texte : "lorem ipsum" , commentaires : [] , like : 0},
        {id : 2 , titre : "Article 2" , img : "https://source.unsplash.com/random/400x201" , texte : "lorem ipsum" , commentaires : [], like : 0},
        {id : 3 , titre : "Article 3" , img : "https://source.unsplash.com/random/400x202" , texte : "lorem ipsum" , commentaires : [], like : 0},
    ])

    const ajouterCommentaire = ( idArticle , commentaire ) => {
        console.log(idArticle, commentaire)
        // ajouter pour l'article concernée un commentaire dans sa propriété commentaires 
        const articlesModifie = articles.map( article => {
            if(article.id === idArticle) {
                article.commentaires.push(commentaire)
                return article
            }
            return article
        }  )
        setArticles(articlesModifie)
    }

    const supprimerCommentaires = (idArticle, idCommentaire) => {
        const articlesModifie = articles.map((article) => {
            if(article.id === idArticle){
                return { ...article , commentaires : article.commentaires.filter( commentaire => {
                    return commentaire.id !== idCommentaire
                })} 
            }
            return article ;
        });
        setArticles(articlesModifie)
    }

    const addLike = (id) => {
        const articlesModifie = articles.map(article => {
            if(article.id === id) {
                return {...article , like : article.like + 1}
            }
            return article
        })
        setArticles(articlesModifie)
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
                    <div>
                        <ArticleLike article={article}  addLike={addLike}/>
                    </div>
                    {/** balise orpheline br img hr input le / final est OBLIGATOIRE */}
                    <hr />
                    {/** si la propriété commentaire de l'objet article contient aucun commentaire => ajouter un nouveau commentaire / liste des commentaires existants */ }
        <ArticleFormulaire ajouterCommentaire={ajouterCommentaire} id={article.id} />
                    <hr />
                    <ArticleCommentaires 
                        article={article} 
                        supprimerCommentaires={supprimerCommentaires}/>
                    {/* envoie au composant enfant l'article */}
                </div>
            </article> )}
    </div> );
}
 
export default Articles;


