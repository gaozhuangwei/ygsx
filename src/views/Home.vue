<template>
  <div class="home">
    <div class="home_header">
      <p @click="gocity">
        <span>{{citys}}</span>
        <span class="iconfont icon-xiajiantou"></span>
      </p>
      <p>
        <input type="text" placeholder="请输入商品名称" class="header_input"/>
        <span class="iconfont icon-fangdajing"></span>
      </p>
    </div>
    <div class="home_banner"><banner></banner></div>
    <div class="home_nav">
        <dl v-for="item in home_nav" :key="item.navId" @click="gosg">
          <dt><img :src="item.pictureUrl" :alt="item.navName"></dt>
          <dd>{{item.navName}}</dd>
        </dl>
    </div>
    <div class="home_hot">
        <img src="../../public/smear.jpg" alt="挑战清爽夏日">
    </div>
    <div class="home_jx">
        <img :src="jxone" alt="每日惊喜">
        <img :src="jxtwo.pictureUrl" :alt="jxtwo.adName">
        <img :src="jxthree.pictureUrl" :alt="jxthree.adName">
    </div>
    <div class="home_footer">
        <p>沪IPC备09008015号</p>
        <p>上海易果电子商务有限公司</p>
    </div>
  </div>
</template>

<style scoped>
  .home_header{
    position:fixed;
    top:0;
    width:100%;
    height:2.5rem;
    background:#11b57c;
    line-height: 2.5rem;
    z-index: 100;
  }
  .home_header p:nth-of-type(1){
    float: left;
    min-width:20%;
    max-width: 50%;
    height:2.5rem;
    font-size:.875rem;
    text-align: center;
    color: #fff;
    padding:0 .625rem;
  }
  .home_header p:nth-of-type(1) span:nth-of-type(2){
    font-size:.625rem;
    margin-left:.3125rem;
  }
  .home_header p:nth-of-type(2){
    float: left;
    min-width: 50%;
    max-width:80%;
    height:2.5rem;
    text-align: 2.5rem;
    position: relative;
  }
  .header_input{
    float: left;
    width:95%;
    border:0;
    outline: none;
    height:1.875rem;
    border-radius:.9375rem;
    margin-top:5px;
    text-indent: 1.875rem;
    font-size:.75rem;
  }
  .home_header p:nth-of-type(2) span{
    position: absolute;
    left:.625rem;
    top:0;
  }
  .home_banner{
    margin-top:2.5rem;
    width:100%;
  }
  .home_nav{
    overflow: hidden;
  }
  .home_nav dl{
    float: left;
    width:25%;
    text-align: center;
  }
  .home_nav dl dt img{
    width:80%;
  }
  .home_nav dl dd{
    font-size: .8125rem;
  }
  .home_hot{
    margin-top:.9375rem;
  }
  .home_hot img{
    width:100%;
  }
  .home_jx{
    border-bottom:.625rem solid #ff741f;
  }
  .home_jx img{
    display: block;
    width:100%;
  }
  .home_footer{
    margin-bottom:3.75rem;
    margin-top:.625rem;
  }
  .home_footer p{
    text-align: center;
    font-size: .875rem;
    line-height: 1.5rem;
    color:#8d8a8a;
  }

</style>

<script>
  import banner from '@/components/home_banner.vue'
  export default {
    components:{
      banner,
    },
    methods:{
      gocity(){
        this.$router.push("city");
      },
      gosg(){
        this.$router.push("about");
      }
    },
    computed: {
      home_nav(){
        return this.$store.state.Data.templateComponentList[0].navComponentList;
      },
      jxone(){
        return this.$store.state.Data.templateComponentList[1].adPictures;
      },
      jxtwo(){
        return this.$store.state.Data.templateComponentList[2].adPictures;
      },
      jxthree(){
        return this.$store.state.Data.templateComponentList[3].adPictures;
      },
      citys(){
        return this.$store.state.CityDw;
      }
    },
  }
</script>


