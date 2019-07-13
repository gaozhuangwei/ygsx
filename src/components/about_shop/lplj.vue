<template>
    <div class="about_lplj">
        <dl v-for="item in lpljlist" :key="item.CategoryId">
            <dt><img :src="item.PictureUrl" :alt="item.CategoryName"></dt>
            <dd>{{item.CategoryName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        computed:{
            lpljlist(){
                return this.$store.state.about.Data[11].Childs;
      },
        }
    }
</script>

<style scoped>
    .about_lplj{
        width:100%;
    }
    .about_lplj dl{
        float: left;
        width:33.33%;
        text-align: center;
        margin-top:1.25rem;
    }
    .about_lplj dl dt img{
        width:70%;
        display: block;
        margin:0 auto;
    }
    .about_lplj dl dd{
        font-size: .8125rem;
    }
</style>

