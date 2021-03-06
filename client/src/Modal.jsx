/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuizCreator from './QuizCreator/CreateQuiz';
import LeaderBoard from './QuizComponents/LeaderBoard';
import {
  Button, ExitButton, ExitDivSignInModal, QuizCreatorDiv, ModalButton
} from '../GlobalStyles';

const BackdropStyle = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(100, 100, 100, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .container {
    z-index: 4;
    font-family: 'Play';
    background: #f1f1f1;
    border-radius: 10px;
    border: thick solid #1d2066;
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 60%;
    height: 70%;
    overflow: scroll;
  }

  label {
    font-size: 1.5em;
  }

  input {
    background-color: transparent;
    border: none;
    border-bottom: thin solid #71798E;
    color: #1d2066;
    font-family: 'Play';
    font-size: 1em;
    outline: none;
    padding: 0.5em;
    margin: 1em;
    text-shadow: -0.5px 0.5px #71798E;
    width: 60%;
  }

  h1 {
    background: #71798E;
    color: #E7BA53;
    padding: 1em;
    border-radius: 5px;
    text-align: center;
  }

  h3 {
    font-size: 2em;
  }

  #signin {
    width: 100%;
    font-size: 1.5em;
    transform: translateX(-0.4em);
    padding: 0.5em;

    &:hover {
      color: #E7BA53;
    }
  }

  #register {
    background-color: #E7BA53;
    border-radius: 5px;
    border: none;
    color: black;
    font-family: 'Play';
    width: 100%;
    font-size: 1.5em;
    padding: 0.5em;

    &:hover {
      cursor: pointer;
      color: #E7BA53;
      background: #71798E;
    }
  }

  #toggle-sign-in-register {
    width: 100%;
    font-size: 1.5em;
    transform: translateX(-0.4em);
    padding: 0.5em;

    &:hover {
      color: #f1f1f1;
      background-color: #C12835;
    }
  }

  #pfpUrl{
    width: 40%;
  }
