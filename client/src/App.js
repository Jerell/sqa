import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import Chat from "./Chat";
const ENDPOINT = "https://sqa-webchat.herokuapp.com/";

function App() {
  const ws = useRef(null);
  const [msg, setMsg] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    ws.current = socketIOClient(ENDPOINT);

    ws.current.on("chat message", (incomingMessage) => {
      console.log(incomingMessage);
      setHistory((prev) => [...prev, incomingMessage]);
    });
  }, []);

  function handleChange(e) {
    setMsg(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(msg);
    ws.current.emit("chat message", msg);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Chat history={history} />
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
