import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import axios from 'axios';
import { Button } from '../../GlobalStyles.jsx';

function QuizPhase2({ quiz }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answer1, setAnswer1] = useState(1);
  const [answer2, setAnswer2] = useState(2);
  const [answer3, setAnswer3] = useState(3);
  const [answer4, setAnswer4] = useState(4);
  const [correctAnswer, setCorrectAnswer] = useState(4);
  const [currentScore, setCurrentScore] = useState(0);

  // axios get request with category and difficulty as params using questionNumber to identify the number
  // .then set questions with information from array
  const getPhase2 = () => {
    axios({
      method: 'GET',
      url: '/herohub/questions/',
      params: { quizID: quiz },
    })
      .then((res) => {
        setQuestions(res.data);
        setCorrectAnswer(res.data[0].correctAnswer);
        setAnswer1(res.data[0].correctAnswer);
        setAnswer2(res.data[0].incorrectAnswers[1]);
        setAnswer3(res.data[0].incorrectAnswers[2]);
        setAnswer4(res.data[0].incorrectAnswers[3]);
      });
  };

  useEffect(() => {
    getPhase2();
  }, []);
  const handleClick1 = (event) => {
    if (answer1 === correctAnswer) {
      // change button CSS to green
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      // setCurrentScore(currentScore + 1)
      alert('good job buddy');
    } else {
      // change button CSS red
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      alert('try again dork');
    }
  };

  const handleClick2 = (event) => {
    if (answer2 === correctAnswer) {
      // change button CSS to green
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      // setCurrentScore(currentScore + 1)
      alert('good job buddy');
    } else {
      // change button CSS red
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      alert('try again dork');
    }
  };

  const handleClick3 = (event) => {
    if (answer3 === correctAnswer) {
      // change button CSS to green
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      // setCurrentScore(currentScore + 1)
      alert('good job buddy');
    } else {
      // change button CSS red
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      alert('try again dork');
    }
  };

  const handleClick4 = (event) => {
    if (answer4 === correctAnswer) {
      // change button CSS to green
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      // setCurrentScore(currentScore + 1)
      alert('good job buddy');
    } else {
      // change button CSS red
      // setQuestionNumber(questionNumber + 1)
      // get request for next question?
      // do call for next question
      alert('try again dork');
    }
  };

  const timeout = () => {
    alert(`Time's up!`);
  };

  return questions.length !== 0 && (
    <div>
      <h1>{questions[0].body}</h1>
      <Button onClick={handleClick1}>{answer1}</Button>
      <Button onClick={handleClick2}>{answer2}</Button>
      <Button onClick={handleClick3}>{answer3}</Button>
      <Button onClick={handleClick4}>{answer4}</Button>
      <Countdown date={Date.now() + 30000} />
      {/* <Button onClick={handleClick1}>{answer1}</Button>
      <Button onClick={handleClick2}>{answer2}</Button>
      <Button onClick={handleClick3}>{answer3}</Button>
      <Button onClick={handleClick4}>{answer4}</Button> */}
    </div>
  );
}

export default QuizPhase2;
