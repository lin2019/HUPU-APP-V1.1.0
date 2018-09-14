<template>
    <div class="shopcar-container">
      <div class="goods-list">
          <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<mt-switch></mt-switch>
                    <img src="https://gw.alicdn.com/imgextra/i3/2616970884/O1CN011IOuZyziZR9cOPK_!!2616970884.jpg_360x360xzQ75s100.jpg" alt="">
                    <div class="info">
                        <h1>Apple/苹果 iPhone X 全网通4G</h1>
                        <p>
                            <span class="price">￥6499</span>
                            <numbox></numbox>
                            <a href="#">删除</a>
                        </p>
                    </div>
				</div>
			</div>
		</div>

        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner jiesuan">
					<div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品 <span class="red">0</span> 件，总价 <span class="red">￥0</span></p>
                    </div>
                    <mt-button type="danger">结算</mt-button>
				</div>
			</div>
		</div>
      </div>
    </div>
</template>

<script>
    import numbox from '../subcomponents/shopcar-box.vue'

    export default {
        components:{
            numbox
        }
    }
</script>

<style scoped lang="less">
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
        .goods-list{
            .mui-card-content-inner{
                display: flex;
                align-items: center;
            }
            img{
                width: 60px;
                height: 60px;
            }
            h1{
                font-size: 13px;
            }
            .info{
                .price{
                    color: red;
                    font-weight: bold;
                }
                p{
                    margin-top: 10px;
                    display: flex;
                    justify-content: space-between;
                }
            }
            .jiesuan{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .red{
                    color: red;
                    font-size: 16px;
                    font-weight: bold;
                }
            }
        }
    }
</style>