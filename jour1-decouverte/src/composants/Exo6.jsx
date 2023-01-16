const Exo6 = () => {
    const handleEnter = (e) => {
        e.target.style["transform"] = "scale(1.2)" ;
        e.target.style["transition"] = "1s transform" ;
    }
    const handleLeave = (e) => {
        e.target.style["transform"] = "scale(1)" ;
    }
    return ( 
        <img src="https://via.placeholder.com/400x200" alt="" onMouseEnter={handleEnter} onMouseLeave={handleLeave}/>
     );
}
 
export default Exo6;