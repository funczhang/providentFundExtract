<template lang="pug">
  a(class="btn",@click="call") {{title}}
</template>
<script>
export default {
  props:['title'],
  methods:{
      call(){
          this.$emit('btnClick');
      }
  }
}
</script>
<style lang="less">
    .btn{
        padding:0.8rem 0;
        margin:1rem auto;
        display: block;
        width:96%;
        height:1rem;
        text-align: center;
        background:#ff0055;
        color:#fff;
        font:normal 0.75rem/1rem "微软雅黑";
        border-radius: 5px;
    }
</style>
