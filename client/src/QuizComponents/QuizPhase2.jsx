import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import axios from 'axios';
import Modal from '../Modal';
import { Button } from '../../GlobalStyles';

function QuizPhase2({ quiz, difficulty }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answer1, setAnswer1] = useState(1);
  const [answer2, setAnswer2] = useState(2);
  const [answer3, setAnswer3] = useState(3);
  const [answer4, setAnswer4] = useState(4);
  const [correctAnswer, setCorrectAnswer] = useState(4);
  const [difficultyMod, setDifficultyMod] = useState(new Array(2));
  const [currentScore, setCurrentScore] = useState(0);
  const [tracker, setTracker] = useState(0);


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
        const array = [
          res.data[questionNumber].correctanswer,
          res.data[questionNumber].incorrectanswers[0],
          res.data[questionNumber].incorrectanswers[1],
          res.data[questionNumber].incorrectanswers[2],
        ];
        const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
        console.log('correct answer in get request:', res.data[questionNumber].correctanswer);
        setCorrectAnswer(res.data[questionNumber].correctanswer);
        console.log('answer during get request:', correctAnswer);
        setAnswer1(shuffledArray[0]);
        setAnswer2(shuffledArray[1]);
        setAnswer3(shuffledArray[2]);
        setAnswer4(shuffledArray[3]);
      });
  };

  const randomizeAnswers = () => {
    const array = [
      questions[questionNumber + 1].correctanswer,
      questions[questionNumber + 1].incorrectanswers[0],
      questions[questionNumber + 1].incorrectanswers[1],
      questions[questionNumber + 1].incorrectanswers[2],
    ];
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    setAnswer1(shuffledArray[0]);
    setAnswer2(shuffledArray[1]);
    setAnswer3(shuffledArray[2]);
    setAnswer4(shuffledArray[3]);
  };

  const handleDifficulty = () => {
    if (difficulty === 'easy') setDifficultyMod([0.5, 120000]);
    if (difficulty === 'medium') setDifficultyMod([1, 60000]);
    if (difficulty === 'hard') setDifficultyMod([2, 30000]);
  };

  useEffect(() => {
    getPhase2();
    handleDifficulty();
  }, []);

  const handleClick1 = () => {
    if (answer1 === correctAnswer) {
      // change button CSS to green
      setQuestionNumber(questionNumber + 1);
      setCorrectAnswer(questions[questionNumber + 1].correctanswer);
      randomizeAnswers();
      setCurrentScore(currentScore + (1 * difficultyMod[0]));
      if (tracker <= questions.length) setTracker(tracker + 1);
      alert('good job buddy');
    } else {
      // change button CSS red
      setQuestionNumber(questionNumber + 1);
      setCorrectAnswer(questions[questionNumber + 1].correctanswer);
      randomizeAnswers();
      if (tracker <= questions.length) setTracker(tracker + 1);
      alert('try again dork');
    }
  };

  const handleClick2 = () => {
    if (answer2 === correctAnswer) {
      // change button CSS to green
      setQuestionNumber(questionNumber + 1);
      setCorrectAnswer(questions[questionNumber + 1].correctanswer);
      randomizeAnswers();
      setCurrentScore(currentScore + (1 * difficultyMod[0]));
      if (tracker <= questions.length) setTracker(tracker + 1);
      alert('good job buddy');
    } else {
      // change button CSS red
      setQuestionNumber(questionNumber + 1);
      setCorrectAnswer(questions[questionNumber + 1].correctanswer);
      randomizeAnswers();
      if (tracker <= questions.length) setTracker(tracker + 1);
      alert('try again dork');
    }
  };

  const handleClick3 = () => {
    if (answer3 === correctAnswer) {
      // change button CSS to green
      setQuestionNumber(questionNumber + 1);
      setCorrectAnswer(questions[questionNumber + 1].correctanswer);
      randomizeAnswers();
      setCurrentScore(currentScore + (1 * difficultyMod[0]));
      if (tracker <= questions.length) setTracker(tracker + 1);
      alert('good job buddy');
    } else {
      setQuestionNumber(questionNumber + 1);
      setCorrectAnswer(questions[questionNumber + 1].correctanswer);
      randomizeAnswers();
      if (tracker <= questions.length) setTracker(tracker + 1);
      alert('try again dork');
    }
  };

  const handleClick4 = () => {
    if (answer4 === correctAnswer) {
      // change button CSS to green
      setQuestionNumber(questionNumber + 1);
      setCorrectAnswer(questions[questionNumber + 1].correctanswer);
      randomizeAnswers();
      setCurrentScore(currentScore + (1 * difficultyMod[0]));
      if (tracker <= questions.length) setTracker(tracker + 1);
      alert('good job buddy');
    } else {
      // change button CSS red
      // setQuestionNumber(questionNumber + 1)
      setQuestionNumber(questionNumber + 1);
      setCorrectAnswer(questions[questionNumber + 1].correctanswer);
      randomizeAnswers();
      if (tracker <= questions.length) setTracker(tracker + 1);
      alert('try again dork');
    }
  };

  const timeout = () => {
    alert(`Time's up!`);
    setQuestionNumber(questionNumber + 1);
    randomizeAnswers();
  };

  if (questions[questionNumber] === undefined && currentScore > 0) return <Modal quizComplete="true" score={currentScore} />;

  return questions.length !== 0 && (
      <div>
        <h1>{questions[questionNumber].body}</h1>
        <Button onClick={handleClick1}>{answer1}</Button>
        <Button onClick={handleClick2}>{answer2}</Button>
        <Button onClick={handleClick3}>{answer3}</Button>
        <Button onClick={handleClick4}>{answer4}</Button>
        <Countdown
          onComplete={timeout}
          key={questionNumber}
          date={Date.now() + difficultyMod[1]}
          precision={3}
          renderer={(props) => (
            <div id="timer">
              {props.minutes}
              :
              {props.seconds
                ? props.seconds
                : '00' }
            </div>
          )}
        />
      </div>
  );
}

export default QuizPhase2;
