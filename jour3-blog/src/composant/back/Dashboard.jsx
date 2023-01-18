import { useArticle } from "../../hook/useArticle";

const Dashboard = () => {

    const articles = useArticle()

    return ( 
        <>
            <h2>Liste des articles publiés</h2>
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
                            <td>{Object.keys(article.commentaires).length}</td>
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