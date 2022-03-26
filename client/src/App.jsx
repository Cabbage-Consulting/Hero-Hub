import React from 'react';
import Chatroom from './Chat/Chatroom';
import QuizPhase1 from './QuizComponents/QuizPhase1';
import Navbar from './QuizComponents/Navbar';
import RecentActivity from './QuizComponents/RecentActivity';
import {
  MainContentContainer,
  Quiz,
  Chat,
  Recent,
  GeneralDiv,
} from '../GlobalStyles';

function App() {
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
