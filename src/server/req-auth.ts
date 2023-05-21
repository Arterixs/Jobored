import { LocalStorage } from 'types/enums/server';
import { Authorization } from 'types/interface/server';
import { METHOD_AUTH, PARAMS_AUTH, PARAMS_AUTH_PASSWORD } from 'utils/constants/server-api';
import { $apiBase } from './axios';

export const senReqAuth = async () => {
  console.log('Летит запрос №3');
  try {
    const response = await $apiBase.get<Authorization>(`${METHOD_AUTH}${PARAMS_AUTH}?${PARAMS_AUTH_PASSWORD}`);
    const token = response.data.access_token;
    localStorage.setItem(LocalStorage.TOKEN, `${token}`);
  } catch (err) {
    throw Error('Error');
  }
};
