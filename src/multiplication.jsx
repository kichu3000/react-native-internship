import { useState } from "react";

function Multiplication(){
    const[number,setNumber] = useState(0)

    function handleMultiplication(){
        let table = "";
        for (let i = 1; i <= 10; i++) {
            table += `${number} x ${i} = ${number * i}\n`;
        }
        alert(table);
    }
    return(
        <div><input 
            type="number" 
            value={number} 
            onChange={(e) => setNumber(e.target.value)}/>

            <button onClick={handleMultiplication}>Click</button>
        </div>
    )
}
export default Multiplication;