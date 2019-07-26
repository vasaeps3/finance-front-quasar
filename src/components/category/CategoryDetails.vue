<template>
  <div>
    <q-card-section>asdas</q-card-section>
    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="Cancel" v-close-popup />
    </q-card-actions>
    <q-inner-loading :showing="isLoading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style>
</style>
