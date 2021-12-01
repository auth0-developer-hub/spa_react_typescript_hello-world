import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="button button--primary button--compact"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};
