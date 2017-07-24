<template lang="pug">
  div(class="m-list")
    p(@click="toggle()")
        img(ref="arrow" src="../../assets/imgs/right-arrow.png")
        //- img(class= src="../../assets/imgs/down-arrow.png")
        span {{title}}
    ul(ref="list")
        li(v-for="item in mList" class="clearfix") 
            span(class="ell") {{item}}
            a(href="javascript:void(null)") 删除
</template>
<script>
export default {
    props: ['title', 'mList'],
    data() {
        return {}
    },
    methods: {
        toggle() {
            let self = this;
            if (self.$refs.arrow.className == '') {
                self.$refs.arrow.className = 'toggle';
                self.$refs.list.className = '';
            } else {
                self.$refs.arrow.className = '';
                self.$refs.list.className = 'hide';
            }
            // let cname = event.target.children[0].className;
        }
    },
    mounted() {
        let self = this;
        if (self.$props.mList.length > 0) {
            self.$refs.arrow.className = 'toggle';
        }
    }
}
</script>
<style lang="less" scoped>
ul {
    transition: display .2s linear;
}

.toggle {
    -webkit-transform: rotate(90deg);
    transition: transform .2s linear;
}

.m-list {
    background-color: #fff;
    p {
        display: flex;
        justify-content: flex-start;
        margin-left: 15px;
        height: 2.4rem;
        border-bottom: 1px solid #e5e5e5;
        font-size: 0.75rem;
        line-height: 2.4rem;
        color: #000;
        img {
            margin: 0.888rem 0.5rem 0 0.2rem;
            margin-right: 0.5rem;
            margin-top: 0.888rem;
            width: 0.425rem;
            height: 0.625rem;
            vertical-align: middle;
            align-items: center;
        }
        .down {
            margin-top: 1.063rem;
            width: 0.525rem;
            height: 0.275rem;
        }
    }
    ul {
        margin-left: 15px;
        border-bottom: 1px solid #e5e5e5;
    }
    li {
        padding: 0.5rem 0.5rem 0.5rem 0;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.625rem;
        span {
            display: inline-block;
            width: 90%;
            float: left;
        }
        a {
            float: right;
            font-size: 0.625rem;
            color: #999;
        }
    }
}
</style>
