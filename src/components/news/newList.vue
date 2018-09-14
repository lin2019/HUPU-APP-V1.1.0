<template>
    <div>
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.src">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                                <span>{{ item.add_time }}</span>
                                <span>{{ item.click }}</span>
                            </p>
						</div>
					</router-link>
				</li>
		</ul>
    </div>
</template>

<script>
     import { Toast } from 'mint-ui'
    export default {
        data(){
            return {
                newsList:[]
            }
        },
        created(){
            this.getNewsList()
        },
        methods:{
            getNewsList(){
                this.$http.get("NewsList.json").then(result => {
                   if(result.body.status === 0){
                       this.newsList = result.body.newsList;
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
    .mui-table-view{
        li{
            h1{
				font-size: 14px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>