import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const SignupButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  /**
   * Using the Signup feature requires you to enable
   * the Auth0 New Universal Login Experience in your tenant.
   * Learn more: https://auth0.com/docs/universal-login/new-experience
   */
  return (
    <button
      className="button button--primary button--compact"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </button>
  );
};
