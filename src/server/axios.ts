import axios from 'axios';
import { BASE_URL } from 'utils/constants/server-api';

export const $apiBase = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
  },
});
