import { contextBody } from 'context/context-api';
import { ServerCodeResponse } from 'types/enums/server';
import { Vacancies } from 'types/interface/server';
import { METHOD_VACANSIES } from 'utils/constants/server-api';
import { $api } from './axios';

export const getVacansy = async () => {
  try {
    const response = await $api.get<Vacancies>(`${METHOD_VACANSIES}?count=4&page=1/`);
    contextBody.cardContent = response.data.objects;
    console.log(response.data);
    return ServerCodeResponse.SUCCES;
  } catch (err) {
    return ServerCodeResponse.ERROR;
  }
};
