import { useContext } from "react";
import "../App.css";
import { GameStateContext } from "../helpers/Context";
function Menu() {
    const {gameState,setGameState,userName, setUserName} = useContext(GameStateContext)
    return (
        <div className="menu">
            <label><b>Enter Your Name :</b></label>

            <input type="tex" placeholder="Your Name..."
             onChange={(event) => {setUserName(event.target.value)}}/>

            <button onClick={() => {
                userName === "" ? alert("Enter Your Name "):setGameState("playing")
                }}>{" "}Start Quiz {" "}</button>
        </div>
    );
}

export default Menu;