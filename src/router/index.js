import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'form',
        component: resolve => require(['../pages/common/form.vue'], resolve)
    }]
})