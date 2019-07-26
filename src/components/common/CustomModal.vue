<template>
  <div>
    {{isOpenModal}}
    <q-dialog v-model="isOpenModal" persistent v-if="!!modalComponent.component">
      {{modalComponent}}
      <q-card style="min-width: 400px" class="relative-position">
        <q-card-section v-if="!!modalComponent.title">
          <div class="text-h6">{{modalComponent.title}}</div>
        </q-card-section>
        <component v-bind:is="modalComponent.component" @onHideModal="onHideModal"></component>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { dinComponentsActions } from '../../store/dinComponents/const';
import AddCategoryVue from '../category/AddCategory.vue';
import CategoryDetailsVue from '../category/CategoryDetails.vue';

export default {
  name: 'CustomModal',
  components: {
    'add-category-new': AddCategoryVue,
    'categary-details': CategoryDetailsVue,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    modalComponent() {
      return this.$store.state.dinComponents.modalComponent;
    },
    isOpenModal: {
      get() {
        console.log('get isOpenModal');
        return this.modalComponent && !!this.modalComponent.component;
      },
      set(val) {
        if (!val) {
          this.onHideModal();
        }
      },
    },
  },
  methods: {
    onHideModal() {
      this.$store.dispatch(`dinComponents/${dinComponentsActions.HIDE_MODAL}`);
    },
  },
};
</script>

<style>
</style>
