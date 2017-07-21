// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from "vuex"
import router from './router'
import store from './store'
import '../static/plugins/scale'
import './assets/css/base.css'
import MintUI from 'mint-ui'
import '../static/css/mintui.css' //最嗨的是他这个直接引入的是一个css文件

Vue.use(MintUI);
Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
}).$mount('#app')