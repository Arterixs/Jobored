export const getIdVacancy = (value: string) => {
  const indexSlash = value.lastIndexOf('/');
  return value.slice(indexSlash + 1);
};
