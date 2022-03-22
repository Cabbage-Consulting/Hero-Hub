import React, { useState } from 'react';
import {Button} from '../../GlobalStyles.jsx';
function QuizPhase2( {category, difficulty} ) {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [question, setQuestion] = useState(null);
  const [answer1, setAnswer1] = useState(1);
  const [answer2, setAnswer2] = useState(2);
  const [answer3, setAnswer3] = useState(3);
  const [answer4, setAnswer4] = useState(4);
  const [correctAnswer, setCorrectAnswer] = useState(4);
  const [currentScore, setCurrentScore] = useState(0);

  //axios get request with category and difficulty as params using questionNumber to identify the number
  //.then set questions with information from array
  //s
  const handleClick1 = (event) => {
    if (answer1 === correctAnswer) {
      //change button CSS to green
      //setQuestionNumber(questionNumber + 1)
      //get request for next question?
      //do call for next question
      //setCurrentScore(currentScore + 1)
      alert('good job buddy')
    } else {
      //change button CSS red
      //setQuestionNumber(questionNumber + 1)
      //get request for next question?
      //do call for next question
      alert('try again dork')
    }
  }

  const handleClick2 = (event) => {
    if (answer2 === correctAnswer) {
      //change button CSS to green
      //setQuestionNumber(questionNumber + 1)
      //get request for next question?
      //do call for next question
      //setCurrentScore(currentScore + 1)
      alert('good job buddy')
    } else {
      //change button CSS red
      //setQuestionNumber(questionNumber + 1)
      //get request for next question?
      //do call for next question
      alert('try again dork')
    }
  }

  const handleClick3 = (event) => {
    if (answer3 === correctAnswer) {
      //change button CSS to green
      //setQuestionNumber(questionNumber + 1)
      //get request for next question?
      //do call for next question
      //setCurrentScore(currentScore + 1)
      alert('good job buddy')
    } else {
      //change button CSS red
      //setQuestionNumber(questionNumber + 1)
      //get request for next question?
      //do call for next question
      alert('try again dork')
    }
  }

  const handleClick4 = (event) => {
    if (answer4 === correctAnswer) {
      //change button CSS to green
      //setQuestionNumber(questionNumber + 1)
      //get request for next question?
      //do call for next question
      //setCurrentScore(currentScore + 1)
      alert('good job buddy')
    } else {
      //change button CSS red
      //setQuestionNumber(questionNumber + 1)
      //get request for next question?
      //do call for next question
      alert('try again dork')
    }
  }

  return(
    <div>
      <h1>How many fingers does batman have?</h1>
      <Button onClick={handleClick1}>Choice1</Button>
      <Button onClick={handleClick2}>Choice2</Button>
      <Button onClick={handleClick3}>Choice3</Button>
      <Button onClick={handleClick4}>Choice4</Button>
      {/* <Button onClick={handleClick1}>{answer1}</Button>
      <Button onClick={handleClick2}>{answer2}</Button>
      <Button onClick={handleClick3}>{answer3}</Button>
      <Button onClick={handleClick4}>{answer4}</Button> */}
    </div>
  )
}

export default QuizPhase2;