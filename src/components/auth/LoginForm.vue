<template>
  <div class="q-pa-md" style="width:100%; max-width: 500px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        v-model="formData.email"
        label="Your email *"
        hint="Your email"
        lazy-rules
        :rules="[ val => validateEmail(val) || 'Please field email']"
      />
      <q-input
        v-model="formData.password"
        label="Your password *"
        :type="isPwd ? 'password' : 'text'"
        hint="Field your password"
        lazy-rules
        :rules="[ val => !!val || 'Field is required']"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div class="row justify-between">
        <div class="col">
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
        <div class="col flex-0">
          <q-item to="/auth/signup" class="items-center">Sign up</q-item>
        </div>
      </div>
      <div></div>
    </q-form>
  </div>
</template>

<script>
import { validateMixin } from '../../boot/validations';
import AuthService from '../../services/auth.service';
import TokenService from '../../services/token.service';

export default {
  name: 'login-form',
  mixins: [validateMixin],
  data() {
    return {
      isPwd: true,
      formData: {
        email: 'vasaeps3@gmail.com',
        password: '123',
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = await AuthService.signIn(this.formData);
        TokenService.saveToken(data);
        this.$router.push('/');
        console.log(data);
      } catch (e) {
        console.log(e);
      }
      // if (this.accept !== true) {
      //   this.$q.notify({
      //     color: 'red-5',
      //     textColor: 'white',
      //     icon: 'fas fa-exclamation-triangle',
      //     message: 'You need to accept the license and terms first',
      //   });
      // } else {
      //   this.$q.notify({
      //     color: 'green-4',
      //     textColor: 'white',
      //     icon: 'fas fa-check-circle',
      //     message: 'Submitted',
      //   });
      // }
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
