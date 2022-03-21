import React, { useState } from 'react';
import MessageForm from './MessageForm.jsx';

function Chatroom() {
  const [messages, setMessages] = useState('');
  return (
    <div>
      <MessageForm />
    </div>
  );
}

export default Chatroom;