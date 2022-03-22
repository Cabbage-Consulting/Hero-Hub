import React, { useState } from 'react';
import MessageListItem from './MessageListItem.jsx';

function MessageList({ messages }) {
  return (
    <div>
      {messages.map((item) =>
      <MessageListItem
        user={item.user}
        message={item.message}
      />)}
    </div>
  );
}

export default MessageList;