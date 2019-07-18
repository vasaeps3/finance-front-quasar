import ApiService from './api.service';

export default class CategoryService {
  static getCategoryList() {
    return ApiService.get('/category');
  }

  static addCategory(category) {
    return ApiService.post('/category', category);
  }
}
