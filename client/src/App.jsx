import React, { useState } from 'react';
import Modal from './Modal.jsx';
import CreateQuiz from './Components/CreateQuiz.jsx';
import Chatroom from './Chat/Chatroom.jsx';

function App() {
  // const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <h1>Hero Hub</h1>
      <CreateQuiz />
      <button type="button" className="openModalBtn" onClick={() => { setOpenModal(true); }}>Open Modal</button>
      {openModal && <Modal toggleModal={setOpenModal}  />}
      <Chatroom />
    </div>
  );
}

export default App;

// Have a random btn to access modal which is just a placeholder. The btn will be replaced
//  with whatever we want to open the modal and pass in type of modal we want
