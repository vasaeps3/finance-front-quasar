<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn v-go-back="'/'" color="primary" label="Logout" /> -->
        <q-toolbar-title>Connect to finance</q-toolbar-title>
        <q-item tag="a" href="https://github.com/vasaeps3" target="_blank" class="items-center">
          <q-icon name="fab fa-github" />
        </q-item>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <!-- class="q-page flex justify-center items-start q-layout-padding" -->
        <div class="flex full-width justify-center">
          <img alt="Auth" src="~assets/images/auth.png" class="auth-img" />
        </div>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'Dashboard',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style>
.auth-img {
  max-width: 200px;
}
</style>
