import '../App.css';
import React, { useState,useContext } from 'react';
import { GameStateContext } from '../helpers/Context';


export const Login = () => {
    const Admin = {
        email: "daniyal@gmail.com",
        password: "1234",
    };
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [loginAttempted, setLoginAttempted] = useState(false);
    const { gameState,setGameState, } = useContext(GameStateContext);

    const isCorrect = (email, password) => {
        setLoginAttempted(true);
        if (Admin.email === email && Admin.password === password) {
            setError(false);
        } else {
            setError(true);
        }
    };
const goingBack = () => {
    setLoginAttempted(false);
    setGameState("menu");
}
    return (
        <div className="menu">
            <label>Enter Your Email:</label>
            <input type="email" placeholder="dev@gmail.com"
                value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Enter Your Password:</label>
            <input type="password"  placeholder="Password"
                value={pwd} onChange={(e) => setPwd(e.target.value)} />

            <button onClick={() => isCorrect(email, pwd)}>Login</button>

            {loginAttempted && (
                error ? 
                <p style={{color: 'red'}}>Your Password Or Email Is Incorrect!</p>
                : setGameState("admin")
            )}
            
             <button onClick={goingBack}>Back To Quiz</button>
        </div>
    );
};
