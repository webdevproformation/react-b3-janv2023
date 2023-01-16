const Sixieme = () => {
    const action1 = ()=>{
        alert("j'ai cliqué sur le bouton 1")
    }
    return ( 
        <div>
            <h2>Evenement dans React</h2>
            <button onClick={action1}>action 1</button>
            <button onClick={() => action1()}>action 2</button>
        </div>
     );
}
 
export default Sixieme;