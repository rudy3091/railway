export const blue = (message: string) => {
  return `\x1b[34m${message}\x1b[0m`;
};

export const red = (message: string) => {
  return `\x1b[31m${message}\x1b[0m`;
};
