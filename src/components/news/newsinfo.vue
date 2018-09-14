<template>
    <div class="newsinfo-container">
        <h1 class="news-title">{{newsinfo.title}}</h1>
        <p class="news-time">
            <a href="javascript:;">{{newsinfo.add_time}}</a>
            <span>浏览次数{{newsinfo.click}}</span>
        </p>
        <hr>
        <div class="news-content">

            <img :src="newsinfo.src" alt="">

            <p>{{newsinfo.article1}}</p>
            <p>{{newsinfo.article2}}</p>
            <p>{{newsinfo.article3}}</p>
        </div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    export default {
        data(){
            return {
                id:this.$route.params.id,
                newsinfo:[]
            }
        },
        created(){
            this.getnewsinfo()
        },
        methods:{
            getnewsinfo(){
                 this.$http.get("NewsList.json").then(result => {
                   if(result.body.status === 0){
                       this.newsinfo = result.body.newsList[this.id];
                    //    console.log(result.body.newsList[this.id])
                    //    Toast('加载图片成功...')
                   }else {
                        Toast('加载图片失败...')
                   }
                })
            }
        },
        components:{
            "comment-box":comment
        }
    }
</script>

<style scoped lang="less">
    .newsinfo-container{
        width: 100%;
        .news-title{
            font-size: 24px;
            margin: 10px;
            line-height: 1.5;
        }
        .news-time{
            margin: 0 10px;
            display: flex;
            justify-content: space-between;
        }
        hr{
            border: none;
            height: 1px;
            background: #ddd;
        }
        .news-content{
            margin: 0 10px;
            img{
                width: 100%;
            }
            p{
                text-indent: 2em;
                color: #666;
                font-size: 15px;
                line-height: 1.6;
            }
        }
    }
</style>

