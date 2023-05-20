import { contextBody } from 'context/context-api';
import { ServerCodeResponse } from 'types/enums/server';
import { CatalogJobs } from 'types/interface/server';
import { METHOD_JOB } from 'utils/constants/server-api';
import { $apiBase } from './axios';

export const GetJobs = async () => {
  try {
    const response = await $apiBase.get<CatalogJobs[]>(`${METHOD_JOB}/`);
    contextBody.dropdownFilter = response.data;
    return ServerCodeResponse.SUCCES;
  } catch (err) {
    return ServerCodeResponse.ERROR;
  }
};
