import { Component } from "react";

class Deuxieme extends Component{

    a = 10 ;
    b = 30 ;
    devise = "euros" ; 

    render(){
        return <div>
            <p> { this.a * this.b } { this.devise } </p>
        </div>
    }

}

export default Deuxieme ;