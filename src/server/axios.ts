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

export const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  },
});

$apiBase.interceptors.request.use((config) => {
  const newConfig = config;
  const token = localStorage.getItem(LocalStorage.TOKEN);
  newConfig.headers.Authorization = `Bearer ${token || ''}`;
  return newConfig;
});
