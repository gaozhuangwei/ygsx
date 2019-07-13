<template>
    <div class="about_jxrl">
        <dl v-for="item in jxrllist" :key="item.CategoryId">
            <dt><img :src="item.PictureUrl" :alt="item.CategoryName"></dt>
            <dd>{{item.CategoryName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        computed:{
            jxrllist(){
                return this.$store.state.about.Data[2].Childs;
      },
        }
    }
</script>

<style scoped>
    .about_jxrl{
        width:100%;
    }
    .about_jxrl dl{
        float: left;
        width:33.33%;
        text-align: center;
        margin-top:1.25rem;
    }
    .about_jxrl dl dt img{
        width:70%;
        display: block;
        margin:0 auto;
    }
    .about_jxrl dl dd{
        font-size: .8125rem;
    }
</style>

