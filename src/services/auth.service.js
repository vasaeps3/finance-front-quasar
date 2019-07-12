import ApiService from './api.service';

export default class AuthService {
  static signUp(user) {
    return ApiService.post('/auth/signup', user);
  }
}
