import React, { useState } from 'react';
import Ball from '../components/Ball'

function BallContainer() {

    const [question, setQuestion] = useState("");

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    }

    const handleQuestionSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <div className="ball-container">
            <form onSubmit={handleQuestionSubmit}>
                <input 
                    type="text" 
                    placeholder="Type your question..."
                    value={question}
                    onChange={handleQuestionChange}
                ></input>
                <input type="submit" value="Ask"></input>
            </form>
            <br></br>
            <Ball/>
        </div>
    );
    
}

export default BallContainer;