import { success, successPromisify } from './helper';
import {
  DoubledAsyncRailway,
  DoubledRailway,
  SingledAsyncRailway,
  SingledRailway,
} from './types';

export const convertAsync = <T>(
  railway: SingledRailway<T, T>,
): SingledAsyncRailway<T, T> => {
  return (value: T) => {
    return Promise.resolve(railway(value));
  };
};

export function pipe<T, R>(fn1: (arg: T) => R): (value: T) => R;
export function pipe<T, A, R>(fn1: (arg: T) => A, fn2: (arg: A) => R): (value: T) => R;
export function pipe<T, A, B, R>(
  fn1: (arg: T) => A,
  fn2: (arg: A) => B,
  fn3: (arg: B) => R,
): (value: T) => R;
export function pipe<T, A, B, C, R>(
  fn1: (arg: T) => A,
  fn2: (arg: A) => B,
  fn3: (arg: B) => C,
  fn4: (arg: C) => R,
): (value: T) => R;
export function pipe<T, A, B, C, D, R>(
  fn1: (arg: T) => A,
  fn2: (arg: A) => B,
  fn3: (arg: B) => C,
  fn4: (arg: C) => D,
  fn5: (arg: D) => R,
): (value: T) => R;
export function pipe<T, A, B, C, D, E, R>(
  fn1: (arg: T) => A,
  fn2: (arg: A) => B,
  fn3: (arg: B) => C,
  fn4: (arg: C) => D,
  fn5: (arg: D) => E,
  fn6: (arg: E) => R,
): (value: T) => R;
export function pipe<T, A, B, C, D, E, F, R>(
  fn1: (arg: T) => A,
  fn2: (arg: A) => B,
  fn3: (arg: B) => C,
  fn4: (arg: C) => D,
  fn5: (arg: D) => E,
  fn6: (arg: E) => F,
  fn7: (arg: F) => R,
): (value: T) => R;
export function pipe<T, A, B, C, D, E, F, G, R>(
  fn1: (arg: T) => A,
  fn2: (arg: A) => B,
  fn3: (arg: B) => C,
  fn4: (arg: C) => D,
  fn5: (arg: D) => E,
  fn6: (arg: E) => F,
  fn7: (arg: F) => G,
  fn8: (arg: G) => R,
): (value: T) => R;
export function pipe<T, A, B, C, D, E, F, G, H, R>(
  fn1: (arg: T) => A,
  fn2: (arg: A) => B,
  fn3: (arg: B) => C,
  fn4: (arg: C) => D,
  fn5: (arg: D) => E,
  fn6: (arg: E) => F,
  fn7: (arg: F) => G,
  fn8: (arg: G) => H,
  fn9: (arg: H) => R,
): (value: T) => R;
export function pipe<T, A, B, C, D, E, F, G, H, I, R>(
  fn01: (arg: T) => A,
  fn02: (arg: A) => B,
  fn03: (arg: B) => C,
  fn04: (arg: C) => D,
  fn05: (arg: D) => E,
  fn06: (arg: E) => F,
  fn07: (arg: F) => G,
  fn08: (arg: G) => H,
  fn09: (arg: H) => I,
  fn10: (arg: I) => R,
): (value: T) => R;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, R>(
  fn01: (arg: T) => A,
  fn02: (arg: A) => B,
  fn03: (arg: B) => C,
  fn04: (arg: C) => D,
  fn05: (arg: D) => E,
  fn06: (arg: E) => F,
  fn07: (arg: F) => G,
  fn08: (arg: G) => H,
  fn09: (arg: H) => I,
  fn10: (arg: I) => J,
  fn11: (arg: J) => R,
): (value: T) => R;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, K, R>(
  fn01: (arg: T) => A,
  fn02: (arg: A) => B,
  fn03: (arg: B) => C,
  fn04: (arg: C) => D,
  fn05: (arg: D) => E,
  fn06: (arg: E) => F,
  fn07: (arg: F) => G,
  fn08: (arg: G) => H,
  fn09: (arg: H) => I,
  fn10: (arg: I) => J,
  fn11: (arg: J) => K,
  fn12: (arg: K) => R,
): (value: T) => R;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, K, L, R>(
  fn01: (arg: T) => A,
  fn02: (arg: A) => B,
  fn03: (arg: B) => C,
  fn04: (arg: C) => D,
  fn05: (arg: D) => E,
  fn06: (arg: E) => F,
  fn07: (arg: F) => G,
  fn08: (arg: G) => H,
  fn09: (arg: H) => I,
  fn10: (arg: I) => J,
  fn11: (arg: J) => K,
  fn12: (arg: K) => L,
  fn13: (arg: L) => R,
): (value: T) => R;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, K, L, M, R>(
  fn01: (arg: T) => A,
  fn02: (arg: A) => B,
  fn03: (arg: B) => C,
  fn04: (arg: C) => D,
  fn05: (arg: D) => E,
  fn06: (arg: E) => F,
  fn07: (arg: F) => G,
  fn08: (arg: G) => H,
  fn09: (arg: H) => I,
  fn10: (arg: I) => J,
  fn11: (arg: J) => K,
  fn12: (arg: K) => L,
  fn13: (arg: L) => M,
  fn14: (arg: M) => R,
): (value: T) => R;
export function pipe<T, A, B, C, D, E, F, G, H, I, J, K, L, M, N, R>(
  fn01: (arg: T) => A,
  fn02: (arg: A) => B,
  fn03: (arg: B) => C,
  fn04: (arg: C) => D,
  fn05: (arg: D) => E,
  fn06: (arg: E) => F,
  fn07: (arg: F) => G,
  fn08: (arg: G) => H,
  fn09: (arg: H) => I,
  fn10: (arg: I) => J,
  fn11: (arg: J) => K,
  fn12: (arg: K) => L,
  fn13: (arg: L) => M,
  fn14: (arg: M) => N,
  fn15: (arg: N) => R,
): (value: T) => R;
export function pipe<T>(...fns: Array<Function>) {
  return (value: T) => fns.reduce((acc, fn) => fn(acc), value);
}

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
