import { subMenuMutations } from './const';


export default {
  [subMenuMutations.SET_DATA](state, subMenu) {
    state.subMenu = subMenu;
  },
};
