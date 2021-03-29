import React, { useState } from 'react';

function QuestionForm({onQuestionSubmit}) {

    const [question, setQuestion] = useState("");

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    }

    const handleQuestionSubmit = (event) => {
        event.preventDefault();
        console.log("handleQuestionSubmit triggered", question)

        if (!question || question === "Try another question"){
            return
          }

        onQuestionSubmit({question});

        setQuestion("Try another question")        
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
        </form>
    );

}

export default QuestionForm;