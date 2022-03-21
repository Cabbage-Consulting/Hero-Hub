import React, { useState } from 'react';

function MessageForm() {
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }
  return (
    <div>
      <textarea
        value={input}
        placeholder="Write message..."
        className="new-message-input-field"
        onChange={handleInput}
      />
      <button className="send-message-button">
        Send
      </button>
    </div>
  );
}

export default MessageForm;