import { useRef } from "react"
import {useContext} from "react"
import {userContext} from "../contexts/authContext"

const Login = () => {
    const loginRef = useRef();
    const passwordRef = useRef();
    const {connexion} = useContext(userContext)
    const handleClick = () => {
        const identifiants = {
            login : loginRef.current.value ,
            password : passwordRef.current.value
        }
        console.log(identifiants);
        connexion(identifiants)
    }
    return ( <>
        <input type="text" placeholder="login" ref={loginRef}/>
        <input type="text" placeholder="password" ref={passwordRef}/>
        <button onClick={handleClick}>connexion</button>
    </> );
}
 
export default Login;