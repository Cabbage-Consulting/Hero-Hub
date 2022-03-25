import React from 'react';
import PropTypes from 'prop-types';

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

MessageListItem.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default MessageListItem;
