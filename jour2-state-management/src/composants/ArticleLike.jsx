const ArticleLike = ({article , addLike}) => {
    return ( 
        <div className="text-end me-2">
            <button className="btn btn-warning"
            onClick={() => addLike(article.id)}>{article.like}</button>
        </div>
     );
}
 
export default ArticleLike;