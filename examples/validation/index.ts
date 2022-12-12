import { createInterface } from 'readline';
import * as R from '@rudy3091/railway';
import {
  isLongerThan3Chars,
  isShorterThan10Chars,
  isContainValidCharactersOnly,
} from './validators';
import { blue, red } from './utils';

const prompt: R.SingledRailway<string, string> = () => {
  process.stdout.write('input: ');
  return R.success('');
};

export const getLine: R.SingledAsyncRailway<string, string> = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'input: ',
  });

  return new Promise((resolve) => {
    rl.on('line', (line: string) => {
      resolve(R.success(line.trim()));
      rl.close();
    });
  });
};

const validate = R.pipe(
  R.lift(isLongerThan3Chars),
  R.lift(isShorterThan10Chars),
  R.lift(isContainValidCharactersOnly)
);

const showResult: R.DoubledAsyncRailway<string, string> = async (
  input: Promise<R.Result<string>>
) => {
  const result = await input;
  if (result.success) console.log(blue('good!'));
  else console.log(red(result.message));
  return R.success('');
};

const run = R.pipe(
  R.liftToAsync(prompt),
  R.liftPromise(getLine),
  R.liftPiped(validate),
  showResult
);

console.log('^D to exit');
R.loopAsync(run)('');
