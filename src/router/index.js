import { createRouter, createWebHistory } from 'vue-router'


const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
/*             component: () => import('../views/Home.vue') */
            component: () => import('../views/tool/gen/index.vue')
        },

    ]
})

export default router