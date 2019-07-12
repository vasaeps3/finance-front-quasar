import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://localhost:3000',
});

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance;
};
