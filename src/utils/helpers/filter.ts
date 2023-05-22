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

export const convertSendString = (salaryFrom: string, salaryTo: string, valueJob: string) => {
  let result = '';
  if (salaryFrom) {
    result += `&payment_from=${salaryFrom}`;
  }
  if (salaryTo) {
    result += `&payment_to=${salaryTo}`;
  }
  if (valueJob) {
    result += `&catalogues=${valueJob}`;
  }
  return result;
};
