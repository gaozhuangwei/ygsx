<template>
    <div class="about_qldp">
        <dl v-for="item in qldplist" :key="item.CategoryId">
            <dt><img :src="item.PictureUrl" :alt="item.CategoryName"></dt>
            <dd>{{item.CategoryName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        computed:{
            qldplist(){
                return this.$store.state.about.Data[3].Childs;
      },
        }
    }
</script>

<style scoped>
    .about_qldp{
        width:100%;
    }
    .about_qldp dl{
        float: left;
        width:33.33%;
        text-align: center;
        margin-top:1.25rem;
    }
    .about_qldp dl dt img{
        width:70%;
        display: block;
        margin:0 auto;
    }
    .about_qldp dl dd{
        font-size: .8125rem;
    }
</style>

