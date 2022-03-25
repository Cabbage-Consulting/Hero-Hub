import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { PfpButtons, Form } from '../../GlobalStyles';

function MessageForm({ getChat }) {
  const [inputMsg, setInputMsg] = useState('');

  const handleInputMsg = (e) => {
    e.preventDefault();
    setInputMsg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // using admin user to test post requests

    axios({
      method: 'POST',
      url: '/herohub/chat',
      data: {
        userID: 1,
        body: inputMsg,
      },
    })
      .then(() => getChat())
      .catch((err) => console.log('error message', err));

    setInputMsg('');
  };

  return (
    <div>
      <Form
        type="text"
        value={inputMsg}
        placeholder="message"
        onChange={handleInputMsg}
        chatinput="true"
      />
      <PfpButtons
        onClick={handleSubmit}
        chatsend="true"
      >
        Send
      </PfpButtons>
    </div>
  );
}

MessageForm.propTypes = {
  getChat: PropTypes.func.isRequired,
};

export default MessageForm;
