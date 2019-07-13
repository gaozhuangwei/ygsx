<template>
    <div class="login_box">
        <form>
            <div>
                <label for="names">用户名：</label>
                <input type="text" name="names" placeholder="请输入您的用户名" id="names">
            </div>
            <div>
                <label for="password">密码：</label>
                <input type="password" name="password" placeholder="请输入您的密码" id="password">
            </div>
            <div>
                <input type="text" name="yz" id="yz" placeholder="请您输入验证码">
            </div>
            <p>忘记密码 ?<span id="info"></span></p>
            <p><button>登录</button><button>立即注册</button></p>
        </form>
        <img src="../../public/yiguo_logo.png" alt="logo" 
        class="login_footer_logo" @click="gohome">
    </div>
</template>

<script>
    export default {
         methods:{
             gohome(){
                this.$router.push('home');
             },
         }
    }



</script>

<style scoped>
    .login_box{
        width:100%;
        background:#f8f8f8;
        min-height:41.625rem;
        position:relative;
        z-index:220;
        overflow: hidden;
    }
    .login_box form{
        margin-top:1.5625rem;
        background:#fff;
        border-top:.03125rem solid #c1bcbc;
    }
    .login_box form div{
        width:100%;
        height:3.75rem;
        line-height: 3.75rem;
        padding: 0 1.25rem;
    }
    .login_box form div:nth-of-type(3){
        height:2.6rem;
        border-bottom:.03125rem solid #c1bcbc;
    }
    .login_box form div label{
        display: inline-block;
        width:20%;
        text-align: right;
    }
    .login_box form div input{
        border:0;
        width:80%;
        height:2.5rem;
        line-height: 2.5rem;
        font-size:.875rem;
        border-bottom:.03125rem solid #c1bcbc;
        text-indent: .625rem;
        outline: none;
    }
    #yz{
        float: right;
        border:0;
    }
    .login_box form p:nth-of-type(1){
        width:100%;
        background:#f8f8f8;
        height:3.125rem;
        line-height: 3.125rem;
        color:#008842;
        font-size: .8125rem;
        text-indent: 1.875rem;
    }
    .login_box form p:nth-of-type(2){
        padding-top:1.25rem;
        width:100%;
        background:#f8f8f8;
        height:3.125rem;
        line-height: 3.125rem;
        text-align: center;
    }
    .login_box form p:nth-of-type(2) button{
        width:7.5rem;
        height:2.1875rem;
        border:.03125rem solid #008842;
        border-radius: .3125rem;
        margin:0 1.25rem;
        font-size: .875rem;
    }
    .login_box form p:nth-of-type(2) button:nth-of-type(1){
        background: #008842;
        color:#fff;
    }
    .login_box form p:nth-of-type(2) button:nth-of-type(2){
        color: #008842;
        background:#fff;
    }
    .login_footer_logo{
        display: block;
        position: absolute;
        bottom:1.875rem;
        left:50%;
        transform: translateX(-50%);
    }
</style>
