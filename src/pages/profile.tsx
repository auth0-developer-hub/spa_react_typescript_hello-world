import React from "react";
import { CodeSnippet } from "src/components/code-snippet";
import { UserProfile } from "../models/user-profile";

export const Profile = () => {
  const user: UserProfile = {
    nickname: "Alex",
    name: "Alex Cero",
    picture: "https://cdn.auth0.com/blog/hello-auth0/auth0-user.png",
    updated_at: "2021-05-04T21:33:09.415Z",
    email: "alex@example.com",
    email_verified: false,
    sub: "auth0|12345678901234567890",
  };

  return (
    <div className="content-layout">
      <h1 className="content__title">Profile</h1>
      <div className="content__body">
        <p>
          <strong>Only authenticated users should access this page.</strong>
        </p>
        <div className="profile-grid">
          <div className="profile__header">
            <img src={user.picture} alt="Profile" className="profile__avatar" />
            <div className="profile__headline">
              <h2 className="profile__title">{user.name}</h2>
              <span className="profile__description">{user.email}</span>
            </div>
          </div>
          <div className="profile__details">
            <CodeSnippet
              title="User Profile Object"
              code={JSON.stringify(user, null, 2)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
