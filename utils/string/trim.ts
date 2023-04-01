export const trim = (value: string, trimAfterLength: number) => {
  if (value.length < trimAfterLength) {
    return value;
  }

  return `${value.slice(0, trimAfterLength)}...`;
};
