<template>
    <div class="about_fbss">
        <dl v-for="item in fbsslist" :key="item.CategoryId">
            <dt><img :src="item.PictureUrl" :alt="item.CategoryName"></dt>
            <dd>{{item.CategoryName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        computed:{
            fbsslist(){
                return this.$store.state.about.Data[8].Childs;
      },
        }
    }
</script>

<style scoped>
    .about_fbss{
        width:100%;
    }
    .about_fbss dl{
        float: left;
        width:33.33%;
        text-align: center;
        margin-top:1.25rem;
    }
    .about_fbss dl dt img{
        width:70%;
        display: block;
        margin:0 auto;
    }
    .about_fbss dl dd{
        font-size: .8125rem;
    }
</style>

