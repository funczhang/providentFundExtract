<template lang="pug">
  div(class="vue-input ell")
    label {{title}}
    input(:type="type",:placeholder="placeholder",:value="val",:maxlength="ml")
    p(class="tip",v-show="tip") {{tip+acount}}
</template>
<script>
export default {
    name: 'input',
    props: ['title', 'type', 'placeholder', 'val', 'ml', 'tip', 'acount'],
    data() {
        return {
            info: ''
        }
    },
    methods: {

    },
    mounted() { },
    filters: {
        formatInfo() {
            if (this.tip) {
                return this.tip + this.acount;
            }
        }
    }
}
</script>
<style lang="less">
input::-webkit-input-placeholder,
input:-moz-placeholder,
input::-moz-placeholder,
input :-ms-input-placeholder {
    /* WebKit browsers */
    font-size: 0.7rem;
    font-family: "微软雅黑";
    color: #999;
}

.vue-input {
    padding: 0.5rem;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    label {
        float: left;
        display: inline-block;
        width: 35%;
        font-size: 0.8rem;
        line-height: 1.3rem;
        vertical-align: middle;
        color: #000;
    }
    input {
        float: left;
        display: block;
        width: 65%;
        font-size: 0.65rem;
        line-height: 1.3rem;
        vertical-align: middle;
    }
    .tip {
        padding: 0.2rem 0;
        width: 65%;
        float: right;
        font-weight: bold;
        color: orange;
    }
}
</style>

