import { createRouter, createWebHashHistory } from 'vue-router'
import { Dialog } from 'vant'
import store from '@/store'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home'),
        meta: { requiresAuth: false }
      },
      {
        path: '/wealth',
        name: 'wealth',
        component: () => import('@/views/wealth'),
        meta: { requiresAuth: true }
      },
      {
        path: '/life',
        name: 'life',
        component: () => import('@/views/life'),
        meta: { requiresAuth: true }
      },
      {
        path: '/Revival_agriculture',
        name: 'Revival_agriculture',
        component: () => import('@/views/Revival_agriculture'),
        meta: { requiresAuth: true }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user'),
        meta: { requiresAuth: false }
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/message'),
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/personInformation',
    name: 'personInformation',
    component: () => import('@/views/personInformation'),
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  // 判断页面是否需要登录才能访问
  if (to.meta.requiresAuth) {
    // 如果已登录，则直接通过
    if (store.state.user) {
      return next()
    }

    // 没有登录，提示是否登录
    Dialog.confirm({
      title: '访问提示',
      message: '该功能需要登录才能访问，是否登录?'
    }).then(() => { // 确认执行这里
      router.replace({
        name: 'login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
    }).catch(() => { // 取消执行这里
      // 取消了，中断路由导航
      next(false)
    })
  } else {
    // 不需要登录状态的页面，直接过去
    next()
  }
})
export default router
