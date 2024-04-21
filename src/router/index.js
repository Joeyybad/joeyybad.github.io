import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Faq from '/src/views/Faq.vue'
import Register from '/src/views/Register.vue'
import Login from '/src/views/Login.vue'
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
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
            {
                path:'/login',
                name: 'Login',
                component: Login
            }
        ]
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router