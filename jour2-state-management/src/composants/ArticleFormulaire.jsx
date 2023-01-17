import { useRef } from "react"

const ArticleFormulaire = ({ajouterCommentaire , id}) => {
    const auteurRef = useRef() ;
    const texteRef = useRef() ;

    const handleSubmit = (e) => {
        e.preventDefault(); // permet d'éviter le rechargement de page 
        const commentaire = {
            id : Math.random() + "", // 1 + "" => "1" => clé primaire 
            auteur : auteurRef.current.value,
            texte : texteRef.current.value
        }
        console.log(commentaire); 
        ajouterCommentaire(  id , commentaire )
        e.target.reset(); // vider le formulaire 
    }

    return ( <form className="px-3" onSubmit={handleSubmit}>
                <input type="text" className="form-control mb-3" placeholder="votre nom" ref={auteurRef}/>
                <textarea className="form-control mb-3" placeholder="votre message" ref={texteRef}></textarea>
                <input type="submit" className="btn btn-success" value="ajouter" />
            </form> );
}
 
export default ArticleFormulaire;