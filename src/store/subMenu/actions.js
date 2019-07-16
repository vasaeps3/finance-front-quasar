import { subMenuActions, subMenuMutations } from './const';


export default {
  [subMenuActions.SET_MENU]: async ({ commit }, data) => {
    commit(subMenuMutations.SET_DATA, data);
  },
};
