import React, { useState, useRef } from 'react';
import QuizPhase2 from './QuizPhase2.jsx';
import {Button, Select} from '../../GlobalStyles.jsx';
function QuizPhase1() {

  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [renderPhase2, setRenderPhase2] = useState(false);
  const [questions, setQuestions] = useState()

  //recieve categories from API call, set values after get request?
  const handleCategoryChange = (event) => {
    event.persist();
    setCategory(event.target.value);
  }

  const handleDifficultyChange = (event) => {
    event.persist();
    setDifficulty(event.target.value);
  }

  const handleSubmit = (event) => {
    //send get request with category and difficulty as params
    //.then iterate
    setRenderPhase2(true);
  }

  // const categories = [] array of categories from get request
  // const categoryOptions = categories.map((category) =>
  //   <option value={category}>{category}</option>
  // );

  return (
    <>
      {renderPhase2 === false &&
        <form>
          <label>
            Choose your category:
            <Select value={category} onChange={handleCategoryChange}>
              {/* {categoryOptions} */}
              <option value='dummy1'>dummy1</option>
              <option value='dummy2'>dummy2</option>
              <option value='dummy3'>dummy3</option>
              <option value='dummy4'>dummy4</option>
              {/* comment out dummy options after we finish DB */}
            </Select>
          </label>
        </form>
      }

      {category !== null && renderPhase2 === false &&
        <form>
          <label>
            Choose your difficulty:
            <Select value={difficulty} onChange={handleDifficultyChange}>
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </Select>
          </label>
        </form>
      }

      {difficulty !== null && renderPhase2 == false &&
        <Button onClick={handleSubmit}>Go!</Button>
      }
      {renderPhase2 === true && <QuizPhase2 category={category} difficulty={difficulty}/>}
    </>
  )
}

export default QuizPhase1;