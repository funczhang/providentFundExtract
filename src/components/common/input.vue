<template lang="pug">
  div(class="vue-input ell")
    div(class="input-box")
        label {{title}}
        template(v-if="type == 'text'",)
            input(type="text",:placeholder="placeholder",v-model="val",:maxlength="ml")
            i(v-show="val != ''",@click="clearInput") ×
        template(v-if="type == 'number'",)
            input(type="number",:placeholder="placeholder",v-model="val",:maxlength="ml")
            i(v-show="val != ''",@click="clearInput") ×
</template>
<script>
export default {
    name: 'input',
    props: ['options', 'title', 'type', 'placeholder', 'value', 'ml'],
    data() {
        return {
            info: '',
            val: ''
        }
    },
    methods: {
        clearInput() {
            this.val = '';
        }
    },
    computed: {
    },
    watch: {
        val(newVal, oldVal) {

        }
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
    font-size: 0.75rem;
    color: #999;
}

.vue-input {
    background: #fff;
    .input-box {
        display: flex;
        padding: 0.5rem;
        margin-left: 0.625rem;
        border-bottom: 1px solid #eaeaea;
    }
    i {
        display: block;
        margin: auto 0;
        width: 16px;
        height: 16px;
        font-style: normal;
        font-size: 16px;
        background: rgba(0, 0, 0, .2);
        border-radius: 50%;
        color: #fff;
        line-height: 14px;
        text-align: center;
    }
    label {
        flex: 2;
        height: 1.625rem;
        font-size: 0.8rem;
        line-height: 1.625rem;
        vertical-align: middle;
        color: #000;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    input {
        display: block;
        padding-right: 5px;
        flex: 4;
        height: 1.625rem;
        font-size: 0.65rem;
        line-height: 1.625rem; // vertical-align: middle;
    }
    .tip {
        position: relative;
        top: 4px;
        font-size: 0.65rem;
        color: orange;
    }
    .tip:after {
        content: '\2718';
    }
}
</style>

