import axios from 'axios';

type HttpTypes = {
  additionalHeader?: any;
};

const http = (config?: HttpTypes) => {
  /*
   * axios config
   * */
  const axiosConfig = {
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      ...config?.additionalHeader,
    },
  };

  return axios.create(axiosConfig);
};

export default http;
