import React from "react";
import { Auth0Resource } from "../models/auth0-resource";
import { FooterHyperlink } from "./footer-hyperlink";

export const Footer = () => {
  const resourceList: Auth0Resource[] = [
    {
      path: "https://auth0.com/why-auth0/",
      label: "Why Auth0",
    },
    {
      path: "https://auth0.com/docs/get-started",
      label: "How It Works",
    },
    {
      path: "https://auth0.com/blog/developers/",
      label: "Developer Blog",
    },
    {
      path: "https://auth0.com/contact-us",
      label: "Contact an Expert",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-grid__info">
          <div className="footer-info__message">
            <p className="footer-message__headline">
              <span>This sample application is brought to you by&nbsp;</span>
              <FooterHyperlink path="https://auth0.com/">Auth0</FooterHyperlink>
            </p>
            <p className="footer-message__description">
              <FooterHyperlink path="https://auth0.com/docs/quickstarts/">
                <span>
                  Securely implement authentication using Auth0 on any stack and
                  any device&nbsp;
                </span>
                <u>in less than 10 minutes</u>
              </FooterHyperlink>
            </p>
          </div>
          <div className="footer-info__button">
            <button
              className="button button--secondary"
              onClick={() =>
                window.open(
                  "https://auth0.com/signup",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              Create Free Auth0 Account
            </button>
          </div>
          <div className="footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="footer-info__resource-list-item"
              >
                <FooterHyperlink path={resource.path}>
                  {resource.label}
                </FooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-grid__brand">
          <div className="footer-brand">
            <img
              className="footer-brand__logo"
              src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
              alt="Auth0"
              width="20"
              height="22.22"
            />
            <FooterHyperlink path="https://auth0.com/">
              Auth0 Inc
            </FooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
