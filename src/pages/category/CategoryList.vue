<template>
  <div class>
    <div class="q-pa-md row">
      <q-item
        clickable
        v-ripple
        class="col-4 q-pa-sm"
        v-for="category in categoryList"
        :key="category.id"
        @click="openDetails"
      >
        <q-card class="category-card">
          <q-card-section>
            <div class="text-h6">{{category.name}}</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section>{{category.type}}</q-card-section>
        </q-card>
      </q-item>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" @click="addCategoryOpen" />
    </q-page-sticky>
    <q-inner-loading :showing="isLoadingList">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </div>
</template>
<style>
.category-card {
  width: 100%;
}
</style>
<script>
import { actionsCategory } from '../../store/category/const';
import { dinComponentsActions } from '../../store/dinComponents/const';

export default {
  name: 'PageIndex',
  created() {
    this.loadCategoryList();
  },
  computed: {
    type() {
      const { type } = this.$route.meta;

      return type;
    },
    categoryList() {
      return this.$store.getters['category/filterCategory'](this.type);
    },
    isLoadingList() {
      return this.$store.state.category.isLoadingList;
    },
  },
  methods: {
    openDetails() {
      this.$store.dispatch(
        `dinComponents/${dinComponentsActions.SHOW_DETAILS_CATEGORY}`,
      );
    },
    addCategoryOpen() {
      this.$store.dispatch(
        `dinComponents/${dinComponentsActions.SHOW_MODAL_ADD_CATEGORY}`,
      );
    },
    loadCategoryList() {
      this.$store.dispatch(`category/${actionsCategory.LOAD_LIST}`);
    },
  },
};
</script>
