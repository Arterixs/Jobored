import { contextBody } from 'context/context-api';
import { Vacancies } from 'types/interface/server';
import { METHOD_VACANSIES } from 'utils/constants/server-api';
import { $api } from './axios';

export const sendReqVacansy = async () => {
  console.log('Летит запрос');
  try {
    const response = await $api.get<Vacancies>(`${METHOD_VACANSIES}?count=4&page=0/`);
    contextBody.cardContent = response.data.objects;
  } catch (err) {
    throw Error('Bad Request');
  }
};
