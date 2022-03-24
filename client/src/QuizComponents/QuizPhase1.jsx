import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import QuizPhase2 from './QuizPhase2';
import Modal from '../Modal';
import { Button, Select, MainButtons } from '../../GlobalStyles';

function QuizPhase1() {
  const [category, setCategory] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [renderPhase2, setRenderPhase2] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  const [questions, setQuestions] = useState();
  const [openQuizCreator, setOpenQuizCreator] = useState(false);
  // let categoryOptions = [];

  const getPhase1 = () => {
    axios({
      method: 'GET',
      url: '/herohub/quiz',
    })
      .then((res) => {
        setQuizzes(res.data);
      });
  };

  useEffect(() => {
    getPhase1();
  }, []);
  // recieve categories from API call, set values after get request?
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    event.preventDefault();
  };

  const handleQuizChange = (event) => {
    setQuiz(event.target.value);
    event.preventDefault();
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    // send get request with category and difficulty as params
    // .then iterate
    setRenderPhase2(true);
  };

  // const categories = [] array of categories from get request
  // const categoryOptions = categories.map((category) =>
  //   <option value={category}>{category}</option>
  // );

  return (
    <>
      {renderPhase2 === false
        && (
        <div>
          <MainButtons type="Button" className="openModalBtn" onClick={() => { setOpenQuizCreator(true); }}>Create a Quiz</MainButtons>
          {openQuizCreator && <Modal createQuiz="true" toggleModal={setOpenQuizCreator} />}
          <form>
            <label>
              <Select value={category} onChange={handleCategoryChange}>
                <option>Choose your category</option>
                {
                  Object.keys(quizzes).map(
                    (c, i) => (
                      <option
                        key={`${i}${c.id}${c.name}`}
                        value={c}
                      >
                        {c}
                      </option>
                    ),
                  )
                }
              </Select>
            </label>
          </form>
        </div>
        )}

      {renderPhase2 === false && category !== null && category !== 'Choose your category'
              && (
              <form>
                <label>
                  <Select value={quiz} onChange={handleQuizChange}>
                    <option>Choose your quiz</option>
                    {
                      quizzes[category].map(
                        (q, i) => (
                          <option
                            key={`${i}${q.id}${q.name}`}
                            value={q.id}
                          >
                            {q.name}
                          </option>
                        ),
                      )
                    }
                  </Select>
                </label>
              </form>
              )}

      {quiz !== null && renderPhase2 === false && quiz !== 'Choose your quiz'
        && (
        <form>
          <label>
            <Select value={difficulty} onChange={handleDifficultyChange}>
              <option>Choose your difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Select>
          </label>
        </form>
        )}

      {difficulty !== null && renderPhase2 === false && difficulty !== 'Choose your difficulty'
        && <MainButtons onClick={handleSubmit}>Go!</MainButtons>}
      {renderPhase2 === true && <QuizPhase2 quiz={quiz} difficulty={difficulty} />}
    </>
  );
}

export default QuizPhase1;
