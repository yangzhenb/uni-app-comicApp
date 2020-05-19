<template>
	<form class='loginView'>
		<view class="input-view">
			<view class="label-view">
				<text class="label">账号 </text>
			</view>
			<input class="input" type="text" placeholder="请输入用户名" name="nameValue" v-model="user.username"/>
		</view>
		<view class="input-view">
			<view class="label-view">
				<text class="label">密码</text>
			</view>
			<input class="input" type="password" placeholder="请输入密码" name="passwordValue" v-model="user.password"/>
		</view>
		<view class="button-view">
			<button type="default" class="login" hover-class="hover" formType="submit" @click="login">登录</button>
			<button type="default" class="register" hover-class="hover" @click="register">免费注册</button>
		</view>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					username: '',
					password: ''
				}
			}
		},
		methods: {
			login(e) {
				this.$store.commit('user', this.user)
				console.log("前往用户中心")
				uni.switchTab({
					url: '/pages/user/center',
				});
			},
			register() {
				console.log("前往注册页面")
				uni.navigateTo({
					url: '/pages/user/register',
				});
			}
		}
	}
</script>

<style scoped>
	@import '/common/user.css';
	
</style>
