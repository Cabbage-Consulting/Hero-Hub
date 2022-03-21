import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../Modal.jsx';

function CreateQuiz() {
  const [quizCategories, setQuizCategories] = useState(['Hunks', 'Dorks', 'Baseballers']);
  const [categorySelection, setCategorySelection] = useState('');

  const selectCategory = (e) => {
    e.preventDefault();
    setCategorySelection(e.target.value);
  };

  return (
    <form>
      <label>
        Category:
        <br />
        <input list="quiz-categories" id="quiz-category" value={categorySelection} />
        <datalist id="quiz-categories">
          {quizCategories.map((category) => <option value={category} onClick={selectCategory} />)}
        </datalist>
      </label>
    </form>
  );
}

export default CreateQuiz;
