import {useState} from "react";
import '../contador.css';


export default function Contador () {
    
    const [contador, setcontador] = useState(10);
    const [cor , setCor] = useState("cor-preta");
    
    function somarUm () {
        setcontador(contador + 1);
        if (cor == "cor-preta") {
            setCor("cor-vermelha")
        }
        else {
            setCor("cor-preta")
        }
    }

    function subtrairUm () {
        setcontador(contador - 1);
        if (cor == "cor-preta") {
            setCor("cor-vermelha");
        }
        else {
            setCor("cor-preta")
        }    
    }



    return (
        <div>
            <h1 className={cor}>Contador: {contador}</h1>
            <button onClick={() => somarUm(cor)}>+</button>
            <button onClick={() => subtrairUm(contador)}>-</button>
        </div>
        
    );
}