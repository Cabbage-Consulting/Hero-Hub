import React from 'react';

function MessageListItem({ user, message }) {
  return (
    <div>
      {user}
      {message}
    </div>
  );
}

export default MessageListItem;
