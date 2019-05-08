import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hooks, { ClassComponent } from "./Hooks";

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {show && <Hooks />}
      <ClassComponent />
    </div>
  );
};

export default App;
