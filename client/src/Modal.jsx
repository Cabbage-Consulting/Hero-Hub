import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuizCreator from './QuizCreator/CreateQuiz';

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
  toggleModal, login, leaderboard, createQuiz, register, quizComplete,
}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // dont know if i need this but want to start moving forward
  const [loggedIn, setLoggedIn] = useState(false);

  const calls = (type, path, params, callback, errCB) => {
    axios({
      method: type,
      url: path,
      data: params,
    })
      .then(callback)
      .catch(errCB);
  };

  // Need to implement login logic
  const handleSubmit = (event) => {
    event.preventDefault();
    if (login) {
      console.log('in submit, event; user: ', userName, 'pass: ', password);
      calls('get', 'herohub/user/password', { username: userName }, (res) => {
        console.log(res);
        // check actual password matches (for now check array length)
        if (res.data[0] === password) {
          setLoggedIn(true);
          console.log('loggedIn: ', loggedIn);
        }
        // need to handle case where password isnt right (like try again messege)
      }, (err) => { console.log(err); });
    }
    if (createQuiz) {
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

  const returnToPhase1 = (e) => {
    e.preventDefault();
    console.log(`this should return to Phase 1/
                and let the user select /
                a new Quiz
                `);
    toggleModal(false);
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

  if (register) {
    return (
      <BackdropStyle>
        <div className="container">
          <div className="xBtn">
            <button type="button" onClick={() => toggleModal(false)}>X</button>
          </div>
          <div className="title">
            <h1>Create New Account</h1>
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

  if (quizComplete) {
    return (
      <BackdropStyle onClick={() => toggleModal(false)}>
        <div className="container">
          <div className="xBtn">
            <button type="button" onClick={() => toggleModal(false)}>X</button>
          </div>
          <div className="quiz-complete">
            <h1>Quiz Complete!</h1>
            <h3>Score: </h3>
            <h2>LeaderBoard: </h2>
            <br />
            <div className="chart">
              {leaderboard.length > 0 ? leaderboard.map((person, index) => (
                <div>{person}</div>
              )) : <div>No Scores Available</div>}
            </div>
            <button type="button" onClick={returnToPhase1}>Return Home</button>
          </div>
          <div className="footer">
            <button type="button" onClick={() => toggleModal(false)}>cancel</button>
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
  login: PropTypes.bool,
  leaderboard: PropTypes.array,
  createQuiz: PropTypes.bool,
  register: PropTypes.bool,
  quizComplete: PropTypes.bool,
};

Modal.defaultProps = {
  login: false,
  leaderboard: false,
  createQuiz: false,
  register: false,
  quizComplete: false,
};

export default Modal;
