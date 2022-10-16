import { success, successPromisify } from './helper';
import {
  DoubledAsyncRailway,
  DoubledRailway,
  SingledAsyncRailway,
  SingledRailway,
} from './types';

export const convertAsync = <T>(
  railway: SingledRailway<T, T>
): SingledAsyncRailway<T, T> => {
  return (value: T) => {
    return Promise.resolve(railway(value));
  };
};

export const pipe = <T>(...fns: Array<(arg: T) => T>) => {
  return (value: T) => fns.reduce((acc, fn) => fn(acc), value);
};

export const loopWhileSuccess = <T>(railway: DoubledRailway<T, T>) => {
  return (value: T) => {
    let result = railway(success(value));
    while (result.success) result = railway(success(result.value));
  };
};

export const loopAsync = <T>(railway: DoubledAsyncRailway<T, T>) => {
  return async (value: T) => {
    let result = await railway(successPromisify(value));
    while (true) {
      if (result.success) result = await railway(successPromisify(result.value));
      else result = await railway(successPromisify(value));
    }
  };
};

export const loopAsyncWhileSuccess = <T>(railway: DoubledAsyncRailway<T, T>) => {
  return async (value: T) => {
    let result = await railway(successPromisify(value));
    while (result.success) result = await railway(successPromisify(value));
  };
};
