<template>
	<div>
		<div id="home_scroll">
			<swiper class="swiper" :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiper-slide v-for="aData in data" :key="aData">
					<div class="scroll_items_box">
						<div class="scroll_item" v-for="item in aData" :key="item">
							<a :href="item.link" >
								<img :src="item.image_hash" />
								<span>{{item.name}}</span>
							</a>
						</div>

					</div>

				</swiper-slide>

				<!-- Optional controls -->
				<div class="swiper-pagination" slot="pagination"></div>
				<!--<div class="swiper-button-prev" slot="button-prev"></div>-->
				<!--<div class="swiper-button-next" slot="button-next"></div>-->
				<!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
			</swiper>
		</div>
	</div>

</template>

<script>
	import Vue from 'vue'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	
	import HttpURI from "@/util/HttpURI"
	import axios from "axios"
	import imghashFromatter from '@/util/ImgHashFormatter'
	import avatar from '@/assets/imgs/avatar.jpg'
	import logo from '@/assets/imgs/logo.png'

	export default {

		name: "home_scroll",
		data() {
			return {
				data:"",
				
				swiperOption: {
					// NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
					// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					// swiper configs 所有的配置同swiper官方api配置
					autoplay: 3000,
					// direction : 'vertical',
					effect: "coverflow",
					grabCursor: true,
					setWrapperSize: true,
					// autoHeight: true,
					// paginationType:"bullets",
					pagination: '.swiper-pagination',
					paginationClickable: true,
					prevButton: '.swiper-button-prev',
					nextButton: '.swiper-button-next',
					// scrollbar:'.swiper-scrollbar',
					mousewheelControl: true,
					observeParents: true,
					// if you need use plugins in the swiper, you can config in here like this
					// 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
					// debugger: true,
					// swiper callbacks
					// swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
					// onTransitionStart(swiper){
					//   console.log(swiper)
					// },
					// more Swiper configs and callbacks...
					// ...
				}
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		// you can find current swiper instance object like this, while the notNextTick property value must be true
		// 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		beforeMount(){
			
			var  that  = this
			
			axios.get(HttpURI.PROXY + HttpURI.GET_HOME_KINDS).then((res) => {

				//alert('请求成功')
				console.log(res)
				if(res.status == 200) {

					var data = res.data[0].entries
					
					console.log(data)
					var result = []
					
					var temp = null
					
					data.forEach((item,index)=>{
						
						if(index % 8 == 0 ){
							
							if(temp){
								
								result.push(temp)
								temp = null
								
							}
							
							temp = []
						}
						
						if(temp){
							console.log(item.image_hash)	
							
							item.image_hash = imghashFromatter(item.image_hash);
							
							console.log('>>>>>>' + item.image_hash)
							temp.push(item)
							
							
						}
						
						
						
					})
					
					
					result.push(temp)
				
					console.log("=============")
					console.log(result)
					
					that.data = result
				}

			}).catch((res) => {

				alert('请求失败')
			})
		},
		mounted() {
			// you can use current swiper instance object to do something(swiper methods)
			// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
			// console.log('this is current swiper instance object', this.swiper)
			// this.swiper.slideTo(3, 1000, false)
		}
		

	}
</script>

<style scoped>
	#home_scroll {
		width: 100%;
		/*background-color: orange;*/
		padding-bottom: 1rem;
		height: 12rem;
	}
	
	.scroll_items_box {
		height: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	
	.scroll_items_box .scroll_item {
		display: flex;
		width: 25%;
		height: 5rem;
		
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/*background-color: red;*/
		/*border: 1px solid blue;*/
		margin-top: 0.5rem;
		
	}
	.scroll_item a{
		width: 3rem;
		text-align: center;
		text-decoration: none;
		font-size: 0.5rem;
	}
	.scroll_item img {
		width: 100%;
	}
	.swiper{
		padding-bottom: 1rem;
	}
	.swiper-pagination{
		
		position: absolute;
		left: 0;
		bottom: -2rem;
		height: 3rem;
		
		/*background-color: palegreen;*/
	}
</style>