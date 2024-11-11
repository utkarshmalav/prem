import React, { useState } from 'react';
import './Posttest.css';

const Posttest = () => {
  const questions = [
    {
      question: "How do you send a JSON response in Express.js?",
      options: [
        "a) res.send()",
        "b) res.sendJSON()",
        "c) res.json()",
        "d) res.writeJSON()"
      ],
      correctAnswer: 2,
    },
    {
      question: "What method is used to define a route in Express.js?",
      options: [
        "a) app.route()",
        "b) app.get() or app.post()",
        "c) app.define()",
        "d) app.addRoute()"
      ],
      correctAnswer: 1,
    },
    {
      question: "Which middleware function in Express.js parses JSON bodies of requests?",
      options: [
        "a) express.static",
        "b) express.json",
        "c) express.urlEncoded",
        "d) express.cookieParser"
      ],
      correctAnswer: 1,
    },
    {
      question: "What status code does res.status(404).send('Not found') represent?",
      options: ["a) Success", "b) Unauthorized", "c) Not Found", "d) Internal Server Error"],
      correctAnswer: 2,
    },
    {
      question: "Which HTTP method is used to retrieve data from the server?",
      options: ["a) POST", "b) DELETE", "c) GET", "d) PUT"],
      correctAnswer: 2,
    },
    {
      question: "How can you send a request payload in JSON format to an Express server?",
      options: [
        "a) Use req.json()",
        "b) Use JSON.stringify() in request body",
        "c) Use req.body.stringify()",
        "d) Use req.write()"
      ],
      correctAnswer: 1,
    },
    {
      question: "In Express.js, how do you define a middleware to handle all routes?",
      options: [
        "a) app.route()",
        "b) app.use()",
        "c) app.handle()",
        "d) app.router()"
      ],
      correctAnswer: 1,
    },
    {
      question: "Which method allows you to handle errors in Express.js?",
      options: ["a) app.error()", "b) app.catch()", "c) errorHandler()", "d) Error-handling middleware"],
      correctAnswer: 3,
    },
    {
      question: "What does req.params capture in Express.js?",
      options: [
        "a) Query string parameters",
        "b) Route parameters",
        "c) Request body data",
        "d) Server configuration settings"
      ],
      correctAnswer: 1,
    },
    {
      question: "How do you serve static files in Express.js?",
      options: [
        "a) app.serveStatic()",
        "b) app.use(express.static())",
        "c) app.getStatic()",
        "d) app.loadStatic()"
      ],
      correctAnswer: 1,
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: optionIndex,
    });
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
      <h2 className="heading">Express.js Post-Test</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-block">
            <h3 className="question-text">{question.question}</h3>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option-block">
                <label
                  className={`option ${
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
                    onChange={() =>
                      handleAnswerChange(questionIndex, optionIndex)
                    }
                    disabled={submitted}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}

        {!submitted && (
          <button type="submit" className="submit-button">
            Submit Quiz
          </button>
        )}

        {submitted && (
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

export default Posttest;
