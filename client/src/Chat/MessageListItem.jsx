import React from 'react';

function MessageListItem({ user, message }) {
  return (
    <div>
      <div style={{ fontWeight: 'bold' }}>
        {user}:
      </div>
      <div>
        {message}
      </div>
    </div>
  );
}

export default MessageListItem;
