import React, { useState } from 'react';

function MessageForm() {
  return (
    <div>
      <textarea
        value=''
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button className="send-message-button">
        Send
      </button>
    </div>
  );
}

export default MessageForm;