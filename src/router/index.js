import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('/@/views/index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('/@/views/Home/index.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('/@/views/Blog/index.vue'),
        children: [
          {
            path: '',
            name: 'BlogList',
            component: () => import('/@/views/Blog/BlogList/index.vue'),
          },
          {
            path: ':id',
            name: 'BlogItem',
            component: () => import('/@/views/Blog/BlogItem/index.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/week4/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
