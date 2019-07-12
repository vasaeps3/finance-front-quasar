import { authMutations } from './const';

export default {
  [authMutations.SET_DATA](state, user) {
    state.data = user;
  },
};
