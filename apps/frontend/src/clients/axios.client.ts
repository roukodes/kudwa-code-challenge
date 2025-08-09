import axios from 'axios';

import { API_BASE_URL } from '@/utils/config';

const axiosClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { axiosClient };
