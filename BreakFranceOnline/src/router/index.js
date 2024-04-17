import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Faq from '/src/views/Faq.vue'
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
const routes = [
    {
        path: '/',
        name: "Public",
        component: DefaultLayout,
        redirect: '/',
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/FAQ',
                name: 'FAQ',
                component: Faq
            }
        ]
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router