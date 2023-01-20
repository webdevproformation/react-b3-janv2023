import { createContext , useState } from "react";
export const userContext = createContext()
export const UserContextProvider = ({children}) => {
      
    let  data = { login : "azerty", password : "123456" , isLogged : false }
    if(localStorage.getItem("auth")) data = JSON.parse(localStorage.getItem("auth"))

    const [profil, setProfil] = useState(data)
    
    const connexion = ({login, password}) => {
        if(profil.login === login && profil.password === password){
            const p = {...profil , isLogged : true}
            localStorage.setItem("auth" , JSON.stringify(p))
            setProfil(p)
        }
    }
    const logout = () => {
        localStorage.removeItem("auth")
        setProfil({...profil , isLogged : false})
    }
    return <userContext.Provider value={{profil , connexion , logout } }>
        {children}
    </userContext.Provider>
}