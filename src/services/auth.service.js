import ApiService from './api.service';

export default class AuthService {
  static signUp(user) {
    return ApiService.post('/auth/signup', user);
  }

  static signIn(user) {
    return ApiService.post('/auth/signin', user);
  }
}
