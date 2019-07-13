<template>
    <div class="about_rpgd">
        <dl v-for="item in rpgdlist" :key="item.CategoryId">
            <dt><img :src="item.PictureUrl" :alt="item.CategoryName"></dt>
            <dd>{{item.CategoryName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        computed:{
            rpgdlist(){
                return this.$store.state.about.Data[6].Childs;
      },
        }
    }
</script>

<style scoped>
    .about_rpgd{
        width:100%;
    }
    .about_rpgd dl{
        float: left;
        width:33.33%;
        text-align: center;
        margin-top:1.25rem;
    }
    .about_rpgd dl dt img{
        width:70%;
        display: block;
        margin:0 auto;
    }
    .about_rpgd dl dd{
        font-size: .8125rem;
    }
</style>

