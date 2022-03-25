import React, { useState } from 'react';
import { PfpButtons, Form } from '../../GlobalStyles';
import axios from 'axios';

function MessageForm({ getChat }) {
  const [inputUser, setInputUser] = useState('');
  const [inputMsg, setInputMsg] = useState('');

  const handleInputUser = (e) => {
    e.preventDefault();
    setInputUser(e.target.value);
  };

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
    setInputUser('');
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

export default MessageForm;
