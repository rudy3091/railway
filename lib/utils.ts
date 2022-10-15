import { SingledAsyncRailway, SingledRailway } from './types';

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
