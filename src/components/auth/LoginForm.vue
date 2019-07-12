<template>
  <div class="q-pa-md" style="width:100%; max-width: 500px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        v-model="email"
        label="Your email *"
        hint="Your email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input type="email" v-model="password" label="Your age *" lazy-rules />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    <q-item to="/auth/signup">asdasd</q-item>
  </div>
</template>

<script>
export default {
  name: 'login-form',
  data() {
    return {
      email: null,
      password: null,
      accept: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'You need to accept the license and terms first',
        });
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted',
        });
      }
    },
    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    },
  },
};
</script>

<style>
</style>
