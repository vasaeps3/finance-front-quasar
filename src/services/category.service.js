import ApiService from './api.service';

export default class CategoryService {
  static getgategoryList() {
    return ApiService.get('/category');
  }
}
