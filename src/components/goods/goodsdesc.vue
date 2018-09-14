<template>
    <div class="goods-info-container">
        <h1>{{info.title}}</h1>
        <hr>
        <div>
             <img :src="info.src" alt="">
             <h3>
                 商品介绍
             </h3>
             <p>{{info.introduce1}}</p>
             <p>{{info.introduce2}}</p>
             <p>{{info.introduce3}}</p>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        data(){
            return {
                info:[],
                id:this.$route.params.id
            }
        },
        created(){
            this.getinfo()
        },
        methods:{
            getinfo(){
                this.$http.get("goodslist.json").then(result => {
                    if(result.body.status === 0){
                        this.info = result.body.goodsinfo[this.id];
                        console.log(this.info);
                    }
                    else{
                        Toast('获取商品详情页失败！')
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .goods-info-container{
        padding: 0 10px;
        h1{
            font-size: 25px;
            margin: 20px;
            line-height: 1.2;
        }
        img{
            width: 100%;
            margin: 5px 0;
        }
        h3{
            font-size: 18px;
        }
        p{
            text-indent: 2em;
            line-height: 1.8;
            font-size: 16px;
        }
        ul{
            li{
                color: #888;
            }
        }
    }
</style>
