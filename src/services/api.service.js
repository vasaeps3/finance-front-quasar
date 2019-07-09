import { axiosInstance } from '../boot/axios';

import tokenService from './token.service';


class ApiService {
  constructor(tokenService) {
    this.tokenService = tokenService;
  }

  setHeader() {
    if (this.tokenService.token) {
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${this.tokenService.getToken()}`
    }
  }

  removeHeader() {
    axiosInstance.defaults.headers.common = {}
  }

  get(resource) {
    return axiosInstance.get(resource)
  }

  post(resource, data) {
    return axiosInstance.post(resource, data)
  }

  put(resource, data) {
    return axiosInstance.put(resource, data)
  }

  delete(resource) {
    return axiosInstance.delete(resource)
  }

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
  **/
  customRequest(data) {
    return axiosInstance(data)
  }
}
const apiService = new ApiService(tokenService);

export default apiService;