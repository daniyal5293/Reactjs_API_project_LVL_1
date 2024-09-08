import {useContext} from 'react';

import React from 'react';
import { Question } from '../helpers/Questions';
import { GameStateContext } from '../helpers/Context';
import '../App.css';
// import React from 'react';
export const EndScreen = () => {

    const { score, setScore, gameState,setGameState} = useContext(GameStateContext);
    const percentage = ((score / Question.length) * 100).toFixed(2);

    const RestartGame = () => {
        setScore(0);
        setGameState("menu");
    }
    return (
        <div className="menu">
            <h1   style={{ color: 'white',  backgroundColor:'#046ca8' }}>Quiz has Ended!</h1>
            <h4>Total Questions: {Question.length}</h4>
            <h4>Your Score: <b>{score*10}</b> out of <b>{Question.length*10}</b></h4>
            <h4>Wrong Answer: {Question.length-score}</h4>
            <h4>Percentage:{percentage}%</h4>
            <button onClick={RestartGame} className="nextq">Play Again</button>
        </div>
    );
}