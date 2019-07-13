<template>
    <div class="my">
        <div class="my_header">
            <span>
                <img src="../../public/no-pic.jpg" alt="图标">
            </span>
            <p @click="gologin">登录 / 注册</p>
            <span class="iconfont icon-shezhi"></span>
        </div>
        <div class="my_many">
            <dl>
                <dt>-</dt>
                <dd>卡包余额</dd>
            </dl>
            <dl>
                <dt>-</dt>
                <dd>悠币</dd>
            </dl>
        </div>
        <div class="my_img01">
            <dl v-for="(item,index) in mylist.OrderIcons" :key="index">
                <dt><img :src="item.IconUrl" :alt="item.IconText"></dt>
                <dd>{{item.IconText}}</dd>
            </dl>
        </div>
        <div class="my_img02">
            <dl v-for="(item1,index) in mylist.IconList" :key="index">
                <dt><img :src="item1.IconUrl" :alt="item1.IconText"></dt>
                <dd>{{item1.IconName}}</dd>
            </dl>
        </div>
    </div>
</template>

<style scoped>
    .my{
        min-height:40rem;
        background:#eef0ef;
    } 
    .my_header{
        position: relative;
        width:100%;
        height:9.375rem;
        background:url("../../public/mybg.jpg") no-repeat top left;
        background-size: 100% 100%;
    }
    .my_header span:nth-of-type(1){
        position: absolute;
        top:2.25rem;
        left:1.25rem;
        width:4.6875rem;
        height:4.6875rem;
        border-radius: 50%;
        background:#eef0ef;
        text-align: center;
        line-height: 4.6875rem;
    }
    .my_header span:nth-of-type(1) img{
        margin-top:.625rem;
        width:70%;
        height:70%;
    }
    .my_header p{
        float: left;
        color:#fff;
        margin-top:3.75rem;
        margin-left:7.5rem;
    }
    .icon-shezhi{
        float: right;
        font-size: 1.5625rem;
        color:#fff;
        margin-top:.625rem;
        margin-right: 1.25rem;
    }
    .my_many{
        overflow: hidden;
        border-bottom:.625rem solid #eef0ef;
        background:#fff;
    }
    .my_many dl{
        float: left;
        width:50%;
        text-align: center;
    }
    .my_many dl dt{
        color:#2dd282;
    }
    .my_many dl dd{
        height:2.3rem;
        line-height: 2.3rem;
        font-size: .75rem;
    }
    .my_img01 dl{
        float: left;
        width:25%;
        text-align: center;
    }
    .my_img01 dl dt{
        height:3.125rem;
        line-height: 3.125rem;
    }
    .my_img01 dl dt img{
        width:1.875rem;
        height:1.875rem;
        margin-top:.625rem;
    }
    .my_img01 dl dd{
        font-size: .75rem;
    }
    .my_img01{
        overflow: hidden;
        padding:.9375rem 0;
        border-bottom:.625rem solid #eef0ef;
        background:#fff;
    }
    .my_img02{
        overflow: hidden;
        padding:.625rem 0;
        background:#fff;
    }
    .my_img02 dl{
        float: left;
        width:25%;
        text-align: center;
    }
    .my_img02 dl dt img{
        display: block;
        margin:0 auto;
        width:2.1875rem;
        height:2.1875rem;
        margin-top:.625rem;
    }
    .my_img02 dl dd{
        font-size:.8125rem;
        height:2.5rem;
        line-height: 2.5rem;
    }
</style>

<script>
    export default {
        computed: {
            mylist(){
                return this.$store.state.my.Data;
            }
        },
        methods:{
            gologin(){
                this.$router.push('login');
            }
        }
    }
</script>

