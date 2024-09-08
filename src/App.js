
import './App.css';
import Menu from "./Components/Menu";
import Quiz from './Components/Quiz';
import {Login} from './Components/Login';
import {EndScreen} from './Components/EndScreen'
import {Admin} from './Components/Admin'
import {useState} from 'react'
import {GameStateContext} from "./helpers/Context"

function App() {
  const [gameState, setGameState] = useState('menu');
  const [userName, setUserName] =useState('');
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <div className="login-btn"><button onClick={() => setGameState("login")}>Login As Admin</button></div>
      <h1>Quiz App</h1>
      <GameStateContext.Provider 
      value={{
        gameState,setGameState,
        userName, setUserName,
        score, setScore}}>

     {gameState === "menu" && <Menu/>}
     {gameState === "playing" && <Quiz/>}
     {gameState === "finish" && <EndScreen/>}
     {gameState === "login" && <Login/>}
     {gameState === "admin" && <Admin/>}
     </GameStateContext.Provider>
    </div>
  );
}

export default App;
