<template>
    <div class="goods-list">
        <div class="gooditem" v-for="item in goodslist" :key="item.id">
            <router-link class="goods-item" :to="'/home/goodsinfo/'+item.id">
            <img :src="item.src" alt="">
            <h1>{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="new">{{item.new_price}}</span>
                    <span class="old">{{item.old_price}}</span>
                </p>
                <p class="sell">
                    <span>热销中</span>
                    <span>已售{{item.sell}}</span>
                </p>
            </div>
        </router-link>
        </div>
        <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        data(){
            return {
                goodslist:[]
            }
        },
        created(){
            this.getGoodsList()
        },
        methods:{
            getGoodsList(){
                this.$http.get("goodslist.json").then(result => {
                    if(result.body.status === 0){
                        this.goodslist = result.body.goodsinfo;
                    }
                    else{
                        Toast('获取商品列表失败！')
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .goods-list{
        .mint-button--danger{
            background-color: #a41f24;
            margin-top: 20px;
        }
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
        justify-content: space-between;
        .gooditem{
            a{
                color: #888;
            }
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 250px;
            img{
                width: 100%;
            }
            h1{
                font-size: 14px;
                text-align: center;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                padding: 0 5px;
            }
            .info{
                background-color: #ddd;
                p{
                    margin: 0;
                    padding: 5px;
                }
                .price{
                    display: flex;
                    justify-content: space-around;
                    .new{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration: line-through;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        }
    }
</style>

