import {useContext} from "react"
import { dataContext } from "../contexts/dataContext"

const B = () => {
    const {a } = useContext(dataContext)
    return ( <>
        <h1> je suis le composant B</h1>
        <p>{a.age}</p>
    </> );
}
 
export default B;