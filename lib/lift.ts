import { failure, failurePromisify, success, successPromisify } from './helper';
import {
  SingledRailway,
  DoubledRailway,
  Result,
  DoubledAsyncRailway,
  SingledAsyncRailway,
} from './types';
import { convertAsync } from './utils';

export const lift = <T, R>(railway: SingledRailway<T, R>): DoubledRailway<T, R> => {
  return (arg) => {
    if (arg.success) return railway(arg.value);
    return failure(arg.message as string);
  };
};

export function liftToAsync<T>(railway: SingledRailway<T, T>): DoubledAsyncRailway<T, T> {
  return async (arg: Promise<Result<T>>) => {
    const result = await arg;
    if (result.success) {
      const successfulResult = await convertAsync(railway)(result.value);
      if (successfulResult.success) return successPromisify(successfulResult.value);

      return failurePromisify(successfulResult.message as string);
    }
    return failurePromisify(result.message as string);
  };
}

export function liftPromise<T>(
  railway: SingledAsyncRailway<T, T>
): DoubledAsyncRailway<T, T> {
  return async (arg: Promise<Result<T>>) => {
    const result = await arg;
    if (result.success) {
      const successfulResult = await railway(result.value);
      if (successfulResult.success) return successPromisify(successfulResult.value);

      return failurePromisify(successfulResult.message as string);
    }
    return failurePromisify(result.message as string);
  };
}

export function liftPiped<T>(railway: DoubledRailway<T, T>): DoubledAsyncRailway<T, T> {
  return async (arg: Promise<Result<T>>) => {
    const result = await arg;
    if (result.success) {
      const successfulResult = railway(success(result.value));
      if (successfulResult.success) return successPromisify(successfulResult.value);

      return failurePromisify(successfulResult.message as string);
    }
    return failurePromisify(result.message as string);
  };
}
