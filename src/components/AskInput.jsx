import React, { useState } from 'react';
import './Askinput.css';

function AskInput() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/ask?user_question=${encodeURIComponent(question)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setResponse(responseData.answer);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Optionally handle error state
    }
  };

  return (
    <div className=" flex ask-input-container">
      <form onSubmit={handleSubmit} className="input-box flex items-center md:w-4/5">
        <input
          className="input-field"
          type="text"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required

          
        />
        <button
          type="submit"
          className="send-button"
        >
          <img
            src="https://img.icons8.com/?size=100&id=RHtRRB1E4DKI&format=png&color=000000"
            alt="Send"
            className="send-icon flex w-auto"
          />
        </button>
        
      </form>
      {response && (
        <div className="response-box">
        <div className="question">
          <p><strong>Your Question:</strong> {question}</p>
        </div>
        <span></span>
        <div className="answer">
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      </div>
      )}
    </div>
  );
}

export default AskInput;
