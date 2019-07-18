import { mutationsCategory } from './const';

export default {
  [mutationsCategory.SET_LOADING_STATE](state, isLoading) {
    state.isLoadingList = isLoading;
  },
  [mutationsCategory.SET_CATEGORY_LIST](state, categoryList) {
    state.categoryList = categoryList;
  },
};
