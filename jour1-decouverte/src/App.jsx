import Premier from "./composants/Premier"; // télécharger le composant Premier
import Exo1 from "./composants/Exo1";
import Deuxieme from "./composants/Deuxieme";
import Troisieme from "./composants/Troisieme";
import Exo2 from "./composants/Exo2";

function App(){
  return <div>
      Hello World !! 
      {/*Premier()*/}
      <Premier />
      <Exo1 />
      <Deuxieme />
      <Exo2 />
      <Troisieme />
    </div>
}

export default App ; 

