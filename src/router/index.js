import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from '../views/home/Home.vue'
const category = () => import('../views/category/Category.vue')
const shopping = () => import('../views/shopping/Shopping.vue')
const my = () => import('../views/my/My.vue')

const routes = [

    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/shopping',
        component: shopping
    },
    {
        path: '/my',
        component: my
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router