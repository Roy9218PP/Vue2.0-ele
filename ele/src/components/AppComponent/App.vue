<!--template 定义组件的模板-->
<template>
	<div class="app">
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
			<defs>

				<!--首页按钮-->
				<symbol viewBox="0 0 40 40" id="index-regular.b245d60">
					<g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="2">
						<path d="M31.426 23.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"></path>
						<path d="M29.074 31.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C33.202 2.416 21.869-1.62 12.294 2.844 2.718 7.309-1.474 18.586 2.93 28.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"></path>
					</g>
				</symbol>

				<symbol viewBox="0 0 40 40" id="index.18edf5a" xmlns:xlink="http://www.w3.org/1999/xlink">
					<defs>
						<path id="index.18edf5a_a" d="M30.426 22.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"></path>
						<mask id="index.18edf5a_e" width="9.455" height="10.456" x="-1" y="-1">
							<path fill="#fff" d="M29.426 18.382h9.455v10.456h-9.455z"></path>
							<use xlink:href="#index.18edf5a_a"></use>
						</mask>
						<path id="index.18edf5a_b" d="M28.074 30.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C32.202 1.416 20.869-2.62 11.294 1.844 1.718 6.309-2.474 17.586 1.93 27.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"></path>
						<mask id="index.18edf5a_f" width="38.769" height="39.241" x="-.7" y="-.7">
							<path fill="#fff" d="M-.521-.675h38.769v39.241H-.521z"></path>
							<use xlink:href="#index.18edf5a_b"></use>
						</mask>
					</defs>
					<g fill="none" fill-rule="evenodd">
						<g transform="translate(1 1)">
							<use fill="url(#index.18edf5a_c)" xlink:href="#index.18edf5a_a"></use>
							<use stroke="url(#index.18edf5a_d)" stroke-width="2" mask="url(#index.18edf5a_e)" xlink:href="#index.18edf5a_a"></use>
						</g>
						<g transform="translate(1 1)">
							<use fill="url(#index.18edf5a_c)" xlink:href="#index.18edf5a_b"></use>
							<use stroke="url(#index.18edf5a_d)" stroke-width="1.4" mask="url(#index.18edf5a_f)" xlink:href="#index.18edf5a_b"></use>
						</g>
					</g>
				</symbol>

				<linearGradient id="index.18edf5a_c" x1="50%" x2="50%" y1="100%" y2="0%">
					<stop offset="0%" stop-color="#2BAEFF"></stop>
					<stop offset="100%" stop-color="#0095FF"></stop>
				</linearGradient>
				<linearGradient id="index.18edf5a_d" x1="50%" x2="50%" y1="100%" y2="0%">
					<stop offset="0%" stop-color="#29ADFF"></stop>
					<stop offset="100%" stop-color="#0095FF"></stop>
				</linearGradient>

				<!--发现-->
				<symbol viewBox="0 0 44 40" id="discover-regular.8ef537f" xmlns:xlink="http://www.w3.org/1999/xlink">
					<defs>
						<path id="discover-regular.8ef537f_a" d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"></path>
						<mask id="discover-regular.8ef537f_b" width="40" height="40" x="0" y="0" fill="#fff">
							<use xlink:href="#discover-regular.8ef537f_a"></use>
						</mask>
					</defs>
					<g fill="none" fill-rule="evenodd">
						<use stroke="#666" stroke-width="4" mask="url(#discover-regular.8ef537f_b)" xlink:href="#discover-regular.8ef537f_a"></use>
						<path stroke="#666" stroke-width="2" d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"></path>
						<path fill="#666" d="M15.693 24.636c-.692.276-1.02-.06-.747-.746l2.21-4.946c.225-.505.721-.602 1.122-.202l2.563 2.563c.394.394.31.893-.203 1.122l-4.945 2.209z"></path>
					</g>
				</symbol>
				<symbol viewBox="0 0 40 40" id="discover.5811137">
					<defs></defs>
					<g fill="none" fill-rule="evenodd">
						<path fill="url(#discover.5811137_a)" d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"></path>
						<path fill="#FFF" d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"></path>
						<path fill="url(#discover.5811137_a)" d="M6.482 5.44c-.684-.294-.678-.764 0-1.055L11.54 2.45c.517-.198.936.085.936.65v3.625c0 .558-.412.852-.936.65L6.48 5.44z" transform="rotate(-45 34.258 3.92)"></path>
					</g>
				</symbol>
				<linearGradient id="discover.5811137_a" x1="50%" x2="50%" y1="100%" y2="0%">
					<stop offset="0%" stop-color="#2BAEFF"></stop>
					<stop offset="100%" stop-color="#0095FF"></stop>
				</linearGradient>

				<!--订单-->
				<symbol viewBox="0 0 38 38" id="order-regular.41c17f8" xmlns:xlink="http://www.w3.org/1999/xlink">
					<defs>
						<rect id="order-regular.41c17f8_a" width="38" height="38" rx="2"></rect>
						<mask id="order-regular.41c17f8_b" width="38" height="38" x="0" y="0" fill="#fff">
							<use xlink:href="#order-regular.41c17f8_a"></use>
						</mask>
					</defs>
					<g fill="none" fill-rule="evenodd">
						<use stroke="#666" stroke-width="4" mask="url(#order-regular.41c17f8_b)" xlink:href="#order-regular.41c17f8_a"></use>
						<rect width="24" height="2" x="7" y="8" fill="#666" rx="1"></rect>
						<rect width="20" height="2" x="7" y="17" fill="#666" rx="1"></rect>
						<rect width="8" height="2" x="7" y="26" fill="#666" rx="1"></rect>
					</g>
				</symbol>
				<symbol viewBox="0 0 38 38" id="order.070ae2a">
					<defs></defs>
					<g fill="none" fill-rule="evenodd">
						<rect width="38" height="38" fill="url(#order.070ae2a_a)" rx="2"></rect>
						<rect width="24" height="2" x="7" y="8" fill="#FFF" rx="1"></rect>
						<rect width="20" height="2" x="7" y="17" fill="#FFF" rx="1"></rect>
						<rect width="8" height="2" x="7" y="26" fill="#FFF" rx="1"></rect>
					</g>
				</symbol>
				<linearGradient id="order.070ae2a_a" x1="50%" x2="50%" y1="100%" y2="0%">
					<stop offset="0%" stop-color="#2BAEFF"></stop>
					<stop offset="100%" stop-color="#0095FF"></stop>
				</linearGradient>

				<!--个人-->
				<symbol viewBox="0 0 38 38" id="profile-regular.c151d62" xmlns:xlink="http://www.w3.org/1999/xlink">
					<defs>
						<path id="profile-regular.c151d62_a" d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833z"></path>
						<mask id="profile-regular.c151d62_c" width="18" height="21" x="0" y="0" fill="#fff">
							<use xlink:href="#profile-regular.c151d62_a"></use>
						</mask>
						<path id="profile-regular.c151d62_b" d="M0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path>
						<mask id="profile-regular.c151d62_d" width="38" height="16" x="0" y="0" fill="#fff">
							<use xlink:href="#profile-regular.c151d62_b"></use>
						</mask>
					</defs>
					<g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="4">
						<use mask="url(#profile-regular.c151d62_c)" xlink:href="#profile-regular.c151d62_a"></use>
						<use mask="url(#profile-regular.c151d62_d)" xlink:href="#profile-regular.c151d62_b"></use>
					</g>
				</symbol>
				<symbol viewBox="0 0 38 38" id="profile.dbc5ebf">
					<defs></defs>
					<path fill="url(#profile.dbc5ebf_a)" fill-rule="evenodd" d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833zM0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path>
				</symbol>
				<linearGradient id="profile.dbc5ebf_a" x1="50%" x2="50%" y1="100%" y2="0%">
					<stop offset="0%" stop-color="#2BAEFF"></stop>
					<stop offset="100%" stop-color="#0095FF"></stop>
				</linearGradient>

			</defs>
		</svg>
		<footer class="index-wrapper_1Rsz2pX">
			<div class="index-footer_Gtduid_">
				<a href="javascript::" class="index-footerTab_bl0lbJN">
					<svg class="index-footerTabIcon_1EbB8wS">
						<use xlink:href="#index.18edf5a" class="111111"></use>
					</svg>
					<span class="index-footerTabText_1It8yh0 index-footerTabTextActive_3gjOLc6">外卖</span></a>
				<a href="https://h5.ele.me/discover/" class="index-footerTab_bl0lbJN">
					<svg class="index-footerTabIcon_1EbB8wS">
						<use xlink:href="#discover-regular.8ef537f"></use>
					</svg>
					<span class="index-footerTabText_1It8yh0">发现</span></a>
				<a href="https://h5.ele.me/order/#/" class="index-footerTab_bl0lbJN">
					<svg class="index-footerTabIcon_1EbB8wS">
						<use xlink:href="#order-regular.41c17f8"></use>
					</svg>
					<span class="index-footerTabText_1It8yh0">订单</span></a>
				<a href="https://h5.ele.me/profile/" class="index-footerTab_bl0lbJN">
					<svg class="index-footerTabIcon_1EbB8wS">
						<use xlink:href="#profile-regular.c151d62"></use>
					</svg>
					<span class="index-footerTabText_1It8yh0">我的</span></a>
			</div>
		</footer>
	
		<router-view></router-view>
	</div>
</template>

<!--定义组件的js代码-->
<script>
	//es6模块必需使用export导出模块内容，default代表默认名称，相当于没有名称，所以在其他模块import的时候名称可以随便写。一旦此处名称不叫default，那么在import的时候必须使用该变量名
	export default {
		name: 'app',
		data() {
			return {
				regular_color:"",
				highlight_color:""
			}
		}
	}
</script>

<!--定义组件的样式代码-->
<style scoped>

	.index-wrapper_1Rsz2pX {
		width: 100%;
		height: 2.5rem;
		background-color: whitesmoke;
		padding: 0.2rem;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
		box-shadow: 0 0.5rem 0.5rem 0.5rem lightgray;
	}
	
	.index-footer_Gtduid_ {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		font-size: 0.5rem;
	}
	
	.index-footer_Gtduid_ a {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-decoration: none;
		/*background-color: red;*/
		/*border: 1px solid blue;*/
		color: gray;
	}
	
	.index-footer_Gtduid_ svg {
		width: 25%;
		flex-grow: 1;
	}
</style>