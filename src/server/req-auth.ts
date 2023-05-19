/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Authorization } from 'types/interface/server';
import {
  CLIENT_ID,
  CLIENT_SECRET,
  HR,
  LOGIN_USER,
  METHOD_AUTH,
  PARAMS_AUTH,
  PASSWORD,
} from 'utils/constants/server-api';
import { $apiBase } from './axios';

export const Auth = async () => {
  try {
    const response = await $apiBase.get<Authorization>(
      `${METHOD_AUTH}${PARAMS_AUTH}?${LOGIN_USER}&${PASSWORD}&${CLIENT_ID}&${CLIENT_SECRET}&${HR}`
    );
    const result = response.data;
    console.log(result);
    return 1;
  } catch (err) {
    console.log(err);
    return 0;
  }
};
