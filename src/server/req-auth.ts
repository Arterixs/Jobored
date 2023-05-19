import { Authorization } from 'types/interface/server';
import { METHOD_AUTH, PARAMS_AUTH, PARAMS_AUTH_PASSWORD } from 'utils/constants/server-api';
import { $apiBase } from './axios';

export const Auth = async () => {
  try {
    const response = await $apiBase.get<Authorization>(`${METHOD_AUTH}${PARAMS_AUTH}?${PARAMS_AUTH_PASSWORD}`);
    const result = response.data;
    console.log(result);
    return 1;
  } catch (err) {
    console.log(err);
    return 0;
  }
};
