<template>
  <div>
    <q-dialog v-model="isOpenModal" persistent>
      <q-card style="min-width: 400px" class="relative-position">
        <q-card-section>
          <div class="text-h6">Add category</div>
        </q-card-section>

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
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import CategoryService from '../../services/category.service';
import { setInputError } from '../../utils/helper';

export default {
  name: 'add-category',
  props: ['isOpen', 'type'],
  data() {
    return {
      isLoading: false,
      formData: {
        name: null,
      },
    };
  },
  computed: {
    isOpenModal: {
      get() {
        return this.isOpen;
      },
      set(val) {
        if (!val) {
          this.$emit('onHideModal');
        }
      },
    },
  },
  methods: {
    async handleSubmit() {
      if (this.$refs.name.hasError) {
        return;
      }
      this.isLoading = true;
      try {
        await CategoryService.addCategory({
          ...this.formData,
          type: this.type,
        });
        this.isLoading = false;
        this.formData.name = null;
        this.$emit('onHideModal', true);
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
