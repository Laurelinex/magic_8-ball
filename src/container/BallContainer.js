import React, { useState } from 'react';
import Ball from '../components/Ball'

function BallContainer() {

    const [question, setQuestion] = useState("");
    const [message, setMessage] = useState("8");

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    }

    const handleQuestionSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="ball-container">
            <form className="question-form" onSubmit={handleQuestionSubmit}>
                <input 
                    type="text" 
                    placeholder="Type your question..."
                    value={question}
                    onChange={handleQuestionChange}
                ></input>
                <input type="submit" value="ASK"></input>
                {/* <button type="submit">ASK</button> */}
            </form>
            <br></br>
            <Ball message={message}/>
        </div>
    );
    
}

export default BallContainer;