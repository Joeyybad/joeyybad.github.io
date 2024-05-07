import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Faq from '/src/views/Faq.vue'
import Register from '/src/views/Register.vue'
import Login from '/src/views/Login.vue'
import Profil from '/src/views/Profil.vue'
import Eventlist from '/src/views/EventList.vue'
import Event from '/src/views/Event.vue'
import Grouplist from '/src/views/GroupList.vue'
import Group from '/src/views/Group.vue'
import Eventcreate from '/src/views/EventCreate.vue'
import Groupcreate from '/src/views/GroupCreate.vue'
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
            },
            {
                path:'/profil',
                name:'Profil',
                component: Profil
            },
            {
                path:'/eventlist',
                name:'Eventlist',
                component: Eventlist
            },
            {
                path:'/grouplist', 
                name:'Grouplist',
                component: Grouplist
            },
            {
                path:'/group', 
                name:'Group',
                component: Group
            },
            {
                path:'/eventcreate', 
                name:'Eventcreate',
                component: Eventcreate
            },
            {
                path:'/groupcreate', 
                name:'Groupcreate',
                component: Groupcreate
            },
            {
                path:'/event/:eventId',
                name:'Event',
                component: Event,
                props: true
            },

        ]
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router