import { UserAuthData } from 'types/enums/server';

export const VERSION_API = '2.0';
export const BASE_URL = `https://startup-summer-2023-proxy.onrender.com/${VERSION_API}`;
export const METHOD_AUTH = '/oauth2';
export const PARAMS_AUTH = '/password';

export const PARAMS_AUTH_PASSWORD = `?${UserAuthData.LOGIN}&${UserAuthData.PASSWORD}&${UserAuthData.ID}
&${UserAuthData.SECRET}&${UserAuthData.HR}`;
