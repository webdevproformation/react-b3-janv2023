import { Component } from "react";

class Exo2 extends Component{
    competences = ["js", "node", "angular" , "react"]
    niveau = [1 ,5 ,10 , 2]

    render(){
        return <ul>
            <li>Alain maitrise le {this.competences[0]} avec un niveau {this.niveau[2]}</li>
            <li>Céline maitrise le {this.competences[3]} avec un niveau {this.niveau[1]}</li>
       </ul>
    }
}

export default Exo2 ;