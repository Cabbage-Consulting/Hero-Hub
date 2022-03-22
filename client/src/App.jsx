import React, { useState } from 'react';
// import Modal from './Modal';
import CreateQuiz from './Components/CreateQuiz';

function App() {
  // const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <h1>Hero Hub</h1>
      <CreateQuiz />
    </div>
  );
}

export default App;

// Have a random btn to access modal which is just a placeholder. The btn will be replaced
//  with whatever we want to open the modal and pass in type of modal we want
