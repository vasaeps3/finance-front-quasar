<template>
  <div>
    <add-category />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" @click="test" />
    </q-page-sticky>
    {{type}}
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">Add category</div>
        </q-card-section>

        <q-card-section>
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style>
</style>

<script>
import AddCategoryVue from '../../components/category/AddCategory.vue';

export default {
  name: 'PageIndex',
  components: {
    'add-category': AddCategoryVue,
  },
  data() {
    return {
      prompt: false,
      address: '',
    };
  },
  computed: {
    type() {
      const { type } = this.$route.meta;
      console.log(type);

      return type;
    },
    categoryList() {
      console.log(this.type);
      return 12;
    },
  },
  methods: {
    test() {
      this.prompt = true;
      console.log(123312);
    },
  },
};
</script>
