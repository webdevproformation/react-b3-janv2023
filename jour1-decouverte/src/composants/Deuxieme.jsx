import { Component } from "react";

class Deuxieme extends Component{
    a = 10 ;
    b = 30 ;
    devise = "euros" ; // ne pas mettre let ou const devant les propriétés 
    render(){
        return <div> {/** this devant chaque variable */}
            <p> { this.a * this.b } { this.devise } </p>
        </div>
    }
}

export default Deuxieme ;