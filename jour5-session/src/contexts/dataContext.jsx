import { useState } from "react"
import { createContext } from "react"

// createContext permet de créer une session que l'on va pouvoir partager entre tous les composants de notre application

export const dataContext = createContext()

// créer founisseur => Provider  => composant qui permet de partager des informations avec tous les composants 

export const DataContexteProvider = ({children}) => {
    const [ a , setA] = useState({ nom : "Alain" , age : 100 })
    return <dataContext.Provider value={{a , setA}}>
        {children}
    </dataContext.Provider>
}
