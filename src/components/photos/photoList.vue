<template>
    <div>
       <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							热火
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							火箭
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							湖人
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							勇士
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							雷霆
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							马刺
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							骑士
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							尼克斯
						</a>
					</div>
				</div>

			</div>
			<ul>
				<router-link v-for="item in list" :key="item.id" to="/home/photoinfo1">
					<div>
							<img v-lazy="item">
					</div>
					<p>
						北京时间9月7日，AmicoHoop消息，哈斯勒姆与热火续约一年，对韦德继续征战NBA无疑是个积极的信号。毕竟15年战友，韦德很可能与老友共同进退。
					</p>
				</router-link>
			</ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'

	export default {
		data(){
			return {
				list:["http://img1.gtimg.com/chinanba/pics/hv1/146/111/2284/148545551.jpg",
				"http://img1.gtimg.com/chinanba/pics/hv1/224/44/2290/148918694.jpg",
				"http://img1.gtimg.com/chinanba/pics/hv1/39/92/2289/148865724.jpg",
				"http://img1.gtimg.com/chinanba/pics/hv1/152/241/2288/148838807.jpg",
				"http://img1.gtimg.com/chinanba/pics/hv1/162/76/2287/148731717.jpg",
				"http://img1.gtimg.com/chinanba/pics/hv1/88/49/2287/148724758.jpg",
				"http://img1.gtimg.com/chinanba/pics/hv1/170/44/2287/148723565.jpg",
				"http://img1.gtimg.com/chinanba/pics/hv1/151/36/2287/148721506.jpg",
				"http://img1.gtimg.com/chinanba/pics/hv1/141/85/2286/148668966.jpg",
				"http://img1.gtimg.com/chinanba/pics/hv1/55/123/2284/148548520.jpg",
				"http://img1.gtimg.com/chinanba/pics/hv1/221/202/2280/148308731.jpg",
				"http://img1.gtimg.com/chinanba/pics/hv1/244/42/2273/147812779.jpg",
				"http://img1.gtimg.com/chinanba/pics/hv1/62/103/2276/148023227.jpg"]
			}
		},
		mounted(){
			    mui('.mui-scroll-wrapper').scroll({
					deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
				});
		},
		methods:{}
	}
</script>

<style lang="less" scoped>
	*{
		touch-action: pan-y;
	}
	img[lazy=loading] {
  		width: 200px;
		height: 250px;
		margin: auto;
		background: url("../../images/loading.gif") no-repeat center;
		background-size: 60px 60px;
	}
	ul{
		list-style: none;
		padding: 0;
		margin: 0;
		a{
			width: 100%;
			height: 250px;
			img{
			width: 100%;
			height: 100%;
			display: block;
		  }
		  p{
			  position: absolute;
			  transform: translateY(-100%);
			  text-indent: 2em;
			  padding: 15px;
			  font-size: 15px;
			  color: #ff4500;
			  background-color: rgba(255,255,255,.3);
			  border-bottom: 1px solid #ccc;
		  }
		}
	}
</style>

