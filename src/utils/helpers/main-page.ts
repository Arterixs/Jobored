import { StateDataRequest } from 'types/interface/states';

export const getStringSaLary = (salaryFrom: number, salaryTo: number, currency: string) => {
  if (!salaryTo && !salaryFrom) {
    return `з/п по договорённости`;
  }
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

export const convertQueryParams = (state: StateDataRequest) => {
  const { pageBtn, filter, search } = state;
  let result = '';
  if (pageBtn) {
    result += `&page=${pageBtn}`;
  }
  if (filter) {
    result += `${filter}`;
  }
  if (search) {
    result += `&keyword=${search}`;
  }
  return result;
};
