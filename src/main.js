// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from "vuex"
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import VueResource from 'vue-resource'
import '../static/plugins/scale'
import './assets/css/base.css'
import '../static/css/mintui.css' //最嗨的是他这个直接引入的是一个css文件
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;
// Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
}).$mount('#app')