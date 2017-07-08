<template>
	<div>
		<div id="home_list">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
				<defs>
					<symbol viewBox="0 0 22 22" id="rating-star">
						<path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path>
					</symbol>
				</defs>
			</svg>

			<ul>
				<h5>推荐商家</h5>
				<li v-for="aItem in data">
					<a href="">
						<!--style="background-image: url({{aItem.image_path | imghash}});"-->
						<section class="detail_left" :style="aItem.image_path"></section>
						<section class="detail_center">
							<h5 class="detail_title">{{aItem.name}}</h5>
							<div class="detail_praise">
								<div class="detail-star">
									<svg>
										<use xlink:href="#rating-star"></use>
									</svg>
									<svg>
										<use xlink:href="#rating-star"></use>
									</svg>
									<svg>
										<use xlink:href="#rating-star"></use>
									</svg>
									<svg>
										<use xlink:href="#rating-star"></use>
									</svg>
									<svg>
										<use xlink:href="#rating-star"></use>
									</svg>

								</div>
								<div class="detail_count">
									<span class="star_count">{{aItem.rating}}</span>
									<span class="month_count">月售{{aItem.recent_order_num}}单</span>
								</div>

							</div>
							<div class="detail_price">
								<span class="price_line">￥{{aItem.float_minimum_order_amount}}起送</span>
								<span class="price_express">{{aItem.piecewise_agent_fee.description}}</span>
								<span class="price_single">{{aItem.average_cost}}</span>
							</div>
						</section>
						<section class="detail_right">
							<div class="right_top">
								<section class="activity_brand">
									<i>保</i>
								</section>
								<section class="activity_brand">
									<i>准</i>
								</section>
							</div>
							<div class="right_center">
								<span class="promise_time">准时达</span>
								<span class="promise_express" v-if="aItem.delivery_mode">{{aItem.delivery_mode ? aItem.delivery_mode .text : ""}}</span>
							</div>
							<div class="right_bottom">
								<span class="express_distance">{{aItem.distance | distance}}</span>
								<span class="express_time">{{aItem.order_lead_time}}分钟</span>
							</div>
						</section>
					</a>
				</li>
				<li>
					<!--<load-more tip="正在加载..."></load-more>-->
					<load-more :show-loading="showLoading" :tip="tip" background-color="#fbf9fe"></load-more>
					<!--<load-more :show-loading="true" background-color="red"></load-more>-->
				</li>

			</ul>
		</div>

	</div>
</template>

<script>
	import HttpURI from "@/util/HttpURI"
	import axios from "axios"
	import Vue from '@/util/Filters'
	import imghashFromatter from '@/util/ImgHashFormatter'
	import { LoadMore } from 'vux'
	import bus from '@/util/Bus'
	
	export default {
		name: "home_list",
		data() {
			return {

				data: "",
				offset:0,
				showLoading: true,
				tip: "正在加载数据..."
				
			}
		},
		components: {
			LoadMore
		},
		mounted() {
			//alert('xxxx')
			var that = this
			this.getRecommendDataRequest();
			
			bus.$on('loadMore',()=>{
				
				that.offset += 20;
				
				that.getRecommendDataRequest()
				
			})

			

		},
		methods: {
			
			getRecommendDataRequest() {
				
				var that = this
				axios.get(HttpURI.PROXY + HttpURI.GET_HOME_RECOMMEND(that.offset,20)).then((res) => {
					
					//alert(HttpURI.PROXY + HttpURI.GET_HOME_RECOMMEND(that.offset,20))
					console.log(res)
					if(res.status == 200) {

						var data = res.data;

						data.forEach((item, index) => {

							var imghash = item.image_path;

							imghash = imghashFromatter(imghash)

							item.image_path = "background-image: url(" + imghash + ");"

						})
						
						if(that.data){
							
							that.data =  that.data.concat(data)
							alert('追加' + that.data.length)
						}
						else{
							that.data = data
							alert('第一次' + that.data.length)
						}
						

					}

				}).catch((res) => {

					alert('请求失败')
				})
			}
		}
	}
</script>

<style scoped>
	#home_list ul {
		padding: 0.5rem;
		list-style-type: none;
	}
	
	#home_list ul>h5 {
		color: #112233;
		margin: 0.5rem 0;
		padding: 0;
	}
	
	#home_list li {
		border-top: 1px solid lightblue;
		min-height: 5rem;
	}
	
	#home_list li>a {
		display: flex;
		align-items: center;
		text-decoration: none;
		/*background: orange;*/
	}
	
	#home_list .detail_left {
		width: 3.5rem;
		height: 3.5rem;
		min-height: 3rem;
		min-width: 3rem;
		/*background-color: red;*/
		background-image: url(../../../../assets/imgs/xrk.png);
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	#home_list .detail_center {
		width: 50vw;
		/*background-color: green;*/
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 0.5rem;
	}
	
	#home_list .detail_right {
		width: 30vw;
		/*background-color: blue;*/
		font-size: 0.5rem;
		text-align: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.detail_center .detail_title {
		margin: 0;
		padding: 0;
		height: 1.5rem;
		line-height: 1.5rem;
		overflow: hidden;
	}
	
	.detail_center .detail_praise {
		display: flex;
		height: 1rem;
		width: 100%;
		font-size: 0.6rem;
		line-height: 1rem;
		/*background-color: blue;*/
	}
	
	.detail_praise .detail-star {
		fill: orange;
		height: 0.5rem;
		width: 3rem;
		display: flex;
		margin-top: 0.25rem;
		box-sizing: border-box;
	}
	
	.detail_praise .detail_count {
		height: 0.6rem;
		/*width: 3.5rem;*/
		display: flex;
		justify-content: space-between;
		padding-left: 0.2rem;
		/*background-color: yellow;*/
	}
	
	.detail_center .detail_price {
		height: 1.5rem;
		line-height: 1.5rem;
		font-size: 0.6rem;
		/*background-color: lawngreen;*/
	}
	
	.detail_right .right_top {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		/*background-color: red;*/
		height: 1.5rem;
	}
	
	.right_top .activity_brand {
		border: 1px solid gray;
		border-radius: 20%;
		width: 0.8rem;
		height: 0.8rem;
		margin-left: 0.5rem;
		text-align: center;
		line-height: 0.8rem;
	}
	
	.detail_right .right_center {
		height: 1rem;
		/*background-color: orange;*/
		line-height: 1rem;
	}
	
	.right_center span {
		border: 1px solid dodgerblue;
		padding: 0 0.2rem;
	}
	
	.detail_right .right_bottom {
		height: 1.5rem;
		line-height: 1.5rem;
		font-size: 0.6rem;
		/*background-color: lawngreen;*/
	}
</style>