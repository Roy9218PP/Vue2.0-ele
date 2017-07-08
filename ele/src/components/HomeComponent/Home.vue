<template>
	<div class="container" ref="container">
		<home-top></home-top>
		<home-scroll></home-scroll>
		<home-list></home-list>

		<div class="back-top" v-show="isShowBackTop" @click="backTopClick">
			<b class="fa fa-chevron-circle-up"></b>

			<span>顶部</span>
		</div>

		<div class="bottom_blank"></div>

	</div>
</template>

<script type="text/javascript">
	import home_top from "@/components/HomeComponent/Children/Home_TopComponent/Home_Top"

	import home_scroll from "@/components/HomeComponent/Children/Home_ScrollComponent/Home_Scroll"

	import home_list from "@/components/HomeComponent/Children/Home_ListComponent/Home_List"

	import '@/assets/libs/font-awesome-4.7.0/css/font-awesome.min.css'

	import {getWindowHeight,getScrollHeight,getScrollTop} from "@/util/ScrollListener"
	
	import bus from '@/util/Bus'
	
	export default {

		name: "Home",
		data() {
			return {
				isShowBackTop: false
			}
		},
		components: {
			"home-top": home_top,
			"home-scroll": home_scroll,
			"home-list": home_list
		},
		mounted() {
			this.myAddScrollListener();

		},
		methods: {
			myAddScrollListener() {
				alert('xxxxxxx')

				//绑定事件监听
				window.onscroll = function(e) {
					
					　
					if(getScrollTop() + getWindowHeight() == getScrollHeight()) {　　　　
						
						bus.$emit('loadMore')
					}
					
					//滚动偏移量
					var offset = window.scrollY

					if(offset > 400) {
						this.isShowBackTop = true;
					} else {
						this.isShowBackTop = false;
					}
				}.bind(this);
			},
			//点击回到顶部
			backTopClick: function() {

				document.body.scrollTop = document.documentElement.scrollTop = 0;

			}

		}

	}
</script>

<style type="text/css" scoped>
	h1 {
		color: red;
	}
	
	.back-top {
		width: 2.2rem;
		height: 2.2rem;
		position: fixed;
		bottom: 4rem;
		right: 1rem;
		border: solid 1px grey;
		border-radius: 50%;
		text-align: center;
		color: grey;
		padding-top: 2px;
		background-color: rgba(255, 255, 255, 0.9);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.back-top b,
	.back-top span {
		font-size: 1rem;
		color: gray;
	}
	
	.back-top span {
		font-size: 0.5rem;
	}
</style>