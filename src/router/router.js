import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/home.vue'
Vue.use(VueRouter);

export const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: 'home', component: Home }
    ]
});