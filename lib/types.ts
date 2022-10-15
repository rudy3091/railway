export interface Success<T> {
  success: true;
  value: T;
}

export interface Failure {
  success: false;
  message: string;
}

export type Result<T> = Success<T> | Failure;

export type SingledRailway<T, R> = (input: T) => Result<R>;
export type DoubledRailway<T, R> = (input: Result<T>) => Result<R>;

export type SingledAsyncRailway<T, R> = (input: T) => Promise<Result<R>>;
export type DoubledAsyncRailway<T, R> = (input: Promise<Result<T>>) => Promise<Result<T>>;
