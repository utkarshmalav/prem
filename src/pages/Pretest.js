import React, { useState } from 'react';
import './Pretest.css'; 

const Pretest = () => {
  const questions = [
    {
      question: "Which method is used to create a new Express application?",
      options: ["express()", "createExpress()", "new Express()", "app()"],
      correctAnswer: 0, 
    },
    {
      question: "What is the correct syntax for defining a GET route in Express?",
      options: [
        "app.use('/path', (req, res) => {})",
        "app.post('/path', (req, res) => {})",
        "app.get('/path', (req, res) => {})",
        "app.route('/path').get((req, res) => {})"
      ],
      correctAnswer: 2, 
    },
    {
      question: "In Express, what method is used to send a response to the client?",
      options: ["res.render()", "res.send()", "res.fetch()", "res.client()"],
      correctAnswer: 1, 
    },
    {
      question: "Which property of req contains URL parameters?",
      options: ["req.body", "req.query", "req.params", "req.url"],
      correctAnswer: 2, 
    },
    {
      question: "How do you handle middleware in Express?",
      options: [
        "app.use()",
        "app.middleware()",
        "app.next()",
        "app.handler()"
      ],
      correctAnswer: 0, 
    },
    {
      question: "Which method would you use to define a POST route in Express?",
      options: ["app.get()", "app.post()", "app.put()", "app.fetch()"],
      correctAnswer: 1, 
    },
    {
      question: "What function is called to listen on a specific port in an Express app?",
      options: ["app.port()", "app.listen()", "app.run()", "app.connect()"],
      correctAnswer: 1, 
    },
    {
      question: "How do you parse JSON data in a POST request body in Express?",
      options: [
        "app.use(express.json())",
        "app.parseJson()",
        "app.postJson()",
        "app.jsonParser()"
      ],
      correctAnswer: 0, 
    },
    {
      question: "Which method is used to serve static files in Express?",
      options: ["app.static()", "express.static()", "app.serve()", "express.serveStatic()"],
      correctAnswer: 1, 
    },
    {
      question: "How do you send an HTTP status code in an Express response?",
      options: [
        "res.sendStatus(code)",
        "res.statusCode(code)",
        "res.status(code).send()",
        "res.setStatus(code)"
      ],
      correctAnswer: 2, 
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
