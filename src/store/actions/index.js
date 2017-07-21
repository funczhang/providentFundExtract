import fly from "../../../static/plugins/fly";
// 弹窗
export const toast = ({ commit }, data) => {
    fly.request({
        action: "BaseComponents.error",
        args: [data]
    });
};
// 初始化用户信息
export const initUserInfo = ({ commit }) => {
    console.log("初始化用户信息");
    return new Promise((resolve, reject) => {
        fly
            .request({
                action: "baseComponents.init_request",
                callback: "init",
                args: ""
            })
            .done(response => {
                if (response) {
                    resolve(response);
                } else {
                    console.warn("初始信息返回为空");
                }
            })
            .fail(response => {
                reject(response);
                console.warn("初始信息请求失败");
                fly.request({
                    action: "BaseComponents.error",
                    args: ["数据请求失败"]
                });
            });
    });
};

// 点击申请公积金按钮
export const applyFund = ({ commit }, data) => {
    return new Promise((resolve, reject) => {
        fly
            .request({
                action: "baseComponents.init_request",
                callback: "init",
                args: data
            })
            .done(response => {
                if (response) {
                    resolve(response);
                } else {
                    console.warn("初始信息返回为空");
                }
            })
            .fail(response => {
                reject(response);
                console.warn("初始信息请求失败");
                fly.request({
                    action: "BaseComponents.error",
                    args: ["数据请求失败"]
                });
            });
    });
};