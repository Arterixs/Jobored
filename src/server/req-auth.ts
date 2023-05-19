/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
    const response = await $apiBase.get(
      `${METHOD_AUTH}${PARAMS_AUTH}?${LOGIN_USER}&${PASSWORD}&${CLIENT_ID}&${CLIENT_SECRET}&${HR}`
    );
    const result = await response.data;
    console.log(result);
    return 1;
  } catch (err) {
    console.log(err);
    return 0;
  }
};
