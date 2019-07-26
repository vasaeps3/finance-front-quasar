<template>
  <q-page class="flex">
    <router-view />
  </q-page>
</template>

<style>
</style>

<script>
import { dinComponentsActions } from '../../store/dinComponents/const';

export default {
  beforeCreate() {
    this.$store.dispatch(
      `dinComponents/${dinComponentsActions.SET_MENU}`,
      'category-sub-menu',
    );
  },
  beforeDestroy() {
    this.$store.dispatch(
      `dinComponents/${dinComponentsActions.SET_MENU}`,
      null,
    );
  },
  name: 'PageIndex',
};
</script>
