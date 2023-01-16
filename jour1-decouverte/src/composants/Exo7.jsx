import { useState } from "react";

const Exo7 = () => {
    const [information, setInformation] = useState("pas d'information")
    return ( <div>
        <h1>Exo 7</h1>
        <button onClick={() => setInformation("nouvelle information")}>Action 1</button>
        <button onClick={() => setInformation("information complémentaire")}>Action 2</button>
        <p>{ information }</p>
    </div> );
}
 
export default Exo7;