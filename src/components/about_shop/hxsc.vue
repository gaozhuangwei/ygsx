<template>
    <div class="about_hxsc">
        <dl v-for="item in hxsclist" :key="item.CategoryId">
            <dt><img :src="item.PictureUrl" :alt="item.CategoryName"></dt>
            <dd>{{item.CategoryName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        computed:{
            hxsclist(){
                return this.$store.state.about.Data[4].Childs;
      },
        }
    }
</script>

<style scoped>
    .about_hxsc{
        width:100%;
    }
    .about_hxsc dl{
        float: left;
        width:33.33%;
        text-align: center;
        margin-top:1.25rem;
    }
    .about_hxsc dl dt img{
        width:70%;
        display: block;
        margin:0 auto;
    }
    .about_hxsc dl dd{
        font-size: .8125rem;
    }
</style>

