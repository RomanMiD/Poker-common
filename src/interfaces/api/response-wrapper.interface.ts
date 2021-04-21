export interface ResponseWrapper<T> {
  data: T | null;
  error: ResponseError | null;
}

export interface ResponseError {
  data?: unknown;
  message: string;
}
