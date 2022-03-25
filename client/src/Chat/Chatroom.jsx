import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

function Chatroom() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'instant' });
  };

  const getChat = () => {
    axios({
      method: 'get',
      url: '/herohub/chat',
      params: {},
    })
      .then((res) => {
        setMessages(res.data);
        scrollToBottom();
      })
      .catch((err) => (console.log('error message', err)));
  };

  useEffect(() => {
    getChat();
  }, []);
  let checkForUserId = null;
  if (localStorage.getItem('currentUser')) {
    checkForUserId = JSON.parse(localStorage.getItem('currentUser'));
  }

  return (
    <div id="chatroom">
      <div id="chat-list">
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </div>
      {checkForUserId !== null
      && (
      <div id="chat-inputs">
        <MessageForm
          setMessages={setMessages}
          chatMessages={messages}
          getChat={getChat}
        />
      </div>
      )}
    </div>
  );
}

export default Chatroom;
