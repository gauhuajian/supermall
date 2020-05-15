import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from '@/views/home/Home.vue'
const category = () => import('@/views/category/Category.vue')
const cart = () => import('@/views/cart/Cart.vue')
const my = () => import('@/views/my/My.vue')
const details = () => import('@/views/details/Details.vue')
const routes = [

    {
        path: '',
        redirect: '/home',
        meta: '首页'
    },
    {
        path: '/home',
        component: home,
        meta: '首页'
    },
    {
        path: '/category',
        component: category,
        meta: '分类'

    },
    {
        path: '/cart',
        component: cart,
        meta: '购物车'

    },
    {
        path: '/my',
        component: my,
        meta: '个人中心'

    },
    {
        path: '/details/:id?',
        name: 'Detalis',
        component: details,
        meta: '详情'
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta
    next()
})
export default router