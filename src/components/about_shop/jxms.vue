<template>
    <div class="about_jxms">
        <dl v-for="item in jxmslist" :key="item.CategoryId">
            <dt><img :src="item.PictureUrl" :alt="item.CategoryName"></dt>
            <dd>{{item.CategoryName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        computed:{
            jxmslist(){
                return this.$store.state.about.Data[5].Childs;
      },
        }
    }
</script>

<style scoped>
    .about_jxms{
        width:100%;
    }
    .about_jxms dl{
        float: left;
        width:33.33%;
        text-align: center;
        margin-top:1.25rem;
    }
    .about_jxms dl dt img{
        width:70%;
        display: block;
        margin:0 auto;
    }
    .about_jxms dl dd{
        font-size: .8125rem;
    }
</style>

