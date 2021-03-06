/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import axios from 'axios';
import Modal from '../Modal';
import { Button, QuizDiv } from '../../GlobalStyles';

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

  const getPhase2 = () => {
    axios({
      method: 'GET',
      url: '/herohub/questions/',
      params: { quizID: quiz },
    })
      .then((res) => {
        const questionArray = res.data;
        const shuffledQuestions = questionArray.sort(() => 0.5 - Math.random());
        setQuestions(shuffledQuestions);
        const array = [
          res.data[questionNumber].correctanswer,
          res.data[questionNumber].incorrectanswers[0],
          res.data[questionNumber].incorrectanswers[1],
          res.data[questionNumber].incorrectanswers[2],
        ];

        const shuffledArray = array.sort(() => 0.5 - Math.random());
        setCorrectAnswer(res.data[questionNumber].correctanswer);
        setAnswer1(shuffledArray[0]);
        setAnswer2(shuffledArray[1]);
        setAnswer3(shuffledArray[2]);
        setAnswer4(shuffledArray[3]);
      });
  };

  const randomizeAnswers = () => {
    if (questions[questionNumber + 1]) {
      const array = [
        questions[questionNumber + 1].correctanswer,
        questions[questionNumber + 1].incorrectanswers[0],
        questions[questionNumber + 1].incorrectanswers[1],
        questions[questionNumber + 1].incorrectanswers[2],
      ];
      const shuffledArray = array.sort(() => 0.5 - Math.random());
      setAnswer1(shuffledArray[0]);
      setAnswer2(shuffledArray[1]);
      setAnswer3(shuffledArray[2]);
      setAnswer4(shuffledArray[3]);
    }
  };

  const handleDifficulty = () => {
    if (difficulty === 'easy') setDifficultyMod([0.5, 120000]);
    if (difficulty === 'medium') setDifficultyMod([1, 60000]);
    if (difficulty === 'hard') setDifficultyMod([2, 30000]);
  };

  const updateGame = () => {
    setQuestionNumber(questionNumber + 1);
    if (questions[questionNumber + 1] !== undefined) {
      setCorrectAnswer(questions[questionNumber + 1].correctanswer);
    } else { <Modal quizComplete="true" userID={JSON.parse(localStorage.getItem('currentUser')).user_id} quizID={quiz} difficulty={difficulty} score={currentScore} />; }
    randomizeAnswers();
  };

  useEffect(() => {
    getPhase2();
    handleDifficulty();
  }, []);

  const handleClick1 = () => {
    if (answer1 === correctAnswer) {
      // change button CSS to green
      updateGame();
      setCurrentScore(currentScore + (1 * difficultyMod[0]));
      alert('good job buddy');
    } else {
      // change button CSS red
      updateGame();
      alert('try again dork');
    }
  };

  const handleClick2 = () => {
    if (answer2 === correctAnswer) {
      // change button CSS to green
      updateGame();
      setCurrentScore(currentScore + (1 * difficultyMod[0]));
      alert('good job buddy');
    } else {
      // change button CSS red
      updateGame();
      alert('try again dork');
    }
  };

  const handleClick3 = () => {
    if (answer3 === correctAnswer) {
      // change button CSS to green
      updateGame();
      setCurrentScore(currentScore + (1 * difficultyMod[0]));
      alert('good job buddy');
    } else {
      updateGame();
      alert('try again dork');
    }
  };

  const handleClick4 = () => {
    if (answer4 === correctAnswer) {
      // change button CSS to green
      updateGame();
      setCurrentScore(currentScore + (1 * difficultyMod[0]));
      alert('good job buddy');
    } else {
      // change button CSS red
      updateGame();
      alert('try again dork');
    }
  };

  const timeout = () => {
    updateGame();
    alert("Time's up!");
  };

  if (questions[questionNumber] === undefined && currentScore > 0) return <Modal quizComplete="true" userID={JSON.parse(localStorage.getItem('currentUser')).user_id} quizID={quiz} difficulty={difficulty} score={currentScore} />;

  return questions.length !== 0 && questions[questionNumber] !== undefined && (
    <QuizDiv>
      <h1>{questions[questionNumber].body}</h1>
      <Button onClick={handleClick1}>{answer1}</Button>
      <Button onClick={handleClick2}>{answer2}</Button>
      <Button onClick={handleClick3}>{answer3}</Button>
      <Button onClick={handleClick4}>{answer4}</Button>
      <Countdown
        onComplete={timeout}
        key={questionNumber}
        date={Date.now() + difficultyMod[1]}
        renderer={(props) => (
          <div>
            {props.minutes
              ? `${props.minutes}:`
              : null}
            {props.seconds
              ? props.seconds
              : '00' }
          </div>
        )}
      />
    </QuizDiv>
  );
}

QuizPhase2.propTypes = {
  quiz: PropTypes.isRequired,
  difficulty: PropTypes.isRequired,
};

export default QuizPhase2;
