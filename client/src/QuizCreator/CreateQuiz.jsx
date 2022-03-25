import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddQuizQuestion from './AddQuizQuestion';
import { ModalButton } from '../../GlobalStyles';

let questionCounter = 0;

function CreateQuiz() {
  const [quizCategories, setQuizCategories] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [categorySelection, setCategorySelection] = useState('');
  const [quizNameInput, setQuizNameInput] = useState('');
  const [createdQuizQuestions, setCreatedQuizQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);

  const selectCategory = (e) => {
    e.preventDefault();
    setCategorySelection(e.target.value);
  };

  const handleQuizNameInput = (e) => {
    e.preventDefault();
    setQuizNameInput(e.target.value);
  };

  const addQuestionInputs = (e) => {
    e.preventDefault();
    questionCounter += 1;
    setCreatedQuizQuestions((existing) => [
      ...existing,
      <AddQuizQuestion
        key={questionCounter}
        index={questionCounter - 1}
        questions={questions}
        setQuestions={setQuestions}
      />,
    ]);
  };

  const createQuiz = (e) => {
    e.preventDefault();

    let exists = false;
    if (quizzes[categorySelection]) {
      quizzes[categorySelection].forEach((quiz) => {
        if (quiz.name === quizNameInput) {
          alert('Quiz Name taken for this category, please change it to something else');
          exists = true;
        }
      });
    }

    if (exists) return;

    const formattedQuizObject = {
      userID: 1,
      name: quizNameInput,
      category: categorySelection,
      questions,
    };

    axios.post('/herohub/quiz', {
      data: formattedQuizObject,
    });
  };

  const getCategories = () => {
    axios.get('/herohub/quiz')
      .then((res) => {
        setQuizCategories(Object.keys(res.data));
        setQuizzes(res.data);
      });
  };

  // UseEffect to GET quiz categories

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <form>
      <div>
        <label>
          Quiz Name:
        </label>
        <input id="quiz-name" onChange={handleQuizNameInput} />
        <br />
        <label htmlFor="quiz-category">
          Category:
        </label>
        <input list="quiz-categories" id="quiz-category" name="quiz-category" onChange={selectCategory} />
        <datalist id="quiz-categories">
          {quizCategories.map((category) => <option value={category} />)}
        </datalist>
      </div>
      {/* Questions: */}
      <div>
        {createdQuizQuestions.map((questions) => questions)}
        <div>
          <ModalButton type="button" onClick={addQuestionInputs}>Add a Question</ModalButton>
        </div>
        <ModalButton type="submit" onClick={createQuiz}>Submit Quiz</ModalButton>
      </div>
    </form>
  );
}

export default CreateQuiz;
