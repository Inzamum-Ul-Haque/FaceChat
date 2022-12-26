import React from "react";
import { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine";

const MessageForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {};

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        onSubmit={handleSubmit}
        type="text"
        value={value}
        placeholder="Send a message ... "
        onChange={handleChange}
        className="message-input"
      />
    </form>
  );
};

export default MessageForm;
