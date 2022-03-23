import React from 'react';
import MessageListItem from './MessageListItem';

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
