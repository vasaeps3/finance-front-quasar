<template>
  <q-page class="flex ">
    <router-view />
  </q-page>
</template>

<style>
</style>

<script>
import { subMenuActions } from '../../store/subMenu/const';

export default {
  beforeCreate() {
    this.$store.dispatch(
      `subMenu/${subMenuActions.SET_MENU}`,
      'category-sub-menu',
    );
  },
  beforeDestroy() {
    this.$store.dispatch(`subMenu/${subMenuActions.SET_MENU}`, null);
  },
  name: 'PageIndex',
};
</script>
