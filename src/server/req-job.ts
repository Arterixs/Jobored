import { ArrayVacancies } from 'types/interface/server';
import { METHOD_VACANSIES } from 'utils/constants/server-api';
import { $api } from './axios';

export const sendReqJob = async (id: string) => {
  try {
    const response = await $api.get<ArrayVacancies>(`${METHOD_VACANSIES}/${id}/`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw Error('Bad Request');
  }
};
