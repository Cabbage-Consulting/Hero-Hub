import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuizCreator from './QuizCreator/CreateQuiz';

// import PropTypes from 'prop-types';

const BackdropStyle = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .container {
    z-index: 4;
    background: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 60%;
    height: 70%;
    overflow: scroll;
  }
`;

function Modal({
  toggleModal, login, leaderboard, createQuiz,
}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // might need to and question category state

  // Need to implenet login logic
  const handleSubmit = (event) => {
    event.preventDefault();
    if (login) {
      console.log('in submit, event; user: ', userName, 'pass: ', password);
    }
    if (createQuiz) {
      // might need to and question category state
      console.log('in submit, event; question: ', userName, 'answer: ', password);
    }
    setUserName('');
    setPassword('');
  };

  // Need to implenet register new user logic
  const handleRegister = (user, pass) => {
    console.log('In handleRegister; userName: ', user, 'password: ', pass);
    setUserName('');
    setPassword('');
  };

  if (login) {
    return (
      <BackdropStyle>
        <div className="container">
          <div className="xBtn">
            <button type="button" onClick={() => toggleModal(false)}>X</button>
          </div>
          <div className="title">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value); }} />
              </label>
              <label>
                Password:
                <input type="text" value={password} onChange={(e) => { setPassword(e.target.value); }} />
              </label>
              <button type="submit" value="Submit">Login</button>
            </form>
          </div>
          <div className="footer">
            <button type="button" onClick={() => toggleModal(false)}>Cancel</button>
            <button type="button" onClick={() => handleRegister(userName, password)}>Register</button>
          </div>
        </div>
      </BackdropStyle>
    );
  }

  // Need to know formatting for leaderboard info
  if (leaderboard) {
    return (
      <BackdropStyle>
        <div className="container">
          <div className="xBtn">
            <button type="button" onClick={() => toggleModal(false)}>X</button>
          </div>
          <div className="title">
            <h1>leaderboard</h1>
          </div>
          <div className="chart">
            {leaderboard.length > 0 ? leaderboard.map((person, index) => (
              <div>{person}</div>
            )) : <div>No Scores Available</div>}
          </div>
          <div className="footer">
            <button type="button" onClick={() => toggleModal(false)}>Back</button>
          </div>
        </div>
      </BackdropStyle>
    );
  }

  if (createQuiz) {
    return (
      <BackdropStyle>
        <div className="container">
          <div className="xBtn">
            <button type="button" onClick={() => toggleModal(false)}>X</button>
          </div>
          <QuizCreator />
          <div className="footer">
            <button type="button" onClick={() => toggleModal(false)}>Cancel</button>
          </div>
        </div>
      </BackdropStyle>
    );
  }

  // Default Modal
  return (
    <BackdropStyle onClick={() => toggleModal(false)}>
      <div className="container">
        <div className="xBtn">
          <button type="button" onClick={() => toggleModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>PlaceHolder</h1>
        </div>
        <div className="footer">
          <button type="button" onClick={() => toggleModal(false)}>PlaceHolder (cancel for now)</button>
        </div>
      </div>
    </BackdropStyle>
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
  leaderboard: PropTypes.array.isRequired,
  createQuiz: PropTypes.bool.isRequired,
};

export default Modal;

// We havent installed propTypes yet
