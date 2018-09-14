<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.src" alt="">
            </mt-swipe-item> 
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
                <span class="mui-icon iconfont icon-tiyu-lanqiu"></span>
                <!--<span class="mui-icon mui-icon-home"></span>-->
                <div class="mui-media-body">体育资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <!-- <img src="../../images/2.png" alt=""> -->
                <span class="mui-icon iconfont icon-tiyu-kualan"></span>
                <!--<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>-->
                <div class="mui-media-body">比赛图集</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <!-- <img src="../../images/3.png" alt=""> -->
                <span class="mui-icon iconfont icon-tiyu-qipao"></span>
                <!--<span class="mui-icon mui-icon-chatbubble"></span>-->
                <div class="mui-media-body">识货团购</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <img src="../../images/4.png" alt=""> -->
                <span class="mui-icon iconfont icon-tiyu-zihangche"></span>
                <!--<span class="mui-icon mui-icon-location"></span>-->
                <div class="mui-media-body">球队赛程</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <img src="../../images/5.png" alt=""> -->
                <span class="mui-icon iconfont icon-tiyu-gaoerfuqiu"></span>
                <!--<span class="mui-icon mui-icon-search"></span>-->
                <div class="mui-media-body">热门视频</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <img src="../../images/6.png" alt=""> -->
                <span class="mui-icon iconfont icon-tiyu-wangqiu"></span>
                <!--<span class="mui-icon mui-icon-phone"></span>-->
                <div class="mui-media-body">社区话题</div></a></li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data(){
            return {
                lunbotuList:[]
            }
        },
        created(){
            this.getLunbotu()
        },
        methods:{
            getLunbotu(){
                this.$http.get("BroadcastImg.json").then(result => {
                   if(result.body.status === 0){
                       this.lunbotuList = result.body.bcImg;
                    //    Toast('加载图片成功...')
                   }else {
                        Toast('加载图片失败...')
                   }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .mint-swipe{
        height: 250px;
        .mint-swipe-item{
            width: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
        // span{
        //     display: block;
        //     width: 60px;
        // }
        .mui-media-body{
            font-size: 15px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        text-align: center;
        border: none;
        color: #a41f24;
        .iconfont{
            font-size: 50px;
        }
    }
</style>