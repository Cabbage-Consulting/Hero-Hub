import React, { useState } from 'react';
import MessageListItem from './MessageListItem.jsx';

function MessageList({ messages }) {
  return (
    <div>
      {messages.map((item) =>
      <MessageListItem
        user={item.username}
        message={item.body}
      />)}
    </div>
  );
}

export default MessageList;