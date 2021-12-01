import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithHistory } from "./auth0-provider-with-history";
import { EnvProvider } from "./context/env.context";
import "./styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EnvProvider>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </EnvProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
