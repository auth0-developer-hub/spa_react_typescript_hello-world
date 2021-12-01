import React from "react";
import { CodeSnippet } from "../components/code-snippet";
import { AccessControlLevel, useExternalApi } from "../hooks/use-external-api";

export const ExternalApi = () => {
  const {
    selectedAccessControlLevel,
    apiEndpoint,
    apiResponse,

    getPublicResource,
    getProtectedResource,
    getRbacResource,
    checkCorsAllowedMethod,
  } = useExternalApi();

  return (
    <div className="content-layout">
      <h1 className="content__title">External API</h1>
      <div className="content__body">
        <p>
          Use the buttons below to request resources from an API server.
          <br />
          Each API endpoint has a different access control level.
          <br />
          <strong>Only authenticated users can access this page.</strong>
        </p>

        <div className="messages-grid">
          <div className="messages-grid__header">
            API Endpoint by Access Control Level
          </div>
          <div className="messages-grid__options">
            <div
              onClick={getPublicResource}
              className={`messages-grid__option ${
                selectedAccessControlLevel === AccessControlLevel.PUBLIC &&
                "messages-grid__option--active"
              }`}
            >
              Public
            </div>
            <div
              onClick={getProtectedResource}
              className={`messages-grid__option ${
                selectedAccessControlLevel === AccessControlLevel.PROTECTED &&
                "messages-grid__option--active"
              }`}
            >
              Protected
            </div>
            <div
              onClick={getRbacResource}
              className={`messages-grid__option ${
                selectedAccessControlLevel === AccessControlLevel.RBAC &&
                "messages-grid__option--active"
              }`}
            >
              RBAC
            </div>
            <div
              onClick={checkCorsAllowedMethod}
              className={`messages-grid__option ${
                selectedAccessControlLevel === AccessControlLevel.CORS &&
                "messages-grid__option--active"
              }`}
            >
              CORS
            </div>
          </div>
          <CodeSnippet title={apiEndpoint} code={apiResponse} />
        </div>
      </div>
    </div>
  );
};
