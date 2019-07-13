<template>
    <div class="about_spyl">
        <dl v-for="item in spyllist" :key="item.CategoryId">
            <dt><img :src="item.PictureUrl" :alt="item.CategoryName"></dt>
            <dd>{{item.CategoryName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        computed:{
            spyllist(){
                return this.$store.state.about.Data[10].Childs;
      },
        }
    }
</script>

<style scoped>
    .about_spyl{
        width:100%;
    }
    .about_spyl dl{
        float: left;
        width:33.33%;
        text-align: center;
        margin-top:1.25rem;
    }
    .about_spyl dl dt img{
        width:70%;
        display: block;
        margin:0 auto;
    }
    .about_spyl dl dd{
        font-size: .8125rem;
    }
</style>

