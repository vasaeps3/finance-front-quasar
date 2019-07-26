import { dinComponentsActions, dinComponentsMutations } from './const';


export default {
  [dinComponentsActions.SET_MENU]: async ({ commit }, data) => {
    commit(dinComponentsMutations.SET_SUB_MENU, data);
  },
  [dinComponentsActions.SHOW_MODAL_ADD_CATEGORY]: async ({ commit }) => {
    commit(dinComponentsMutations.SET_MODAL_COMPONENT, {
      component: 'add-category-new',
      title: 'Add category',
    });
  },
  [dinComponentsActions.SHOW_DETAILS_CATEGORY]: async ({ commit }) => {
    commit(dinComponentsMutations.SET_MODAL_COMPONENT, {
      component: 'categary-details',
      title: 'Category details',
    });
  },
  [dinComponentsActions.HIDE_MODAL]: async ({ commit }) => {
    commit(dinComponentsMutations.SET_MODAL_COMPONENT, {
      component: null,
      title: null,
    });
  },
};
