export interface ApiCustomResponse<T> {
  success: boolean;
  message: string;
  response: T;
}
