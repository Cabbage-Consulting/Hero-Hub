import React, { useState } from 'react';
import Modal from './Modal';
import Chatroom from './Chat/Chatroom';
import QuizPhase1 from './QuizComponents/QuizPhase1';
import Navbar from './QuizComponents/Navbar';
import RecentActivity from './QuizComponents/RecentActivity';
import {MainContentContainer, Quiz, Chat, Recent, GeneralDiv} from '../GlobalStyles';
function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <GeneralDiv>
      <Navbar />
      <MainContentContainer>
        <Chat>
          <Chatroom />
        </Chat>
        <Quiz>
          <QuizPhase1 />
        </Quiz>
        <Recent>
          <RecentActivity />
        </Recent>
      </MainContentContainer>
    </GeneralDiv>
  );
}

export default App;

// Have a random btn to access modal which is just a placeholder. The btn will be replaced
//  with whatever we want to open the modal and pass in type of modal we want
