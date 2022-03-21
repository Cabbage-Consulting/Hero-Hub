import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
    width: 300px;
    height: 300px;
  }
`;

function Modal({ toggleModal, login, leaderboard }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in submit, event: ', event.target.value);
  }

  // We can either use if statements or conditional rendering
  if (login) {
    return (
      <BackdropStyle onClick={() => toggleModal(false)}>
        <div className="container" onClick={console.log('clicked')}>
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
            </form>
          </div>
          <div className="footer">
            <button type="button" onClick={() => toggleModal(false)}>PlaceHolder (cancel for now)</button>
          </div>
        </div>
      </BackdropStyle>
    );
  }

  // if (leaderboard) {
  //   return (

  //   );
  // }

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

// Modal.propTypes = {
//   toggleModal: PropTypes.func.isRequired,
//   login: PropTypes.bool,
//   leaderboard: PropTypes.bool,
// };

// Modal.defaultProps = {
//   login: false,
//   leaderboard: false,
// };

export default Modal;

// We havent installed propTypes yet
