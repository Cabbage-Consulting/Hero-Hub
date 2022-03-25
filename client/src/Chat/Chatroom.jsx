import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const ChatStyle = styled.div`
  border: thin solid #1d2066;
  border-radius: 5px;
  font-family: monospace;
  height: 65vh;
  padding: .25em;

  #chat-list {
    height: 60vh;
    overflow: scroll;
  }

  #chat-inputs {
    height: 5vh;
    background-color: #71798e94;
    border-radius: 0 0 5px 5px;
  }

  .chat-username {
    color: #1d2066;
    font-weight: 500;
    text-shadow: -0.5px 0.5px #71798e;
  }

  .chat-text {
    color: #1d2066;
    font-style: italic;
  }
`;

function Chatroom() {
  const [messages, setMessages] = useState([]);

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
    <ChatStyle>
      <div id="chat-list">
        <MessageList messages={messages} />
      </div>
      <div id="chat-inputs">
        <MessageForm
          setMessages={setMessages}
          getChat={getChat}
        />
      </div>
    </ChatStyle>
  );
}

export default Chatroom;
