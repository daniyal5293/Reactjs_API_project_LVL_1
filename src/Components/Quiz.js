import '../App.css';
import { useState, useContext } from 'react';
import { Question } from '../helpers/Questions';
import { GameStateContext } from '../helpers/Context';

function Quiz() {
    const [curQ, setCurQ] = useState(0);
    const [choosenOption, setChoosenOption] = useState('');
    const { score, setScore, gameState,setGameState, } = useContext(GameStateContext);
    const chooseOption = (option) => {
        setChoosenOption(option);
    };

    const NextQ = () => {
        if (choosenOption === Question[curQ].answer) {
            setScore(score + 1);
        }
        setCurQ(curQ + 1);
        setChoosenOption('');
    };
    const finishQuiz = () => {
        if (choosenOption === Question[curQ].answer) {
            setScore(score + 1);
        }
        setGameState("finish");

    }

    return (
        <div className='menu'>
            <h1>{Question[curQ].prompt}</h1>
            
            <div>
                <button
                    onClick={() => chooseOption('optionA')}
                    style={{ backgroundColor: choosenOption === 'optionA' ? 'lightblue' : 'rgb(246, 125, 4)' }}
                >
                    {Question[curQ].optionA}
                </button>
                <button
                    onClick={() => chooseOption('optionB')}
                    style={{ backgroundColor: choosenOption === 'optionB' ? 'lightblue' : 'rgb(246, 125, 4)' }}
                >
                    {Question[curQ].optionB}
                </button>
                <button
                    onClick={() => chooseOption('optionC')}
                    style={{ backgroundColor: choosenOption === 'optionC' ? 'lightblue' : 'rgb(246, 125, 4)' }}
                >
                    {Question[curQ].optionC}
                </button>
                <button
                    onClick={() => chooseOption('optionD')}
                    style={{ backgroundColor: choosenOption === 'optionD' ? 'lightblue' : 'rgb(246, 125, 4)' }}
                >
                    {Question[curQ].optionD}
                </button>
            </div>
            {curQ === Question.length-1 ?
            ( <button onClick={finishQuiz} className='nextq'>Finish Quiz</button>):
            (<button onClick={NextQ} className='nextq'>Next Question</button>)
            }
        </div>
    );
}

export default Quiz;
