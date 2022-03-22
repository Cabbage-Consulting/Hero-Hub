import React, { useState } from 'react';
import axios from 'axios';
import AddQuizQuestion from './AddQuizQuestion';

let questionCounter = 0;

function CreateQuiz() {
  const [quizCategories, setQuizCategories] = useState(['Hunks', 'Dorks', 'Baseballers']);
  const [categorySelection, setCategorySelection] = useState('');
  const [createdQuizQuestions, setCreatedQuizQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);

  const selectCategory = (e) => {
    e.preventDefault();
    setCategorySelection(e.target.value);
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
    console.table(questions);
  };

  return (
    <form>
      <label htmlFor="quiz-category">
        Category:
      </label>
      <input list="quiz-categories" id="quiz-category" name="quiz-category" onChange={selectCategory} />
      <datalist id="quiz-categories">
        {quizCategories.map((category) => <option value={category} />)}
      </datalist>
      Questions:
      {createdQuizQuestions.map((questions) => questions)}
      <button type="button" onClick={addQuestionInputs}>Add a Question</button>
      <button type="submit" onClick={createQuiz}>Submit Quiz</button>
    </form>
  );
}

export default CreateQuiz;
