import { Failure, Success } from './types';

export const success = <T>(input: T): Success<T> => {
  return {
    success: true,
    value: input,
  };
};

export const failure = (message: string): Failure => {
  return {
    success: false,
    message,
  };
};

export const successPromisify = <T>(input: T): Promise<Success<T>> => {
  return Promise.resolve({
    success: true,
    value: input,
  });
};

export const failurePromisify = (message: string): Promise<Failure> => {
  return Promise.resolve({
    success: false,
    message,
  });
};
