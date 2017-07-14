import fly from '../../assets/js/fly'
// 弹窗
export const toast = ({ commit }, data) => {
        fly.request({
            action: 'BaseComponents.error',
            args: [data]
        });
    }
    // 初始化用户信息
export const initUserData = ({ commit }) => {
    console.log('初始化用户信息');
    return new Promise((resolve, reject) => {
        fly.request({
            action: 'baseComponents.init_request',
            callback: 'init',
            args: ''
        }).done(response => {
            console.log('getUserData---' + JSON.stringify(response))
            if (response) {
                resolve(response)
            } else {
                console.warn('初始信息返回为空')
            }
        }).fail(response => {
            reject(response)
            console.warn('初始信息请求失败')
            fly.request({
                action: 'BaseComponents.error',
                args: ['数据请求失败']
            })
        });
    })
}