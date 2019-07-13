<template>
    <div class="city">
        <div class="city_hot">
            <p>热门城市</p>
            <div class="city_hot_list">
                <span v-for="item in crttable.HotCityList"
                 :key="item.AreaId" @click="int(item.AreaName)">{{item.AreaName}}</span>
            </div>
        </div>
        <div class="city_list">
            <ul v-for="(item1,index) in crttable.CityList" :key="index">
                <h4 :ref="item1.FirstLetter">{{item1.FirstLetter}}</h4>
                <li><span v-for="(item2,index2) in item1.CityList"
                 :key="index2" @click="int(item2.AreaName)">{{item2.AreaName}}</span>
                </li>
            </ul>
        </div>
        <ul class="city_nav">
            <li v-for="(itm,index3) in crttable.CityList"
             :key="index3" @click="go(itm.FirstLetter)">{{itm.FirstLetter}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    computed:{
        crttable(){
            return this.$store.state.city.Data
        }
    },
    methods: {
        go(item){
            var top=this.$refs[item][0].offsetTop;
            document.documentElement.scrollTop=top;
        },
        int(names){
            this.$store.commit("xgcitydw",names);
            this.$router.push("home");
        }
    },
}
</script>

<style scoped>
    .city{
        width:100%;
        background: #f4f4f4;
        position: relative;
        z-index: 300;
    }
    .city_hot{
        padding: .9375rem;
        overflow: hidden;
    }
    .city_hot p{
        font-size: .8125rem;
        margin-bottom: .625rem;
    }
    .city_hot_list span{
        float: left;
        width:5.25rem;
        height:1.5rem;
        font-size: .75rem;
        text-align: center;
        line-height: 1.5rem;
        border:.0125rem solid #818181;
        background:#fff;
        margin:.625rem .9375rem;
    }
    .city_list ul h4{
        color:#385c9a;
        height:1.5rem;
        line-height: 1.5rem;
        font-size: .875rem;
        text-indent: .9375rem;
    }
    .city_list ul li{
        width:100%;
        background:#fff;
        overflow: hidden;
    }
    .city_list ul li span{
        float: left;
        width:5.25rem;
        height:1.5rem;
        font-size: .75rem;
        text-align: center;
        margin:.625rem 1.275rem;
    }
    .city_nav{
        position:fixed;
        right:0;
        top:50%;
        transform: translateY(-50%);
        z-index: 350;
    }
    .city_nav li{
        width:16px;
        text-align: center;
        font-size: .8125rem;
        line-height:1.5rem;
    }
</style>

