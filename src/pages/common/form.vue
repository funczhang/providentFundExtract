<template lang="pug">
  div(class="form")
    div(class="module-head") 
        h3 申请人信息
    div(class="form-panel")
        vue-input(title="姓名",type="text",placeholder="请填写姓名",ml="50")
        vue-input(title="身份证号码",type="number",placeholder="请填写身份证号码",ml="18")
        vue-input(title="手机号码",type="tel",placeholder="请填写手机号码",ml="11")
        vue-input(title="单位名称（全称）",type="text",placeholder="请填写单位名称",ml="50")
        vue-input(title="收款人",type="text",placeholder="请填写收款人",ml="50")
        vue-input(title="提取金额（元）",type="number",placeholder="请填写需要提取的金额",ml="50",tip="当前余额：",acount="2225.41")
        vue-input(title="开户银行",type="number",placeholder="请填写申请人本人储蓄卡开户银行",ml="20")
        vue-input(title="储蓄卡账号",type="number",placeholder="请填写申请人本人储蓄卡开户银行",ml="20")
    vue-button(title="申请",@btnClick="btnApply")
</template>
<script>
import input from '../../components/common/input'
import button from '../../components/common/button'
export default {
    name: 'form',
    components: {
        'vue-input': input,
        'vue-button':button
    },
    data() {
        return {

        }
    },
    methods: {
        btnApply(){
            console.log('apply...');
        }
    },
    mounted() { }
}
</script>
<style lang="less">
@font-sm: 0.65rem;
@font-mid: 0.75rem;
@font-big: 1rem;
@f05: #ff0055;
.module-head {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    h3 {
        border-left: 5px solid @f05;
        font-size: @font-mid;
        text-indent: 0.5rem;
        color: #000;
    }
}

.form-panel {
    padding: 0.5rem 0;
}
</style>


