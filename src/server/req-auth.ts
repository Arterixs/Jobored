import { LocalStorage, ServerCodeResponse } from 'types/enums/server';
import { Authorization } from 'types/interface/server';
import { METHOD_AUTH, PARAMS_AUTH, PARAMS_AUTH_PASSWORD } from 'utils/constants/server-api';
import { $apiBase } from './axios';

export const Auth = async () => {
  try {
    const response = await $apiBase.get<Authorization>(`${METHOD_AUTH}${PARAMS_AUTH}?${PARAMS_AUTH_PASSWORD}`);
    const token = response.data.access_token;
    localStorage.setItem(LocalStorage.TOKEN, `${token}`);
    return ServerCodeResponse.SUCCES;
  } catch (err) {
    return ServerCodeResponse.ERROR;
  }
};
