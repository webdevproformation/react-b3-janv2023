import Premier from "./composants/Premier"; // télécharger le composant Premier
import Exo1 from "./composants/Exo1";
import Deuxieme from "./composants/Deuxieme";
import Troisieme from "./composants/Troisieme";
import Exo2 from "./composants/Exo2";
import Exo3 from "./composants/Exo3";
import Quatrieme from "./composants/Quatrieme";
import Exo4 from "./composants/Exo4";
import Cinquieme from "./composants/Cinquieme";
import Exo5 from "./composants/Exo5";

function App(){
  return <div className="container">
      <div>
        Hello World !! 
      </div>
      {/*Premier()*/}
      <Premier />
      <Exo1 />
      <Deuxieme />
      <Exo2 />
      <Troisieme />
      <Exo3 />
      <Quatrieme />
      <Exo4 />
      <Cinquieme />
      <Exo5 />
    </div>
}

export default App ; 

