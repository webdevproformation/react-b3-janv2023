import Login from "./composant/Login";
import Menu from "./composant/Menu";
import { UserContextProvider } from "./contexts/authContext";

const App = () => {
  return ( 

    <>
      <UserContextProvider>
        <Menu />
        <Login />
      </UserContextProvider>
    </>
   );
}
 
export default App;