/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { QuizQuestionContainter } from '../../GlobalStyles';

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
    e.preventDefault();
    setQuestionDetails({ ...questionDetails, question: e.target.value });
  };

  const handleCorrectAnswer = (e) => {
    e.preventDefault();
    setQuestionDetails({ ...questionDetails, correctAnswer: e.target.value });
  };

  const handleIncorrectAnswer1 = (e) => {
    e.preventDefault();
    setQuestionDetails({ ...questionDetails, incorrectAnswer1: e.target.value });
  };

  const handleIncorrectAnswer2 = (e) => {
    e.preventDefault();
    setQuestionDetails({ ...questionDetails, incorrectAnswer2: e.target.value });
  };

  const handleIncorrectAnswer3 = (e) => {
    e.preventDefault();
    setQuestionDetails({ ...questionDetails, incorrectAnswer3: e.target.value });
  };

  useEffect(() => {
    updateQuestions();
  });

  return (
    <QuizQuestionContainter>
      <label htmlFor="Question">
        Question:
        <input type="text" onChange={handleQuestionInput} />
      </label>
      <label htmlFor="Correct Answer:">
        Correct Answer:
        <input type="text" onChange={handleCorrectAnswer} />
      </label>
      <label htmlFor="Incorrect Answer #1">
        Incorrect Answer #1:
        <input type="text" onChange={handleIncorrectAnswer1} />
      </label>
      <label htmlFor="Incorrect Answer #2">
        Incorrect Answer #2:
        <input type="text" onChange={handleIncorrectAnswer2} />
      </label>
      <label htmlFor="Incorrect Answer #3">
        Incorrect Answer #3:
        <input type="text" onChange={handleIncorrectAnswer3} />
      </label>
    </QuizQuestionContainter>
  );
}

AddQuizQuestion.propTypes = {
  index: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  setQuestions: PropTypes.func.isRequired,
};

export default AddQuizQuestion;
