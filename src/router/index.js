import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '@/views/home-v'
},
{
  path: '/home-v',
  component: () => import('@/views/home-v')
},
{
  path: '/my-v',
  component: () => import('@/views/my-v')
},
{
  path: '/qa-v',
  component: () => import('@/views/qa-v')
},
{
  path: '/video-v',
  component: () => import('@/views/video-v')
}
]

const router = new VueRouter({
  routes
})

export default router
