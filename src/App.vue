<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <dl>
          <dt><span class="iconfont icon-shouye"></span></dt>
          <dd>首页</dd>
        </dl>
      </router-link>
      <router-link to="/about">
        <dl>
          <dt><span class="iconfont icon-icon_category"></span></dt>
          <dd>分类</dd>
        </dl>
      </router-link>
      <router-link to="/crt">
        <dl>
          <dt><span class="iconfont icon-gouwuche"></span></dt>
          <dd>购物车</dd>
        </dl>
      </router-link>
      <router-link to="/my">
        <dl>
          <dt><span class="iconfont icon-wode"></span></dt>
          <dd>我的易果</dd>
        </dl>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
    #nav{
      position:fixed;
      width:100%;
      height:3.125rem;
      background:#fff;
      bottom:0;
      border-top:.0125rem solid #dbdbdb;
      z-index: 100;
    }
    #nav dl{
      float: left;
      width:25%;
      text-align: center;
    }
    #nav dl dt{
      margin-top:.3125rem;
    }
    #nav dl dt span{
      font-size:1.5625rem;
    }
    #nav dl dd{
      font-size: .75rem;
    }
    .router-link-exact-active{
      color:#11b57c;
    }
</style>
