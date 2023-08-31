import { UserAuthData } from 'types/enums/server';

export const VERSION_API = process.env.REACT_APP_VERSION_API || '2.0';
export const URL = process.env.REACT_APP_BASE_URL || '';
export const BASE_URL = `${URL}${VERSION_API}`;
export const METHOD_AUTH = '/oauth2';
export const PARAMS_AUTH = '/password';
export const METHOD_JOB = '/catalogues';
export const METHOD_VACANSIES = '/vacancies';
export const PARAMS_AUTH_PASSWORD = `${UserAuthData.LOGIN}&${UserAuthData.PASSWORD}&${UserAuthData.ID}
&${UserAuthData.SECRET}&${UserAuthData.HR}`;
