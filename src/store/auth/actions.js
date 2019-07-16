import { authActions, authMutations } from './const';

export default {
  [authActions.SIGN_UP]: async ({ commit }, data) => {
    commit(authMutations.SET_DATA, data);
  },
};
