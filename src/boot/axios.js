import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  ({ response }) => {
    console.log(response);
    return Promise.reject(response.data);
  },
);


export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance;
};
