import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "apply",
            component: resolve => require(["../pages/common/form.vue"], resolve)
        },
        {
            path: "/form",
            name: "form",
            component: resolve => require(["../pages/common/applyForm.vue"], resolve)
        }
    ]
});