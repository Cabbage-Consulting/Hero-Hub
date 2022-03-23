import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  const getChat = () => {
    axios({
      method: 'get',
      url: '/herohub/chat',
      params: {},
    })
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => (console.log('error message', err)));
  };

  useEffect(() => {
    getChat();
  }, []);

  return (
    <div style={{ border: 'solid' }}>
      <MessageList messages={messages} />
      <MessageForm setMessages={setMessages} chatMessages={chatMessages} getChat={getChat} />
    </div>
  );
}

export default Chatroom;