<template>
    <div class="about_xxsc">
        <dl v-for="item in xxsclist" :key="item.CategoryId">
            <dt><img :src="item.PictureUrl" :alt="item.CategoryName"></dt>
            <dd>{{item.CategoryName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        computed:{
            xxsclist(){
                return this.$store.state.about.Data[7].Childs;
      },
        }
    }
</script>

<style scoped>
    .about_xxsc{
        width:100%;
    }
    .about_xxsc dl{
        float: left;
        width:33.33%;
        text-align: center;
        margin-top:1.25rem;
    }
    .about_xxsc dl dt img{
        width:70%;
        display: block;
        margin:0 auto;
    }
    .about_xxsc dl dd{
        font-size: .8125rem;
    }
</style>

