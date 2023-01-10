import React, { useContext } from "react";
import { IoMdCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <IoMdCall className="icon" />
          <FaVideo className="icon" />
          <BsThreeDots className="icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
