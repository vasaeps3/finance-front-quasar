import Vue from 'vue';
import VueRouter from 'vue-router';

import TokenService from '../services/token.service';
import routes from './routes';

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

// export default function (/* { store, ssrContext } */) {
const Router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,

  // Leave these as is and change from quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
});

Router.beforeEach((to, from, next) => {
  // console.log('------------------------------------------');
  // console.log('Router.beforeEach from');
  // console.log(from);
  // console.log('to');
  // console.log(to);
  // console.log('------------------------------------------');
  const isPublic = to.matched.some(record => record.meta.public);
  // const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken();

  if (!isPublic && !loggedIn) {
    next({
      path: '/auth',
      query: { redirect: to.fullPath },
    });
  }

  // if (!isPublic && !loggedIn) {
  //   return next({
  //     path: '/login',
  //     query: { redirect: to.fullPath }
  // Store the full path to redirect the user to after login
  //   });
  // }

  // // Do not allow user to visit login page or register page if they are logged in
  // if (loggedIn && onlyWhenLoggedOut) {
  //   return next('/')
  // }

  next();
});


export default Router;
// }