`;

function Modal({
  toggleModal,
  login,
  leaderboard,
  createQuiz,
  register,
  quizComplete,
  update,
  score,
  userID,
  quizID,
  difficulty,
}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [pfpUrl, setPfpUrl] = useState('');
  const [leaderInfo, setLeaderInfo] = useState([]);
  const [displaySignIn, setDisplaySignIn] = useState(login);
  const [displayRegister, setDisplayRegister] = useState(register);

  const calls = (method, url, params, data, callback, errCB) => {
    axios({
      method,
      url,
      params,
      data,
    })
      .then(callback)
      .catch(errCB);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (displaySignIn) {
      calls('get', 'herohub/user/password', { username: userName }, null, (res) => {
        if (res.data.password === password) {
          calls('get', 'herohub/user', { username: userName }, null, (response) => {
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            window.location.reload(false);
          }, (err) => { console.log('error in second login call; err: ', err); });
        } else {
          console.log('wrong password homie');
          alert('wrong password');
        }
        // need to handle case where password isnt right (like try again messege)
      }, (err) => { console.log(err); });
    }
    if (displayRegister) {
      calls('post', 'herohub/user', null, {
        username: userName, pfpUrl, location: userLocation, password,
      }, (res) => {
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        window.location.reload(false);
      }, (err) => { console.log('error in post new user; err: ', err); });
    }
    if (update) {
      let checkID = null;
      if (localStorage.getItem('currentUser')) {
        checkID = JSON.parse(localStorage.getItem('currentUser'));
      }
      calls('put', 'herohub/user', null, {
        userID: checkID.user_id, username: userName, pfpUrl, location: userLocation, password,
      }, (res) => {
        localStorage.setItem('currentUser', JSON.stringify(res.data));
      }, (err) => { console.log('error in update; err: ', err); });
    }
    if (createQuiz) {
      console.log('in submit, event; question: ', userName, 'answer: ', password);
    }
    setUserName('');
    setPassword('');
    setUserLocation('');
    setPfpUrl('');
  };

  // Need to implenet register new user logic (change logic to open register modal)
  const handleRegister = (user, pass) => {
    console.log('In handleRegister; userName: ', user, 'password: ', pass);
    setUserName('');
    setPassword('');
  };

  const returnToPhase1 = (e) => {
    e.preventDefault();
    window.location.reload(false);
  };

  const handleLeaders = (quizID) => {
    calls('get', 'herohub/leaders', { quizID }, null, (res) => { setLeaderInfo(res.data); }, (err) => { console.log('error in handleLeaders; err: ', err); });
  };

  const toggleBetweenSignInAndRegister = (e) => {
    e.preventDefault();
    setDisplayRegister(!displayRegister);
    setDisplaySignIn(!displaySignIn);
  };

  if (displaySignIn) {
    return (
      <BackdropStyle>
        <div className="container sign-in">
          <ExitDivSignInModal className="xBtn">
            <ExitButton type="Button" chatsend="true" onClick={() => toggleModal(false)}>X</ExitButton>
          </ExitDivSignInModal>
          <div className="title">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value); }} />
              </label>
              <br />
              <label>
                Password:
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
              </label>
              <Button type="submit" value="Submit" id="signin">Login</Button>
            </form>
            <Button
              type="button"
              value="switch-to-register"
              id="toggle-sign-in-register"
              onClick={toggleBetweenSignInAndRegister}
            >
              No Account?
            </Button>
          </div>
        </div>
      </BackdropStyle>
    );
  }

  if (displayRegister) {
    return (
      <BackdropStyle>
        <div className="container">
          <ExitDivSignInModal className="xBtn">
            <ExitButton type="Button" chatsend="true" onClick={() => toggleModal(false)}>X</ExitButton>
          </ExitDivSignInModal>
          <div className="title">
            <h1>Create New Account</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value); }} />
              </label>
              <br />
              <label>
                Password:
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
              </label>
              <br />
              <label>
                Location:
                <input type="text" value={userLocation} onChange={(e) => { setUserLocation(e.target.value); }} />
              </label>
              <br />
              <label>
                Profile Picture URL:
                <input id="pfpUrl" type="text" value={pfpUrl} onChange={(e) => { setPfpUrl(e.target.value); }} />
              </label>
              <br />
              <button type="submit" value="Submit" id="register">Register</button>
            </form>
            <Button
              type="button"
              value="switch-to-register"
              id="toggle-sign-in-register"
              onClick={toggleBetweenSignInAndRegister}
            >
              Have an Account?
            </Button>
          </div>
        </div>
      </BackdropStyle>
    );
  }

  if (update) {
    return (
      <BackdropStyle>
        <div className="container">
          <ExitDivSignInModal className="xBtn">
            <ExitButton type="Button" chatsend="true" onClick={() => toggleModal(false)}>X</ExitButton>
          </ExitDivSignInModal>
          <div className="title">
            <h1>Update Account Settings</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value); }} />
              </label>
              <br />
              <label>
                Password:
                <input type="text" value={password} onChange={(e) => { setPassword(e.target.value); }} />
              </label>
              <br />
              <label>
                Location:
                <input type="text" value={userLocation} onChange={(e) => { setUserLocation(e.target.value); }} />
              </label>
              <br />
              <label>
                Profile Picture URL:
                <input id="pfpUrl" type="text" value={pfpUrl} onChange={(e) => { setPfpUrl(e.target.value); }} />
              </label>
              <br />
              <button id="register" type="submit" value="Submit">Update</button>
            </form>
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
            <ExitButton type="button" onClick={() => toggleModal(false)}>X</ExitButton>
          </div>
          <div className="title">
          <LeaderBoard quizID={quizID} />
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
            <ExitButton type="button" onClick={() => toggleModal(false)}>X</ExitButton>
          </div>
          <QuizCreatorDiv>
            <QuizCreator />
            <div className="footer">
              <ModalButton type="button" onClick={() => toggleModal(false)}>Cancel</ModalButton>
            </div>
          </QuizCreatorDiv>
        </div>
      </BackdropStyle>
    );
  }

  if (quizComplete) {
    axios({
      method: 'POST',
      url: '/herohub/user/quiz',
      data: {
        userID, quizID, score, difficulty,
      },
    });

    return (
      <BackdropStyle onClick={() => toggleModal(false)}>
        <div className="container">
          <div className="quiz-complete">
            <h1>Quiz Complete!</h1>
            <h3>
              Your Score:
              {` ${score}`}
            </h3>
            <LeaderBoard quizID={quizID} />
            <ModalButton type="button" onClick={returnToPhase1}>Return Home</ModalButton>
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
  leaderboard: PropTypes.number,
  createQuiz: PropTypes.bool,
  register: PropTypes.bool,
  quizComplete: PropTypes.bool,
  update: PropTypes.bool,
  currentScore: PropTypes.bool,
};

Modal.defaultProps = {
  login: false,
  leaderboard: false,
  createQuiz: false,
  register: false,
  quizComplete: false,
  update: false,
};

export default Modal;