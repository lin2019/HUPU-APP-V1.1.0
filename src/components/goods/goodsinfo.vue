<template>
    <div class="goodsinfo-container">
        <transition
        @before-enter="before"
        @enter="enter"
        @after-enter="after">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="item in goodsinfo.ad" :key="item.id">
                            <img :src="item.ad1" alt="">
                            <img :src="item.ad2" alt="">
                            <img :src="item.ad3" alt="">
                            <img :src="item.ad4" alt="">
                            <img :src="item.ad5" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
				</div>
			</div>
		</div>


        <div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<P class="price">
                            市场价：<del>{{goodsinfo.old_price}}</del> &nbsp;&nbsp;&nbsp;现售价：<span class="now">{{goodsinfo.new_price}}</span>
                        </P>
                        <p>购买数量：<numbox @getcount="getSelectCount"></numbox></p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                        </p>
					</div>
				</div>
		</div>

        <div class="mui-card">
				<div class="mui-card-header">商品详情</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p>
                            <span class="goods-title">品牌：</span>
                            <span class="goods-content">Nike/耐克</span>
                            </p>
						<p>
                            <span class="goods-title">款号：</span>
                            <span class="goods-content">943807-002</span>
                            </p>
                        <p>
                            <span class="goods-title">上市时间：</span>
                            <span class="goods-content">2018年春季</span>
                            </p>
                        <p>
                            <span class="goods-title">外底材料：</span>
                            <span class="goods-content">耐磨橡胶</span>
                        </p>
                        <p>
                            <span class="goods-title">运动鞋科技：</span>
                            <span class="goods-content">气垫 缓震胶</span>
                        </p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                     <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
                </div>
			</div>
    </div>
</template>

<script>
    
    import numbox from '../subcomponents/goodsinfo-box.vue'

    import {Toast} from 'mint-ui'

    export default {
        data(){
            return {
                ballFlag:false,
                selectedCount:1,
                id:this.$route.params.id,
                goodsinfo:[]
            }
        },
        created(){
            this.getGoodsInfos()
        },
        methods:{
            goDesc(id) {
                this.$router.push({name:"goodsdesc",params:{id}})
            },
            goComment(id) {
                this.$router.push({name:"goodscomment",params:{id}})
            },
            addToShopCar(){
                this.ballFlag = !this.ballFlag;
            },
            before(el){
                el.style.transform = "translate(0,0)";
            },
            enter(el,done){
                el.offsetWidth;
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                const badgePosition = document.getElementById('badge').getBoundingClientRect();
                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;
                el.style.transform = `translate(${xDist}px,${yDist}px)`
                el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)"
                done()
            },
            after(el){
                this.ballFlag = !this.ballFlag
            },
            getSelectCount(count){
                this.selectedCount = count;
            },
            getGoodsInfos(){
                this.$http.get("goodslist.json").then(result => {
                    if(result.body.status === 0){
                        this.goodsinfo = result.body.goodsinfo[this.id];
                        console.log(this.goodsinfo);
                    }
                    else{
                        Toast('获取商品详情失败！')
                    }
                })
            }
        },
        components:{
            numbox
        }
    }
</script>

<style lang="less" scoped>
    .goodsinfo-container{
        background-color: #eee;
        overflow: hidden;
        .mint-swipe{
            width: 100%;
            height: 300px;
            background-color: #fff;
        .mint-swipe-item{
            text-align: center;
            width: 100%;
            img{
                // width: 100%;
                height: 100%;
            }
        }
    }
    }
    .now{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 490px;
        left: 150px;
    }
</style>

