import React, { useState, useEffect } from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

function Chatroom() {
  const [messages, setMessages] = useState([]);
  const chatMessages = [
    {
      user: 'man',
      message: 'what up'
    },
    {
      user: 'bigman',
      message: 'what up'
    },
    {
      user: 'lilman',
      message: 'what up'
    },
    {
      user: 'badman',
      message: 'man'
    },
    {
      user: 'roadman',
      message: 'wah gwaan'
    },
  ]

  useEffect(() => {
    setMessages(chatMessages);
  }, []);

  return (
    <div>
      <MessageList messages={messages} />
      <MessageForm />
    </div>
  );
}

export default Chatroom;