import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function AddQuizQuestion({ index, questions, setQuestions }) {
  const [questionDetails, setQuestionDetails] = useState({
    question: '',
    correctAnswer: '',
    incorrectAnswer1: '',
    incorrectAnswer2: '',
    incorrectAnswer3: '',
  });

  const updateQuestions = () => {
    const currentQuestions = questions;
    currentQuestions[index] = questionDetails;
    setQuestions(currentQuestions);
  };

  const handleQuestionInput = (e) => {
    setQuestionDetails({ ...questionDetails, question: e.target.value });
  };

  const handleCorrectAnswer = (e) => {
    setQuestionDetails({ ...questionDetails, correctAnswer: e.target.value });
  };

  const handleIncorrectAnswer1 = (e) => {
    setQuestionDetails({ ...questionDetails, incorrectAnswer1: e.target.value });
  };

  const handleIncorrectAnswer2 = (e) => {
    setQuestionDetails({ ...questionDetails, incorrectAnswer2: e.target.value });
  };

  const handleIncorrectAnswer3 = (e) => {
    setQuestionDetails({ ...questionDetails, incorrectAnswer3: e.target.value });
  };

  useEffect(() => {
    updateQuestions();
  });

  return (
    <div>
      <label>
        Question:
        <input type="text" onChange={handleQuestionInput} />
      </label>
      <label>
        Correct Answer:
        <input type="text" onChange={handleCorrectAnswer} />
      </label>
      <label>
        Incorrect Answer #1:
        <input type="text" onChange={handleIncorrectAnswer1} />
      </label>
      <label>
        Incorrect Answer #2:
        <input type="text" onChange={handleIncorrectAnswer2} />
      </label>
      <label>
        Incorrect Answer #3:
        <input type="text" onChange={handleIncorrectAnswer3} />
      </label>
    </div>
  );
}

AddQuizQuestion.propTypes = {
  index: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  setQuestions: PropTypes.func.isRequired,
};

export default AddQuizQuestion;
