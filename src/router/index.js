import { createRouter, createWebHistory } from 'vue-router'


const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path:'/',
            redirect:'/tool/gen'
        },
        {
            path:'/tool/gen',
/*             component: () => import('../views/Home.vue') */
            component: () => import('../views/tool/gen/index.vue')
        },
        {
            path:'/tool/gen-edit/index/:tableId(\\d+)',
            component: () => import('@/views/tool/gen/editTable.vue')
        },
        {
            path:'/autoCodeAdmin',
            component: () => import('../views/autoCodeAdmin/autoCodeAdmin.vue')
        },
        {
            path:'/autoCode',
            component: () => import('../views/autoCode/index.vue')
        },
    ]
})

export default router