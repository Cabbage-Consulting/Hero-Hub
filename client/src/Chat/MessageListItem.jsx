import React from 'react';

function MessageListItem({ user, message }) {
  return (
    <div>
      <div className="chat-username">
        {user}
        :
      </div>
      <div className="chat-text">
        {message}
      </div>
    </div>
  );
}

export default MessageListItem;
