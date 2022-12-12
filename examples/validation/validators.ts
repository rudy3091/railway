/**
 * ## Rules:
 * - user's input should have longer than 3 characters.
 * - user's input should have shorter than 10 characters.
 * - user's input should not contain characters other than alphabets, numbers, underscore('_')
 */
import * as R from '@rudy3091/railway';

export const isLongerThan3Chars: R.SingledRailway<string, string> = (input: string) => {
  if (input.length > 3) return R.success(input);
  return R.failure('input shuould have longer than 3 characters.');
};

export const isShorterThan10Chars: R.SingledRailway<string, string> = (input: string) => {
  if (input.length < 10) return R.success(input);
  return R.failure('input should have shorter than 10 characters.');
};

export const isContainValidCharactersOnly: R.SingledRailway<string, string> = (
  input: string
) => {
  if (input.match(/[^a-zA-Z0-9_]/))
    return R.failure(
      "input should not contain characters other than alphabets, numbers, underscore('_')"
    );
  return R.success(input);
};
