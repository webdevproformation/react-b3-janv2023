const ArticleFormulaire = () => {
    return ( <form className="px-3">
                <input type="text" className="form-control mb-3" placeholder="votre nom" />
                <textarea className="form-control mb-3" placeholder="votre message" ></textarea>
                <input type="submit" className="btn btn-success" value="ajouter" />
            </form> );
}
 
export default ArticleFormulaire;