<template>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerData" :key="item.adPictureId">
            <img :src="item.pictureUrl" :alt="item.adName">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
</div>
</template>
<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        computed: {
            bannerData(){
                return this.$store.state.Data.templateComponentList[0].index_banner;
            } 
        },
        mounted(){
            var mySwiper = new Swiper ('.swiper-container', {

            loop: true, // 循环模式选项
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
    
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
    
            // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
    
            // 如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        })        
      }
    }
</script>

<style scoped>
    .swiper-slide img{
        display: block;
        width:100%;
    }
</style>

