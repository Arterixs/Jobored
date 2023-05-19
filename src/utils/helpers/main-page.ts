export const getStringSaLary = (salaryFrom: number, salaryTo: number, currency: string) => {
  if (salaryFrom === salaryTo) {
    return `з/п ${salaryFrom} ${currency}`;
  }
  if (salaryTo && salaryFrom) {
    return `з/п ${salaryFrom} - ${salaryTo} ${currency}`;
  }
  if (salaryTo) {
    return `з/п от ${salaryTo} ${currency}`;
  }
  return `з/п от ${salaryFrom} ${currency}`;
};
