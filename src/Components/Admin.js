import React , {useContext} from 'react';
import { Question } from '../helpers/Questions';
import { GameStateContext } from '../helpers/Context';
import '../App.css';

export const Admin = () => {
    const { gameState,setGameState} = useContext(GameStateContext);
    const add = ()  => {
         
         const newPrompt = prompt("Enter the question prompt:");
         const newOptionA = prompt("Enter Option A:");
         const newOptionB = prompt("Enter Option B:");
         const newOptionC = prompt("Enter Option C:");
         const newOptionD = prompt("Enter Option D:");
         const newAnswer = prompt("Enter the correct answer (optionA, optionB, optionC, optionD):");
 
         
         const newQuestion = {
             prompt: newPrompt,
             optionA: newOptionA,
             optionB: newOptionB,
             optionC: newOptionC,
             optionD: newOptionD,
             answer: newAnswer,
         };
 
         
         Question.push(newQuestion);
 
         console.log("New question added:", newQuestion);
         console.log("Updated Questions array:", Question);
    }
    const dlete = ()  => {
        
    }
    const update = ()  => {
        
    }
    return (
        <div className="menu">
            <button onClick={add}>Add Question</button>
            <button onClick={dlete}>Delete Question</button>
            <button onClick={update}>Update Question</button>
            <button onClick={()=> {setGameState("menu")}}> Back to Quiz</button>
        </div>
    );
}