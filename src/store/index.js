import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'
const state = {
    userInfo: {
        userId: '',
        idCard: '',
        phoneNum: '',
        userName: '',
        isAuth: '',
        source: ''
    },
    submitInfo: {

    }
};
Vue.use(Vuex);
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})