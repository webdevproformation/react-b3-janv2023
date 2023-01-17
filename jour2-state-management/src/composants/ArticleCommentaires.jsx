const ArticleCommentaires = ( { article } ) => {
    return ( <>
        { article.commentaires.length === 0 ? <p className="px-3">veuillez ajouter une commentaire</p> : <div>
                {article.commentaires.map( commentaire => 
                    <p key={commentaire.id}>
                        {commentaire.auteur} - {commentaire.texte}
                    </p>
                    )}
            </div> }
    </> );
}
 
export default ArticleCommentaires;