<template lang="pug">
  div(class="m-list")
    p(@click="toggle") {{title}}
    ul(ref="list")
        li(v-for="item in mList") {{item}}
</template>
<script>
export default {
    props: ['title', 'mList'],
    data() {
        return {}
    },
    methods: {
        toggle() {
            let status = this.$refs.list.style.display
            if (status == '' || status == 'block') {
                status = 'none';
            } else {
                status = 'block';
            }
            console.log(status);
            debugger
        }
    }
}
</script>
<style lang="less" scoped>
.m-list {
    background-color: #fff;
    p {
        margin-left: 15px;
        height: 2.4rem;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        font-size: 0.75rem;
        line-height: 2.4rem;
        color: #000;
    }
    ul {
        margin-left: 15px;
    }
    li {
        padding: 0.5rem 0;
        height: 1rem;
        line-height: 1rem;
        border-bottom: 1px solid #e5e5e5;
    }
}
</style>
