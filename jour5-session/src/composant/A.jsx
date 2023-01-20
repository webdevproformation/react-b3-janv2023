import {useContext} from "react"
import { dataContext } from "../contexts/dataContext"

const A = () => {
    const {a , setA} = useContext(dataContext)
    return ( <>
        <h1> je suis le composant A</h1>
        <button onClick={() => {
           setA({...a , age : a.age + 1}) 
        }}>bouton A</button>
        <p>age :  {a.nom}</p>
    </> );
}
 
export default A;