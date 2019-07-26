import { dinComponentsMutations } from './const';


export default {
  [dinComponentsMutations.SET_SUB_MENU](state, subMenu) {
    state.subMenu = subMenu;
  },
  [dinComponentsMutations.SET_MODAL_COMPONENT](state, data) {
    state.modalComponent = data;
  },
};
