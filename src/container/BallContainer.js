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
        let randomNumber = Math.floor(Math.random()*8);
        console.log(randomNumber);
        let answer = "";
        switch(randomNumber) {
            case 0:
                answer = 'It is certain';
                break;
            case 1:
                answer ='It is decidedly so';
                break;
            case 2:
                answer = 'Totes. Hundo P.';
                break;
            case 3:
                answer = 'Cannot predict now';
                break;
            case 4:
                answer = 'Do not count on it';
                break;
            case 5:
                answer = 'Naaaaaah';
                break;
            case 6:
                answer = 'Outlook not so good';
                break;
            case 7:
                answer = 'Signs point to yes';
                break;
            default:
                console.log("default case triggered - should not happen");
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