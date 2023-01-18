import { Outlet } from "react-router-dom";
import Menu from "./composant/Menu";

const App = () => {
  return ( <>
    <Menu />
    <div className="container">
      <Outlet />
    </div>
  </> );
}
 
export default App;