<template>
    <div class="crt">
        <div class="crt_header">
            <span>登录可同步购物车内商品</span><button @click="gologin">登录</button>
        </div>
        <div class="crt_new">
            全场满100元包邮，还差<span>67.10</span>元包邮
        </div>
        <div class="crt_table">
            <table>
                <tr v-for="item in crttable.crtlist" :key="item.CommodityId">
                    <td><input type="checkbox" checked></td>
                    <td><img :src="item.SmallPic" :alt="item.CommodityName"></td>
                    <td>
                        <p>{{item.CommodityName}}</p>
                        <p>￥ {{item.OriginalPrice.toFixed(2)}}</p>
                    </td>
                    <td>
                        <span>-</span>
                        <span>{{item.State}}</span>
                        <span>+</span>
                    </td>
                    <td>x</td>
                </tr>
            </table>
        </div>
        <div class="crt_sale">
            <span>全网满赠</span>
            <ul>
                <li>满188元得赠品，赠完即止</li>
                <li>Camposol秘鲁牛油果4个，160g以上/个-------------x 1</li>
                <li>随订单发出（以结算金额为准）</li>
            </ul>
        </div>
        <div class="crt_youlike">
            <h3>---· 猜你喜欢 ·--</h3>
            <ul v-for="item1 in crttable.CommodityList" :key="item1.CommodityId">
                <li><img :src="item1.SmallPic" :alt="item1.CommodityName"></li>
                <li>{{item1.CommodityName}}</li>
                <li>￥{{item1.OriginalPrice.toFixed(2)}} <span>+</span></li>
            </ul>
        </div>
        <div class="crt_footer">
            <div class="crt_footer_ckbox">
                <input type="checkbox" checked><span>全选</span>
            </div>
            <div class="crt_footer_left">
                <p>合计(不含运费)：<span>￥32.90</span></p>
                <p>已优惠: ￥0.00</p>
            </div>
            <div class="crt_footer_bt">
                去结算(1)
            </div>
        </div>
    </div>
</template>

<style scoped>
    .crt{
        background:#eef0ef;
        min-height:37.5rem;
    }
    .crt_header{
        height:2.5rem;
        background:#fff;
        text-align: center;
        line-height: 2.5rem;
        font-size: .75rem;
    }
    .crt_header button{
        margin-left:.9375rem;
        border:1px solid #d4d4d4;
        background:#fff;
        width:2.5rem;
        height:1.5625rem;
        font-size: .75rem;
    }
    .crt_new{
        height:2.5rem;
        line-height: 2.5rem;
        background:#fff9eb;
        color:#d3b162;
        font-size: .8125rem;
        text-indent: .9375rem;
        margin-bottom: .625rem;
    }
    .crt_new span{
        color:#fb3d3d;
    }
    .crt_table{
        background:#fff;
        width:100%;
    }
    .crt_table tr{
        width:100%;
        height:6.25rem;
    }
    .crt_table tr td:nth-of-type(1){
        width:8%;
        text-align: center;
    }
    .crt_table tr td:nth-of-type(2){
        width:20%;
        text-align: center;
    }
    .crt_table tr td:nth-of-type(2) img{
        width:100%;
    }
    .crt_table tr td:nth-of-type(3){
        width:38%;
        font-size: .8125rem;
    }
    .crt_table tr td:nth-of-type(3) p{
        margin:.625rem 0;
    }
    .crt_table tr td:nth-of-type(3) p:nth-of-type(2){
        color:#fb3d3d;
    }
    .crt_table tr td:nth-of-type(4){
        width:25%;
        text-align: center;
        font-size: .75rem;
    }
    .crt_table tr td:nth-of-type(4) span{
        display: inline-block;
        width:1.25rem;
        height:1.25rem;
        text-align: center;
        line-height: 1.25rem;
        border:.0125rem solid #d4d4d4;
    }
    .crt_table tr td:nth-of-type(4) span:nth-of-type(2){
        width:2.1875rem;
    }
    .crt_table tr td:nth-of-type(5){
        width:9%;
        text-align: center;
    }
    .crt_sale{
        background:#fff;
        margin-top:.625rem;
        font-size: .75rem;
        color:#4b4a4a;
        padding-bottom:.625rem;
    }
    .crt_sale span{
        display: inline-block;
        width:5rem;
        height:1.25rem;
        text-align: center;
        line-height: 1.25rem;
        background:#11B57C;
        color:#fff;
        border-radius: .3125rem;
        margin:.625rem;
    }
    .crt_sale ul{
        margin-left:.625rem;
    }
    .crt_sale ul li{
        height:1.125rem;
        line-height: 1.125rem;
    }
    .crt_sale ul li:nth-of-type(3){
        text-align: right;
        margin-right:.625rem;
        color:#818080;
    }
    .crt_youlike{
        margin-top:.625rem;
        background:#fff;
        text-align: center;
        padding-top:.9375rem;
        padding-bottom: 6.25rem;
        overflow: hidden;
    }
    .crt_youlike h3{
        font-weight: 400;
        color:#818080;
        font-size: .875rem;
        padding-bottom: 2.5rem;
    }
    .crt_youlike ul{
        width:50%;
        float: left;
        font-size: .75rem;
        height:13.75rem;
        margin-bottom:.625rem;
        position: relative;
    }
    .crt_youlike ul li img{
        display: block;
        width:80%;
        margin:0 auto;
    }
    .crt_youlike ul li:nth-of-type(2){
        padding:0 1.25rem;
        text-align: left;
    }
    .crt_youlike ul li:nth-of-type(3){
        position: absolute;
        bottom: 0;
        height:1.25rem;
        line-height: 1.25rem;
        padding:0 1.25rem;
        margin-top:.3125rem;
        color:#fb3d3d;
    }
    .crt_youlike ul li:nth-of-type(3) span {
        display:inline-block;
        width:1.25rem;
        height:1.25rem;
        border-radius: .625rem;
        font-size: .875rem;
        color:#11B57C;
        border:1px solid #11B57C;
        text-align: center;
        line-height: 1.25rem;
        margin-left:4.25rem;
    }
    .crt_footer{
        width:100%;
        height:3.125rem;
        background:#fff;
        position: fixed;
        bottom: 3.125rem;
        z-index: 200;
        border-top:.01875rem solid #e4e1e1;
    }
    .crt_footer_ckbox{
        width:20%;
        height:3.125rem;
        text-align: center;
        line-height: 3.125rem;
        font-size: .75rem;
        float:left;
    }
    .crt_footer_ckbox input{
        margin-right:.3125rem;
        margin-top:.625rem;
    }
    .crt_footer_left{
        float:left;
        box-sizing: border-box;
        height:3.125rem;
        width:50%;
        font-size: .75rem;
        text-align: right;
        padding-right:.625rem;
        padding-top:.5rem;
    }
    .crt_footer_left span{
        color:#fb3d3d;
    }
    .crt_footer_left p:nth-of-type(2){
        color:#cacaca;
    }
    .crt_footer_bt{
        float: left;
        width:30%;
        height:3.125rem;
        background:#fb3d3d;
        color:#fff;
        text-align: center;
        line-height: 3.125rem;
        font-size: .875rem;
    }
</style>

<script>
export default {
    computed:{
        crttable(){
            return this.$store.state.crt.Data
        }
    },
    methods:{
        gologin(){
            this.$router.push('login');
        }
    }
}
</script>


