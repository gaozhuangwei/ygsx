<template>
    <div class="about_lyzh">
        <dl v-for="item in lyzhlist" :key="item.CategoryId">
            <dt><img :src="item.PictureUrl" :alt="item.CategoryName"></dt>
            <dd>{{item.CategoryName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        computed:{
            lyzhlist(){
                return this.$store.state.about.Data[9].Childs;
      },
        }
    }
</script>

<style scoped>
    .about_lyzh{
        width:100%;
    }
    .about_lyzh dl{
        float: left;
        width:33.33%;
        text-align: center;
        margin-top:1.25rem;
    }
    .about_lyzh dl dt img{
        width:70%;
        display: block;
        margin:0 auto;
    }
    .about_lyzh dl dd{
        font-size: .8125rem;
    }
</style>

