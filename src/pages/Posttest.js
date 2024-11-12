import React, { useState } from 'react';
import './Posttest.css';

const Posttest = () => {
  const questions = [
    {
      question: "What is Express.js?",
      options: [
        "a) A front-end framework for JavaScript",
        "b) A back-end framework for Node.js",
        "c) A database management system",
        "d) A CSS framework"
      ],
      correctAnswer: 1,
    },
    {
      question: "Which method is used to define a route in Express.js?",
      options: [
        "a) app.route()",
        "b) app.createRoute()",
        "c) app.get()",
        "d) app.openRoute()"
      ],
      correctAnswer: 2,
    },
    {
      question: "How do you handle JSON payloads in Express.js?",
      options: [
        "a) By using the urlencoded middleware",
        "b) By using the express.json() middleware",
        "c) By using the fs module",
        "d) By using the body-parser module only"
      ],
      correctAnswer: 1,
    },
    {
      question: "Which HTTP method is commonly used to retrieve data?",
      options: [
        "a) POST",
        "b) PUT",
        "c) DELETE",
        "d) GET"
      ],
      correctAnswer: 3,
    },
    {
      question: "What does the app.use() method do in Express.js?",
      options: [
        "a) Defines a specific route",
        "b) Adds middleware to the Express app",
        "c) Closes the Express app",
        "d) Connects to a database"
      ],
      correctAnswer: 1,
    },
    {
      question: "How can you serve static files in Express.js?",
      options: [
        "a) Using express.static()",
        "b) Using fs.serveStatic()",
        "c) Using express.serveFile()",
        "d) Using app.serveStatic()"
      ],
      correctAnswer: 0,
    },
    {
      question: "Which middleware is used to handle form submissions?",
      options: [
        "a) body-parser",
        "b) fs",
        "c) serve-form",
        "d) multer"
      ],
      correctAnswer: 0,
    },
    {
      question: "What will app.get('/', callback) do?",
      options: [
        "a) Define a route for the home page",
        "b) Define a route for the about page",
        "c) Close the server",
        "d) Serve static files"
      ],
      correctAnswer: 0,
    },
    {
      question: "Which method is used to send a response to the client in Express.js?",
      options: [
        "a) app.send()",
        "b) res.send()",
        "c) req.send()",
        "d) server.send()"
      ],
      correctAnswer: 1,
    },
    {
      question: "How can you handle 404 errors in Express.js?",
      options: [
        "a) By using app.get()",
        "b) By using a 404 handler middleware",
        "c) By using app.error()",
        "d) By using express.notFound()"
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
                  className={
                    submitted &&
                    userAnswers[questionIndex] === optionIndex &&
                    optionIndex !== question.correctAnswer
                      ? 'incorrect-option'
                      : submitted && optionIndex === question.correctAnswer
                      ? 'correct-option'
                      : ''
                  }
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
