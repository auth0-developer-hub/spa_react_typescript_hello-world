import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { EnvProvider } from "./context/env.context";
import "./styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EnvProvider>
        <App />
      </EnvProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
