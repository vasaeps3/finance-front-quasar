import { authActions, authMutations } from './const';

export default {
  [authActions.SIGN_UP]: async ({ commit }, data) => {
    const res = 12;
    console.log(res, data);
    commit(authMutations.SET_DATA, data);
  },
};
