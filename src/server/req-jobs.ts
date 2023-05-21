import { contextBody } from 'context/context-api';
import { CatalogJobs } from 'types/interface/server';
import { METHOD_JOB } from 'utils/constants/server-api';
import { $apiBase } from './axios';

export const sendReqJobs = async () => {
  console.log('летит запрос №2');
  try {
    const response = await $apiBase.get<CatalogJobs[]>(`${METHOD_JOB}/`);
    contextBody.dropdownFilter = response.data;
  } catch (err) {
    throw new Error('Bad Request');
  }
};
