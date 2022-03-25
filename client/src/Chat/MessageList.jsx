/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import MessageListItem from './MessageListItem';

function MessageList({ messages }) {
  return (
    <div>
      {messages.map((item) => (
        <MessageListItem
          user={item.username}
          message={item.body}
        />
      ))}
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;
