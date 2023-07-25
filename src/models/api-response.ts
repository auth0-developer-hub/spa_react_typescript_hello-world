import { AppError } from "./app-error";
import { Message } from "./message";

export interface ApiResponse {
  data: Message | null;
  error: AppError | null;
}
