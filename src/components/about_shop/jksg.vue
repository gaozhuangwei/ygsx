<template>
    <div class="about_jksg">
        <dl v-for="item in jksglist" :key="item.CategoryId">
            <dt><img :src="item.PictureUrl" :alt="item.CategoryName"></dt>
            <dd>{{item.CategoryName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        computed:{
            jksglist(){
                return this.$store.state.about.Data[0].Childs;
      },
        }
    }
</script>

<style scoped>
    .about_jksg{
        width:100%;
    }
    .about_jksg dl{
        float: left;
        width:33.33%;
        text-align: center;
        margin-top:1.25rem;
    }
    .about_jksg dl dt img{
        width:70%;
        display: block;
        margin:0 auto;
    }
    .about_jksg dl dd{
        font-size: .8125rem;
    }
</style>

