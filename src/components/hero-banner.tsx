import React from "react";

export const HeroBanner: React.FC = () => {
  const logo = "https://cdn.auth0.com/blog/hello-auth0/react-logo.svg";

  const openCodeSample = () => {
    window.open(
      "https://auth0.com/developers/hub/code-samples/spa/react-typescript/",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div className="hero-banner">
      <img className="hero-banner__logo" src={logo} alt="React logo" />
      <h1 className="hero-banner__headline">Hello, React World!</h1>
      <p className="hero-banner__description">
        This is a sample application that demonstrates the authentication flow
        for a React app using <strong>Auth0</strong>.
      </p>

      <button onClick={openCodeSample} className="button button--secondary">
        Check out the code sample →
      </button>
    </div>
  );
};
