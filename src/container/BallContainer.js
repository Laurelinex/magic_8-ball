import React, { useState } from 'react';
import Ball from '../components/Ball'
import QuestionForm from '../components/QuestionForm';

function BallContainer() {

    const [message, setMessage] = useState("8");

    const determineAnswer = (submittedQuestion) => {
        let randomNumber = Math.round(Math.random()*7);
        if (randomNumber = 0) {
            setMessage('It is certain');
          }
          else if (randomNumber = 1) {
            setMessage('It is decidedly so');
          }
          else if (randomNumber = 2) {
              setMessage('Reply hazy try again');
          }
          else if (randomNumber = 3) {
            setMessage('Cannot predict now');
          }
          else if (randomNumber = 4) {
            setMessage('Do not count on it');
          }
          else if (randomNumber = 5) {
              setMessage('My sources say no');
          }
          else if (randomNumber = 6) {
              setMessage('Outlook not so good');
          }
          else if (randomNumber = 7) { 
              setMessage('Signs point to yes');
          }
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