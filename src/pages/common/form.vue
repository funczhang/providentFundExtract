<template lang="pug">
  div(class="form")
    div(class="module-head") 
        h3 申请人信息
    div(class="form-panel")
        vue-input(title="姓名",type="text",placeholder="请填写姓名",ml="50")
        vue-input(title="身份证号码",type="number",placeholder="请填写身份证号码",ml="18")
        vue-input(title="手机号码",type="number",placeholder="请填写手机号码",ml="11")
        vue-input(title="单位名称(全称)",type="text",placeholder="请填写单位名称",ml="50")
        vue-input(title="收款人",type="text",placeholder="请填写收款人",ml="50")
        vue-input(title="提取金额(元)",type="number",placeholder="请填写需要提取的金额",ml="50")
        vue-input(title="开户银行",type="number",placeholder="请填写申请人本人储蓄卡开户银行",ml="20")
        vue-input(title="储蓄卡账号",type="number",placeholder="请填写申请人本人储蓄卡开户银行",ml="20")
    div(class="module-head") 
        h3 材料上传
    m-list(v-for="item in list",:title="item.title",:mList="item.mList",:key="item.id")
    vue-button(title="申请",@btnClick="btnApply")
</template>
<script>
import input from '../../components/common/input'
import button from '../../components/common/button'
import mList from '../../components/common/mList'
export default {
    //该页面为自定义组件，mint-ui field组件功能相比全面一些 
    name: 'form',
    components: {
        'vue-input': input,
        'vue-button': button,
        'm-list': mList
    },
    data() {
        return {
            list: [{ title: '一寸身份证照片', mList: ['材料11111', '材料22222', '材料33333', '材料4444'], id: '1' },
            { title: '户口本照片', mList: ['材料11111', '材料22222', '材料33333', '材料4444'], id: '1' }]
        }
    },
    methods: {
        btnApply() {
            var self = this;
            console.log('apply...');
            self.$router.push('/form');
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
    margin-top:0.5rem;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    h3 {
        height: 1rem;
        border-left: 0.125rem solid @f05;
        font-size: @font-mid;
        text-indent: 0.5rem;
        color: #999;
    }
}

.form-panel {}
</style>


