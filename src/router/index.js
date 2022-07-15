import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout/layout-l.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home',
  component: layout
},
{
  path: '/layout',
  component: layout,
  children: [
    {
      path: '/home',
      component: () => import('@/views/home/home-v')
    },
    {
      path: '/my-v',
      component: () => import('@/views/my/my-v')
    },
    {
      path: '/qa-v',
      component: () => import('@/views/qa/qa-v')
    },
    {
      path: '/video-v',
      component: () => import('@/views/video/video-v')
    }
  ]
},

{
  path: '/search',
  component: () => import('@/views/search/search-s')
},
{
  path: '/Details-d/:id',
  component: () => import('@/views/Details/Details-d')
},
{
  path: '/login',
  component: () => import('@/views/login/login-l.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
