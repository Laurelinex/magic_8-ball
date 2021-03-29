import React, { useState } from 'react';
import Ball from '../components/Ball'
import QuestionForm from '../components/QuestionForm';

function BallContainer() {

    const [message, setMessage] = useState("8");

    const determineAnswer = (submittedQuestion) => {
        setMessage(submittedQuestion);
    };

    return (
        <div className="ball-container">
            <QuestionForm onSubmit={(question) => determineAnswer(question)} />
            <br></br>
            <Ball message={message}/>
        </div>
    );
    
}

export default BallContainer;