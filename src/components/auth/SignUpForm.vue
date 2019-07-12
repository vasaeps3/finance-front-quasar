<template>
  <div class="q-pa-lg" style="width:100%; max-width: 500px">
    <q-form @submit="onSubmit" class="q-gutter-md">
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
      <q-input
        v-model="formData.confPassword"
        label="Confirm password *"
        :type="isPwdConf ? 'password' : 'text'"
        hint="Field your password"
        lazy-rules
        :rules="[
          val => !!val || 'Field is required',
          val => validateConfPassword(val) || 'Passwords aren\'t equal',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwdConf ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwdConf = !isPwdConf"
          />
        </template>
      </q-input>
      {{formData}}
      <div>
        <q-btn label="Sign Up" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { validateMixin } from '../../boot/validations';
import { authActions } from '../../store/auth/const';
import AuthService from '../../services/auth.service';

export default {
  name: 'login-form',
  mixins: [validateMixin],
  data() {
    return {
      isPwd: true,
      isPwdConf: true,
      formData: {
        email: 'vasaeps3@gmail.com',
        password: '123',
        confPassword: '123',
      },
    };
  },
  methods: {
    validateConfPassword(val) {
      return val === this.formData.password;
    },
    async onSubmit() {
      console.log(this.$store);
      this.$store.dispatch(`auth/${authActions.SIGN_UP}`, this.formData);
      const a = await AuthService.signUp(this.formData);
      console.log(a);
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
  },
};
</script>

<style>
</style>
