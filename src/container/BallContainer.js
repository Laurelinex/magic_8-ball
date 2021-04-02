import React, { useEffect, useState } from 'react';
import Ball from '../components/Ball'
import QuestionForm from '../components/QuestionForm';

function BallContainer() {

    const [message, setMessage] = useState("8");

    useEffect(() => {
        setMessage(message);
        console.log("useEffect triggered", message);
    }, [message])

    const determineAnswer = (submittedQuestion) => {
        console.log(submittedQuestion);
        let randomNumber = Math.round(Math.random()*8);
        let answer = "";
        if (randomNumber === 0) {
            answer = 'It is certain';
        } else if (randomNumber === 1) {
            answer ='It is decidedly so';
        } else if (randomNumber === 2) {
            answer = 'Totes. Hundo P.';
        } else if (randomNumber === 3) {
            answer = 'Cannot predict now';
        } else if (randomNumber === 4) {
            answer = 'Do not count on it';
        } else if (randomNumber === 5) {
            answer = 'Naaaaaah';
        } else if (randomNumber === 6) {
            answer = 'Outlook not so good';
        } else if (randomNumber === 7) {
            answer = 'Signs point to yes';
        }
        setMessage(answer);
        console.log("determineAnswer triggered", answer)
    };

    return (
        <div className="ball-container">
            <QuestionForm onQuestionSubmit={(question) => determineAnswer(question)} />
            <br></br>
            <Ball message={message}/>
        </div>
    );
    
}

export default BallContainer;