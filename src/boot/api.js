import apiService from '../services/api.service';

export default async ({ Vue }) => {
  Vue.prototype.$api = apiService;
};
