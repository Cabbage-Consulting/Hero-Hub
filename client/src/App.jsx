import React, { useState } from 'react';
import Modal from './Modal';
import CreateQuiz from './Components/CreateQuiz';
import Chatroom from './Chat/Chatroom';
import QuizPhase1 from './QuizComponents/QuizPhase1';
import Navbar from './QuizComponents/Navbar';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Navbar/>
      <h1>Hero Hub</h1>
      <CreateQuiz />
      <button type="button" className="openModalBtn" onClick={() => { setOpenModal(true); }}>Open Modal</button>
      {openModal && <Modal toggleModal={setOpenModal} />}
      <Chatroom />
      <QuizPhase1 />
    </div>
  );
}

export default App;

// Have a random btn to access modal which is just a placeholder. The btn will be replaced
//  with whatever we want to open the modal and pass in type of modal we want
