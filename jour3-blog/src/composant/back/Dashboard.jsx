import { useArticle } from "../../hook/useArticle";
import { Link } from "react-router-dom"

const Dashboard = () => {

    const articles = useArticle()

    return ( 
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Liste des articles publiés</h2>
                <Link className="btn btn-info" to="/admin/article/add">ajouter un nouvel article</Link>
            </div>
            <table className="table table-sm table-striped">
                <thead>
                    <th>id</th>
                    <th>titre</th>
                    <th>contenu</th>
                    <th>img</th>
                    <th>nb commentaires</th>
                    <th>actions</th>
                </thead>
                <tbody>
                    { articles.map((article) => {
                        return <tr key={article.id}>
                            <td>{article.id}</td>
                            <td>{article.titre}</td>
                            <td>{article.contenu}</td>
                            <td><img src={article.img} alt="" width="60" /></td>
                            <td>{ article.commentaires ? Object.keys(article.commentaires).length : 0 }</td>
                            <td>
                                <button className="btn btn-warning me-2">modifier</button>
                                <button  className="btn btn-danger">supprimer</button>
                            </td>
                        </tr>
                    }) }
                </tbody>
            </table>
        </>
     );
}
 
export default Dashboard;