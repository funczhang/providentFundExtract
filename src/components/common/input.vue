<template lang="pug">
  div(class="vue-input ell")
    label {{title}}
    input(:type="type",:placeholder="placeholder",:value="val",:maxlength="ml")
    p(class="tip",v-show="tip") {{tip}} 
</template>
<script>
export default {
    name: 'input',
    props: ['title', 'type','placeholder', 'val','ml','tip'],
    data() {
        return {}
    },
    methods: {},
    mounted() { },
    filters:{
        tip(){
            return '1111';
        }
    }
}
</script>
<style lang="less">
.vue-input {
    padding: 0.5rem;
    border-bottom:1px solid #eaeaea;
    background:#fff;
    label {
        float:left;
        display: inline-block;
        width:35%;
        height:100%;
        font-size:0.75rem;
        line-height: 1rem;
        vertical-align: middle;
        color:#000;
    }
    input {
        float:left;
        display: inline-block;
        width:65%;
        height:100%;
        font-size:0.65rem;
        line-height: 1rem;
        vertical-align: middle;
    }
    .tip{
        padding:0.2rem 0;
        width:65%;
        float:right;
        font-weight: bold;
        color:orange;
    }
}
</style>

