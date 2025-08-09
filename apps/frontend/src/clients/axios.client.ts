import axios from 'axios';

import { API_BASE_URL } from '@/utils/config';

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: add request and response interceptors

export { axiosClient };
