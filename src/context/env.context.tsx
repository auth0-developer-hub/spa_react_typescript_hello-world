import React from "react";
import { Env } from "../models/env";

const apiServerUrl: string | undefined = process.env.REACT_APP_API_SERVER_URL;

if (!apiServerUrl) {
  throw new Error("Missing environment variables.");
}

const dotenv: Env = {
  apiServerUrl: apiServerUrl,
};

export const EnvContext = React.createContext<Env>(dotenv);

export const useEnv = () => {
  const context = React.useContext(EnvContext);
  if (!context) {
    throw new Error(`useEnv must be used within a EnvProvider`);
  }
  return context;
};

export const EnvProvider: React.FC = (props) => {
  return <EnvContext.Provider value={dotenv} {...props} />;
};
