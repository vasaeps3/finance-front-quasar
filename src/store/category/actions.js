import { actionsCategory, mutationsCategory } from './const';
import CategoryService from '../../services/category.service';

export default {
  [actionsCategory.LOAD_LIST]: async ({ commit }) => {
    commit(mutationsCategory.SET_LOADING_STATE, true);

    const categoryList = await CategoryService.getCategoryList();

    commit(mutationsCategory.SET_CATEGORY_LIST, categoryList);
    commit(mutationsCategory.SET_LOADING_STATE, false);
  },

};
