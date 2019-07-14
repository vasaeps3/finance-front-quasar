import { authRouter } from '../pages/auth/router';

const routes = [
  {
    path: '/',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'category',
        component: () => import('pages/category/Category.vue'),
        children: [
          {
            path: 'expense-categories',
            component: () => import('pages/category/CategoryList.vue'),
          },
          {
            path: 'income-categories',
            component: () => import('pages/category/CategoryList.vue'),
          },
        ],
      },
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
