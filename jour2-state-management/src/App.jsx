import Articles from "./composants/Articles";
import Nav from "./composants/Nav";

const App = () => {
  return ( <>
    <Nav />
    <div className="container">
      <Articles />
    </div>
  </> );
}
 
export default App;