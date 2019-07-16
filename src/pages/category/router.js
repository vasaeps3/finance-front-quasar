export const categoryRouter = [
  {
    path: 'category',
    component: () => import('pages/category/Category.vue'),
    children: [
      {
        path: 'expense',
        component: () => import('pages/category/CategoryList.vue'),
        meta: { type: 'expense' },
      },
      {
        path: 'income',
        component: () => import('pages/category/CategoryList.vue'),
        meta: { type: 'income' },
      },
      {
        path: '',
        redirect: 'expense',
      },
    ],
  },
];
