import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Cart from '@/views/Cart'
import Order from '@/views/Order'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/Index')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('@/views/Product')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/Detail')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: () => import('@/views/OrderList')
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('@/views/OrderConfirm')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('@/views/OrderPay')
      },
      {
        path: 'alipay',
        name: 'order-alipay',
        component: () => import('@/views/AliPay')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
