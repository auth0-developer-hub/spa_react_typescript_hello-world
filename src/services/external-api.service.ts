import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResponse } from "../models/api-response";
import { AppError } from "../models/app-error";

export const callExternalApi = async (options: {
  config: AxiosRequestConfig;
}): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse = await axios(options.config);
    const { data } = response;

    return {
      data,
      error: null,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;

      const { response } = axiosError;

      let message = "http request failed";

      if (response && response.statusText) {
        message = response.statusText;
      }

      if (axiosError.message) {
        message = axiosError.message;
      }

      if (response && response.data && (response.data as AppError).message) {
        message = (response.data as AppError).message;
      }

      return {
        data: null,
        error: {
          message,
        },
      };
    }

    return {
      data: null,
      error: {
        message: (error as Error).message,
      },
    };
  }
};
