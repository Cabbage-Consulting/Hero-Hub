import React, { useState } from 'react';

function MessageForm({ setMessages, chatMessages }) {
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

  const addUserMsg = (item) => {
    setMessages([...chatMessages, item]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserMsg({
      user: inputUser,
      message: inputMsg,
    });

    setInputUser('');
    setInputMsg('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputUser}
        placeholder="username"
        onChange={handleInputUser}
      />
      <input
        type="text"
        value={inputMsg}
        placeholder="message"
        onChange={handleInputMsg}
      />
      <button onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}

export default MessageForm;

{ /* <textarea
value={input}
placeholder="Write message..."
className="new-message-input-field"
onChange={handleInput}
/> */ }
