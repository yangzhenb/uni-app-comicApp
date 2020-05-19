<template>
	<view class="center">
		<view class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
			<image class="logo-img" :src="login ? uerInfo.avatarUrl?uerInfo.avatarUrl:'/static/avatar.jpg' :avatarUrl"></image>
			<view class="logo-title">
				<text class="uer-name">Hi，{{login ? uerInfo.username : '您未登录'}}</text>
				<text class="go-login navigat-arrow" v-if="!login">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list" v-if="login">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60c;</text>
				<text class="list-text">浏览历史</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe60d;</text>
				<text class="list-text">我的收藏</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list" v-if="login">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">管理图片</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">上传图片</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goAbout">
				<text class="list-icon">&#xe603;</text>
				<text class="list-text">关于</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item" v-if="login" @click="logout">
				<text class="list-icon">&#xe609;</text>
				<text class="list-text">退出</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<uni-popup ref="showtip" type="center" :mask-click="false" >
			<view class="uni-tip">
				<text class="uni-tip-title">退出登录？</text>
				<!-- <text class="uni-tip-content">不会关闭弹窗。</text> -->
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" @click="cancel(false)">取消</text>
					<text class="uni-tip-button" @click="cancel(true)">确定</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				avatarUrl: '/static/logo.png',
			}
		},
		computed: {
			login() {
				return 0 != Object.keys(this.$store.getters.user).length
			},
			uerInfo() {
				return this.$store.getters.user
			}
		},
		methods: {
			cancel(logout){
				if(logout){
					this.$store.commit('user', {})
				}
				this.$refs.showtip.close()
			},
			logout() {
				this.$refs.showtip.open()
			},
			goLogin() {
				if (!this.login) {
					uni.navigateTo({
						url: '/pages/user/login'
					});
				}
			},
			goAbout() {
				uni.navigateTo({
					url: '/pages/user/about'
				});
			}
		}
	}
</script>

<style scoped>
	@import '/common/user.css';
</style>
