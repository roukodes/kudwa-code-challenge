const ENV = import.meta.env;

const { VITE_API_URL: API_BASE_URL = '' } = ENV ?? {};

export { API_BASE_URL };
