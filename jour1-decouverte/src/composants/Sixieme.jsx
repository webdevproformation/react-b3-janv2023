const Sixieme = () => {
    const action1 = ()=>{
        alert("j'ai cliqué sur le bouton 1");
    }

    const handleEnter = (e) => {
        e.target.style["color"] = "red" ;
    }
    const handleLeave = (e) => {
        e.target.style["color"] = "black";
    }
    return ( 
        <div>
            <h2>Evenement dans React</h2>
            <button onClick={action1}>action 1</button>
            <button onClick={() => action1()}>action 2</button>
            <p onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat reiciendis facilis alias quam iste itaque, exercitationem, aspernatur eos reprehenderit nihil suscipit nam tempora doloremque eveniet autem. Quae, rem sint!</p>
        </div>
     );
}
 
export default Sixieme;