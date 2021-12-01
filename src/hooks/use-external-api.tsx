import { useAuth0 } from "@auth0/auth0-react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";
import { useEnv } from "../context/env.context";

export enum AccessControlLevel {
  PUBLIC = "public",
  PROTECTED = "requires-authentication",
  RBAC = "requires-role-permission",
  CORS = "requires-cors-allowed-method",
}

export const useExternalApi = () => {
  const [apiEndpoint, setApiEndpoint] = useState("");
  const [apiResponse, setApiResponse] = useState(
    "Click a button to make an API request..."
  );
  const [selectedAccessControlLevel, setSelectedAccessControlLevel] =
    useState<AccessControlLevel | null>(null);

  const { getAccessTokenSilently } = useAuth0();
  const { apiServerUrl } = useEnv();

  const makeRequest = async (options: {
    config: AxiosRequestConfig;
    authenticated?: boolean;
  }) => {
    try {
      if (options.authenticated) {
        const token = await getAccessTokenSilently();

        options.config.headers = {
          ...options.config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      const response: AxiosResponse = await axios(options.config);
      const { data } = response;

      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      }

      return (error as Error).message;
    }
  };

  const getPublicResource = async (): Promise<void> => {
    setSelectedAccessControlLevel(AccessControlLevel.PUBLIC);

    setApiEndpoint("GET /api/messages/public");

    const config: AxiosRequestConfig = {
      url: `${apiServerUrl}/api/messages/public`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    const data = await makeRequest({ config });

    setApiResponse(JSON.stringify(data, null, 2));
  };

  const getProtectedResource = async (): Promise<void> => {
    setSelectedAccessControlLevel(AccessControlLevel.PROTECTED);

    setApiEndpoint("GET /api/messages/protected");

    const config: AxiosRequestConfig = {
      url: `${apiServerUrl}/api/messages/protected`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    const data = await makeRequest({ config, authenticated: true });

    setApiResponse(JSON.stringify(data, null, 2));
  };

  const getRbacResource = async (): Promise<void> => {
    setSelectedAccessControlLevel(AccessControlLevel.RBAC);

    setApiEndpoint("GET /api/messages/admin");

    const config: AxiosRequestConfig = {
      url: `${apiServerUrl}/api/messages/admin`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    const data = await makeRequest({ config, authenticated: true });

    setApiResponse(JSON.stringify(data, null, 2));
  };

  const checkCorsAllowedMethod = async (): Promise<void> => {
    setSelectedAccessControlLevel(AccessControlLevel.CORS);

    setApiEndpoint("DELETE /api/messages/public");

    const config: AxiosRequestConfig = {
      url: `${apiServerUrl}/api/messages/public`,
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    };

    const data = await makeRequest({ config, authenticated: true });

    setApiResponse(JSON.stringify(data, null, 2));
  };

  return {
    selectedAccessControlLevel,
    apiEndpoint,
    apiResponse,
    getPublicResource,
    getProtectedResource,
    getRbacResource,
    checkCorsAllowedMethod,
  };
};
