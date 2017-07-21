import * as constants from '../constants'
export default {
    [constants.SET_INIT](state, data) {
        stata.userInfo.userId = data.userId;
        stata.userInfo.idCard = data.idCard;
        stata.userInfo.phoneNum = data.phoneNum;
        stata.userInfo.userName = data.userName;
        stata.userInfo.isAuth = data.isAuth;
        stata.userInfo.source = data.source;
    },
    [constants.SET_DICT](state, data) {

    }
}