<template>
  <div class="q-layout-padding flex justify-center">
    <!-- content -->
    <login-form />
    <q-toggle v-model="drawerState" />
    {{auth}}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LoginFormVue from '../../components/auth/LoginForm.vue';

export default {
  components: {
    'login-form': LoginFormVue,
  },
  computed: {
    drawerState: {
      get() {
        return this.$store.state.auth.drawerState;
      },
      set(val) {
        this.$store.commit('auth/updateDrawerState', val);
      },
    },
    ...mapState({
      // drawerState: state => state.auth.drawerState,
      auth: 'auth',
    }),
  },
};
</script>

<style>
</style>
