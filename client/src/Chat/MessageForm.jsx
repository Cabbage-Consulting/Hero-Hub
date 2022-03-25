import React, { useState } from 'react';
import { PfpButtons, Form } from '../../GlobalStyles';
import axios from 'axios';

function MessageForm({ setMessages, chatMessages, getChat }) {
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
    setInputUser('');
  };

  return (
    <div>
      <Form
        type="text"
        value={inputMsg}
        placeholder="message"
        onChange={handleInputMsg}
      />
      <PfpButtons onClick={handleSubmit}>
        Send
      </PfpButtons>
    </div>
  );
}

export default MessageForm;
