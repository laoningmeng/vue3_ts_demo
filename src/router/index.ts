import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      children:[
        {
          path: '/goods',
          name: 'goods',
          meta:{
            isShow: true,
            title: "商品管理"
          },
          component: () => import('../views/GoodsView.vue')
        },
        {
          path: '/user',
          name: 'user',
          meta:{
            isShow: true,
            title: "用户管理"
          },
          component: () => import('../views/UserView.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
  ]
})

export default router
