export const authRouter = {
  path: '/auth',
  component: () => import('layouts/Auth.vue'),
  children: [
    { path: 'signin', component: () => import('pages/auth/Login.vue'), meta: { public: true } },
    { path: 'signup', component: () => import('pages/auth/SignUp.vue'), meta: { public: true } },
    { path: '', redirect: 'signin' },
  ],
  meta: { public: true },
};
