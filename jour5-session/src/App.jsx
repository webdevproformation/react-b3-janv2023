import A from "./composant/A";
import B from "./composant/B";
import { DataContexteProvider } from "./contexts/dataContext";

const App = () => {
  return ( 
    <>
      <DataContexteProvider>
        <A />
        <B />
      </DataContexteProvider>
    </>
   );
}
 
export default App;