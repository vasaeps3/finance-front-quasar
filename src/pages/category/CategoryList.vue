<template>
  <div>
    {{categoryList}}
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="category in categoryList" :key="category.id">
        <q-item-section>
          <q-item-label>{{category.name}}</q-item-label>
          <q-item-label caption>{{category.type}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <add-category :type="type" :isOpen="isOpenModal" @onHideModal="onHideModal" />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" @click="isOpenModal = true" />
    </q-page-sticky>
    <q-inner-loading :showing="isLoadingList">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import AddCategoryVue from '../../components/category/AddCategory.vue';
import { actionsCategory } from '../../store/category/const';

export default {
  name: 'PageIndex',
  components: {
    'add-category': AddCategoryVue,
  },
  created() {
    this.loadCategoryList();
  },
  data() {
    return {
      isOpenModal: false,
    };
  },
  computed: {
    ...mapGetters({
      categoryList: 'category/filterCategory',
    }),
    type() {
      console.log(this.$store.getters);
      const { type } = this.$route.meta;
      return type;
    },
    // categoryList() {
    //   return this.$store.getters['category/filterCategory'](this.type);
    // },
    isLoadingList() {
      return this.$store.state.category.isLoadingList;
    },
  },
  methods: {
    onHideModal(isReload = false) {
      if (isReload) {
        console.log('have to reload');
      }
      this.isOpenModal = false;
    },
    loadCategoryList() {
      this.$store.dispatch(`category/${actionsCategory.LOAD_LIST}`);
    },
  },
};
</script>
