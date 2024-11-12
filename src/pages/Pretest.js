import React, { useState } from 'react';
import './Pretest.css';

const Pretest = () => {
  const questions = [
    {
      question: "What is Express.js primarily used for?",
      options: ["Frontend development", "Backend development", "Database management", "Testing"],
      correctAnswer: 1,
    },
    {
      question: "Which function handles HTTP requests in Express?",
      options: ["router", "request", "response", "middleware"],
      correctAnswer: 0,
    },
    {
      question: "How do you send a JSON response in Express?",
      options: ["res.send()", "res.render()", "res.json()", "res.data()"],
      correctAnswer: 2,
    },
    {
      question: "What is the purpose of `app.use()` in Express?",
      options: [
        "Define routes",
        "Handle middleware",
        "Connect to a database",
        "Render templates"
      ],
      correctAnswer: 1,
    },
    {
      question: "Which Express module helps in routing HTTP requests?",
      options: ["fs", "path", "router", "module"],
      correctAnswer: 2,
    },
    {
      question: "How do you start a server in Express?",
      options: ["app.begin()", "app.start()", "app.run()", "app.listen()"],
      correctAnswer: 3,
    },
    {
      question: "Which middleware parses URL-encoded data?",
      options: [
        "body-parser",
        "url-parser",
        "express-encode",
        "urlencoded"
      ],
      correctAnswer: 0,
    },
    {
      question: "How do you set up an error-handling middleware in Express?",
      options: [
        "app.use(errorHandler)",
        "app.set(errorHandler)",
        "app.error(errorHandler)",
        "app.listen(errorHandler)"
      ],
      correctAnswer: 0,
    },
    {
      question: "What command installs Express.js in your project?",
      options: ["npm install express", "npm get express", "install express", "create express"],
      correctAnswer: 0,
    },
    {
      question: "Which object stores query parameters in Express?",
      options: [
        "req.query",
        "req.body",
        "req.params",
        "req.url"
      ],
      correctAnswer: 0,
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: optionIndex });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const score = Object.keys(userAnswers).filter(
    (questionIndex) =>
      userAnswers[questionIndex] === questions[questionIndex].correctAnswer
  ).length;

  return (
    <div className="quiz-container">
      <h2 className="heading">Express.js Pre-Test</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-block">
            <h3 className="question-text">{question.question}</h3>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option-block">
                <label
                  className={`option-label ${
                    submitted &&
                    userAnswers[questionIndex] === optionIndex &&
                    optionIndex !== question.correctAnswer
                      ? 'incorrect-option'
                      : submitted && optionIndex === question.correctAnswer
                      ? 'correct-option'
                      : ''
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={optionIndex}
                    onChange={() => handleAnswerChange(questionIndex, optionIndex)}
                    disabled={submitted}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}

        {!submitted ? (
          <button type="submit" className="submit-button">
            Submit Quiz
          </button>
        ) : (
          <div className="score-block">
            <h4>
              Your score: {score} out of {questions.length}
            </h4>
          </div>
        )}
      </form>
    </div>
  );
};

export default Pretest;
