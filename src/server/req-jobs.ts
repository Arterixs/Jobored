import { CatalogJobs } from 'types/interface/server';
import { METHOD_JOB } from 'utils/constants/server-api';
import { $apiBase } from './axios';

export const sendReqJobs = async () => {
  try {
    const response = await $apiBase.get<CatalogJobs[]>(`${METHOD_JOB}/`);
    return response.data;
  } catch (err) {
    throw new Error('Bad Request');
  }
};
