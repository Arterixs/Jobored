import { Vacancies } from 'types/interface/server';
import { METHOD_VACANSIES } from 'utils/constants/server-api';
import { $api } from './axios';

export const sendReqVacansy = async (page: number) => {
  console.log('Летит запрос');
  try {
    const response = await $api.get<Vacancies>(`${METHOD_VACANSIES}?published=1&count=4&page=${page}`);
    console.log(page, response.data.objects);
    return response.data.objects;
  } catch (err) {
    throw Error('Bad Request');
  }
};
