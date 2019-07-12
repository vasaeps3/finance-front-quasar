const PATTERN_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// export const validateEmail = email => PATTERN_EMAIL.test(String(email).toLowerCase());


export const validateMixin = {
  methods: {
    validateEmail(val) {
      return PATTERN_EMAIL.test(String(val).toLowerCase());
    },
  },
};
