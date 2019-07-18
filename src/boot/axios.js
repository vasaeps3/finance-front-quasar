import axios from 'axios';
import TokenService from '../services/token.service';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (request) => {
    const token = TokenService.getToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
);

axiosInstance.interceptors.response.use(
  response => response.data,
  ({ response }) => Promise.reject(response.data),
);


export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance;
};
