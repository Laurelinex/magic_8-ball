import React, { useState } from 'react';

function QuestionForm({onSubmit}) {

    const [question, setQuestion] = useState("");

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    }

    const handleQuestionSubmit = (event) => {
        event.preventDefault();

        if (!question){
            return
          }

        onSubmit();

        setQuestion("Asking the ball...")        
    }

    return (
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
    );

}

export default QuestionForm;