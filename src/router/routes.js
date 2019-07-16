import { authRouter } from '../pages/auth/router';
import { categoryRouter } from '../pages/category/router';


const routes = [
  {
    path: '/',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      ...categoryRouter,
    ],
  },
  authRouter,
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
