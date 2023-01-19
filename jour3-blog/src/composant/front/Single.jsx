import {useParams} from "react-router-dom"
import {useEffect , useState} from "react"
import axios from "axios";

const Single = () => {
    const {id} = useParams();
    const [article, setArticle] = useState({})
    useEffect( () => {
        if(id){
            axios.get(`${import.meta.env.VITE_API}articles/${id}.json`)
            .then( reponse => setArticle(reponse.data) )
            .catch((ex) => {
                console.log(ex)
            })
        }
    }, [])

    return ( <>
        <h1>{article.titre}</h1>
        <div className="row p-0">
            <div className="col-8 article_contenu" >
                {article.contenu}
            </div>
            <figure className="col-4">
                <img src={article.img} alt="" className="img-thumbnail" />
            </figure>
        </div>
    </> );
}
 
export default Single;