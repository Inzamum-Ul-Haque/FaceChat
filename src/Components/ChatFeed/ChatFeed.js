import React from "react";
import MessageForm from "../MessageForm/MessageForm";
import MyMessage from "../MyMessage/MyMessage";
import TheirMessage from "../TheirMessage/TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];
  console.log(chat, userName, messages);

  return <div>Chatfeed</div>;
};

export default ChatFeed;
