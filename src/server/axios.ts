import axios from 'axios';
import { LocalStorage } from 'types/enums/server';
import { BASE_URL } from 'utils/constants/server-api';

export const $apiBase = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
  },
});

$apiBase.interceptors.request.use((config) => {
  const newConfig = config;
  const token = localStorage.getItem(LocalStorage.TOKEN);
  newConfig.headers.Authorization = `Bearer ${token || ''}`;
  return newConfig;
});
