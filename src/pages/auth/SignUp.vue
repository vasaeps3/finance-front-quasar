<template>
  <div class="q-layout-padding flex justify-center">
    <sign-up />
  </div>
</template>


<script>
import { mapState } from 'vuex';
import SignUpFormVue from '../../components/auth/SignUpForm.vue';

export default {
  components: {
    'sign-up': SignUpFormVue,
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
      auth: 'auth',
    }),
  },
};
</script>

<style>
</style>
