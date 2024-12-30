import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const newChat = [...chat, { user: "You", text: message }];
    setChat(newChat);

    try {
      const response = await axios.post("http://localhost:5000/chatbot", {
        message,
      });
      setChat([
        ...newChat,
        { user: "Chatbot", text: response.data.reply.trim() },
      ]);
    } catch (error) {
      setChat([
        ...newChat,
        { user: "Chatbot", text: "Error connecting to the server." },
      ]);
    }

    setMessage("");
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md max-w-md mx-auto">
      <div className="h-64 overflow-y-auto bg-white p-2 rounded border">
        {chat.map((entry, index) => (
          <div key={index} className="mb-2">
            <strong>{entry.user}:</strong> {entry.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-fuchsia-600 text-white px-4 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
