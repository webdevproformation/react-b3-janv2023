import { Outlet } from "react-router-dom";
import Menu from "./composant/Menu";

const App = () => {
  //console.log(process.env.REACT_APP_API)
 // console.log(import.meta.env.VITE_API)
  return ( <>
    <Menu />
    <div className="container">
      <Outlet />
    </div>
  </> );
}
 
export default App;