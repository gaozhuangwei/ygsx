<template>
    <div class="about_gcsg">
        <dl v-for="item in gcsglist" :key="item.CategoryId">
            <dt><img :src="item.PictureUrl" :alt="item.CategoryName"></dt>
            <dd>{{item.CategoryName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        computed:{
            gcsglist(){
                return this.$store.state.about.Data[1].Childs;
      },
        }
    }
</script>

<style scoped>
    .about_gcsg{
        width:100%;
    }
    .about_gcsg dl{
        float: left;
        width:33.33%;
        text-align: center;
        margin-top:1.25rem;
    }
    .about_gcsg dl dt img{
        width:70%;
        display: block;
        margin:0 auto;
    }
    .about_gcsg dl dd{
        font-size: .8125rem;
    }
</style>

