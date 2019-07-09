import axios from 'axios';


export const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
});

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance;
};
