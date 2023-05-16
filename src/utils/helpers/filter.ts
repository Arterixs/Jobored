import { MagicNumbers } from 'types/enums/magic-numbers';

export const clickNumArrow = (value: string, setter: (s: string) => void, direction: boolean) => {
  const convertValue = Number(value);
  if (convertValue > MagicNumbers.ONE || direction) {
    const summ = direction ? convertValue + MagicNumbers.ONE : convertValue - MagicNumbers.ONE;
    setter(`${summ}`);
  } else {
    setter('');
  }
};
