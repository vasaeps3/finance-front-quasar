import { axiosInstance } from '../boot/axios';

import TokenService from './token.service';


export default class ApiService {
  static setHeader() {
    const token = TokenService.getToken();

    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  static removeHeader() {
    axiosInstance.defaults.headers.common = {};
  }

  static get(resource) {
    return axiosInstance.get(resource);
  }

  static post(resource, data) {
    return axiosInstance.post(resource, data);
  }

  static put(resource, data) {
    return axiosInstance.put(resource, data);
  }

  static delete(resource) {
    return axiosInstance.delete(resource);
  }

  static customRequest(data) {
    return axiosInstance(data);
  }
}
