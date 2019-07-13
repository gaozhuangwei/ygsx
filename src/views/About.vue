<template>
  <div class="about">
    <div class="about_header">
      <p>
        <input type="text" placeholder="请输入商品名称" class="about_input"/>
        <span class="iconfont icon-fangdajing"></span>
      </p>
      <p>搜索</p>
    </div>
    <div class="about_content">
      <ul class="about_content_left">
        <li @click="qhzj('jksg')" :class="{bg:this.flag==='jksg'}">进口水果</li>
        <li @click="qhzj('gcsg')" :class="{bg:this.flag==='gcsg'}">国产水果</li>
        <li @click="qhzj('jxrl')" :class="{bg:this.flag==='jxrl'}">精选肉类</li>
        <li @click="qhzj('qldp')" :class="{bg:this.flag==='qldp'}">禽类蛋品</li>
        <li @click="qhzj('hxsc')" :class="{bg:this.flag==='hxsc'}">海鲜水产</li>
        <li @click="qhzj('jxms')" :class="{bg:this.flag==='jxms'}">即享美食</li>
        <li @click="qhzj('rpgd')" :class="{bg:this.flag==='rpgd'}">乳品糕点</li>
        <li @click="qhzj('xxsc')" :class="{bg:this.flag==='xxsc'}">新鲜蔬菜</li>
        <li @click="qhzj('fbss')" :class="{bg:this.flag==='fbss'}">方便速食</li>
        <li @click="qhzj('lyzh')" :class="{bg:this.flag==='lyzh'}">粮油杂货</li>
        <li @click="qhzj('spyl')" :class="{bg:this.flag==='spyl'}">食品饮料</li>
        <li @click="qhzj('lplj')" :class="{bg:this.flag==='lplj'}">礼品礼卷</li>
      </ul>
      <div class="about_content_right">
        <component :is="routerlist"></component>
      </div>
    </div>
  </div>
</template>


<script>
  import jksg from '../components/about_shop/jksg'
  import gcsg from '../components/about_shop/gcsg'
  import jxrl from '../components/about_shop/jxrl'
  import qldp from '../components/about_shop/qldp'
  import hxsc from '../components/about_shop/hxsc'
  import jxms from '../components/about_shop/jxms'
  import rpgd from '../components/about_shop/rpgd'
  import xxsc from '../components/about_shop/xxsc'
  import fbss from '../components/about_shop/fbss'
  import lyzh from '../components/about_shop/lyzh'
  import spyl from '../components/about_shop/spyl'
  import lplj from '../components/about_shop/lplj'
  export default {
    components:{
      jksg,gcsg,jxrl,qldp,hxsc,jxms,rpgd,xxsc,fbss,lyzh,spyl,lplj
    },
    data(){
      return {
        routerlist:'jksg',
        flag:'jksg',
      }
    },
    methods: {
      qhzj(item){
        this.routerlist=item;
        this.flag=item;
      }
    },
  }
</script>


<style scoped>
  .about_header{
    position:fixed;
    top:0;
    width:100%;
    height:2.5rem;
    line-height: 2.5rem;
    border-bottom:.0125rem solid #dbdbdb;
    background:#fff;
  }
  .about_header p:nth-of-type(1){
    float: left;
    width:80%;
    height:2.5rem;
    text-align: 2.5rem;
    position: relative;
  }
  .about_header p:nth-of-type(2){
    font-size: .8125rem;
    text-align: center;
    color:#11b57c;
  }
  .about_input{
    float: left;
    width:95%;
    border:0;
    outline: none;
    height:1.875rem;
    border-radius:.9375rem;
    margin-top:5px;
    text-indent: 1.875rem;
    font-size:.75rem;
    background: #f4f4f4;
    margin-left:10px;
  }
  .icon-fangdajing{
    position: absolute;
    top:0;
    left:1.25rem;
  }
  .about_content{
    margin-top:2.5rem;
    color:#262626;
  }
  .about_content_left{
    float: left;
    width:25%;
    height:36rem;
    background:#f4f4f4;
    text-align: center;
    font-size: .8125rem;
  }
  .about_content_left li{
    height:2.8125rem;
    line-height:2.8125rem;
  }
  .about_content_right{
    float: left;
    width:75%;
    height:36rem;
    overflow: auto;
  }
  .bg{
    background:#fff;
    color:#11b57c;
    border-left:1px solid #11b57c;
  }
</style>


