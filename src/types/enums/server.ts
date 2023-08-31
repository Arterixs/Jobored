export const UserAuthData = {
  LOGIN: process.env.REACT_APP_LOGIN || '',
  PASSWORD: process.env.REACT_APP_PASSWORD || '',
  ID: process.env.REACT_APP_ID || '',
  SECRET: process.env.REACT_APP_SECRET || '',
  HR: process.env.REACT_APP_HR || 'hr=0',
} as const;

export const enum LocalStorage {
  TOKEN = 'tokenAcces',
  FAVORITE = 'favorite',
}

export const enum ServerCodeResponse {
  SUCCES = 1,
  ERROR = 0,
  ERROR_TEXT = 'Что-то пошло не так. Обновите страницу через некоторое время.',
}
