<template lang="pug">
  div(class="form")
    div(class="module-head") 
        h3 申请人信息
    mt-field(label="姓名" placeholder="请填写姓名" :attr="{ maxlength: 50 }")
    mt-field(label="身份证号码" placeholder="请填写身份证号码" type="text" :attr="{ maxlength: 18 }")
    mt-field(label="手机号码" placeholder="请填写手机号码" type="tel" :attr="{ maxlength: 11 }")
    mt-field(label="单位名称(全称)" placeholder="请填写单位名称" type="text" :attr="{ maxlength: 50 }")
    mt-field(label="收款人" placeholder="请填写收款人" type="text" :attr="{ maxlength: 50 }")
    div(class="acount-field")
        div(class="inner-box")
            <mt-field label="提取金额(元)" placeholder="请填写需要提取的金额" type="number" :attr="{ maxlength: 20 }"></mt-field>
            p 当前余额： 44556677.000元               
    mt-field(label="开户银行" placeholder="请填写申请人本人储蓄卡开户银行" type="text" :attr="{ maxlength: 18 }")
    mt-field(label="储蓄卡账号" placeholder="请填写申请人本人储蓄卡开户银行" type="number" :attr="{ maxlength: 18 }")
    div(class="module-head") 
        h3 申请材料 
            span (支持的类型：jpg,png;不超过200KB)
    //- <mt-cell title="单位出具的《住房公积金提取申请书》1份" value=""></mt-cell>
    //- <mt-cell title="单位出具的《住房公积金提取申请书》1份单位出具的《住房公积金提取申请书》1份" value=""></mt-cell>    
    v-list(v-for="item in list",:title="item.title",:mList="item.mList",:key="item.id")
    v-button(title="申请" @btnClick="applyFund()")
</template>
<script>
//该页面使用mint-ui的field组件 button使用自定义组件
import { Field, Toast,Cell } from 'mint-ui';
import button from '../../components/common/button'
import mList from '../../components/common/mList'
export default {
    components: {
        'v-button': button,
        'v-list':mList
    },
    data() {
        return {
            list:[{title:'一寸身份证照片',mList:['材料11111','材料22222','材料33333','材料4444'],id:'1'},
            {title:'户口本照片',mList:['材料11111','材料22222','材料33333','材料4444'],id:'1'}]
        }
    },
    methods: {
        applyFund() {
            const self = this;
            let data = { method: '' };
            self.$store.dispatch('applyFund', data).then(response => {
                console.log('response is ok...');
            });
            Toast('申请公积金');
        }
    },
    mounted() {
        const self = this;
        /*加载用户信息*/
        self.$store.dispatch('initUserInfo').then(response => {
            console.log('获取用户信息为：');
            console.log(response);
            /*初始化用户信息到状态树*/
            //self.$store.commit('SET_INIT');
        });
    }
}
</script>

<style lang="less">
@font-sm: 0.65rem;
@font-mid: 0.75rem;
@font-big: 1rem;
@f05: #ff0055;
@c0: #000;
@cf: #fff;
//通用表单头部
.module-head {
    margin-top:0.5rem;
    padding: 0.6rem 0;
    background: #fff;
    h3 {
        border-left: 2px solid @f05;
        font-size: @font-mid;
        text-indent: 0.5rem;
        color: #999;
    }
    span{
        font-size:0.6rem;
    }
}
.mint-cell-title{
    
}
//修改账户余额表单项
.acount-field {
    background: @cf;
    .inner-box {
        padding-left: 10px;
    }
    .mint-cell-wrapper {
        padding-left: 0;
    }
    .mint-cell {
        min-height: 40px;
    }
    p {
        position: relative;
        bottom: 5px;
        padding-left: 6rem;
        font-size: 0.65rem;
        color: orange;
        line-height: 1rem;
    }
}

.mint-cell-text {
    font-size: @font-mid;
    color: @c0;
}
</style>
