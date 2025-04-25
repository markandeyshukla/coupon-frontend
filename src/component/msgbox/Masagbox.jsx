import React, { useState } from 'react';
import './mscss.css';

function ChatBox() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === '') return;
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div className="chat-message" key={index}>{msg}</div>
        ))}
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;
