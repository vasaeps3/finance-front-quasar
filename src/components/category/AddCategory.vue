<template>
  <div>
    <q-card-section>
      <q-input
        dense
        v-model="formData.name"
        autofocus
        ref="name"
        @keyup.enter="handleSubmit"
        :rules="[val => !!val || 'Field is required']"
      >
        <template v-slot:prepend>
          <q-icon name="fas fa-edit" />
        </template>
      </q-input>
    </q-card-section>
    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="Cancel" v-close-popup />
      <q-btn flat label="Add address" type="submit" @click="handleSubmit" />
    </q-card-actions>
    <q-inner-loading :showing="isLoading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </div>
</template>

<script>
import CategoryService from '../../services/category.service';
import { actionsCategory } from '../../store/category/const';
import { setInputError } from '../../utils/helper';

export default {
  name: 'add-category',
  data() {
    return {
      isLoading: false,
      formData: {
        name: null,
      },
    };
  },
  methods: {
    handleCallback() {
      this.$emit('onHideModal', true);
      this.$store.dispatch(`category/${actionsCategory.LOAD_LIST}`);
    },
    async handleSubmit() {
      if (this.$refs.name.hasError) {
        return;
      }
      this.isLoading = true;
      const { type } = this.$route.meta;
      try {
        await CategoryService.addCategory({
          ...this.formData,
          type,
        });
        this.isLoading = false;
        this.handlewCallback();
        this.formData.name = null;
      } catch (e) {
        this.isLoading = false;
        if (e.message.length) {
          e.message.forEach((m) => {
            const ref = this.$refs[m.property];
            if (ref) {
              setInputError(ref, m.messages[0]);
            }
          });
        }
      }
    },
  },
};
</script>

<style>
</style>
