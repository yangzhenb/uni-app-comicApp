<template>
	<form class='loginView' >
		<view class="input-view">
			<view class="label-view">
				<text class="label">账号 </text>
			</view>
			<input class="input" type="text" placeholder="请输入用户名" name="name" v-model="user.username" />
		</view>
		<view class="input-view">
			<view class="label-view">
				<text class="label">密码</text>
			</view>
			<input class="input" type="password" placeholder="请输入密码" name="passwordValue" v-model="user.password" />
		</view>
		<view class="input-view">
			<view class="label-view">
				<text class="label">确认</text>
			</view>
			<input class="input" type="password" placeholder="请确认密码" @blur="verifyPd" name="passwordVerify" v-model="user.passwordRepeat" />
		</view>
		<view class="button-view">
			<button type="default" class="register" hover-class="hover" @click="register">注册</button>
		</view>
	</form>
</template>

<script>
	import {
		http
	} from '@/utils/request.js'
	export default {
		data() {
			return {
				user: {
					username: '',
					password: '',
					passwordRepeat: ''
				}
			}
		},
		computed: {
			pdVerify() {
				return this.user.password === this.user.passwordRepeat
			}
		},
		methods: {
			verifyPd() {
				if (!this.pdVerify) {
					uni.showModal({
						content: '两次输入密码不一致',
						showCancel: false
					})
				}
			},
			register() {
				// console.log(this.$store)
				this.$store.commit('setToken', 'kkkkk')
				console.log(this.$store.getters.token)
				http.post('/app/register', this.user)
					.then(res => {
						console.log(res)
						uni.showModal({
							content: '注册成功',
							showCancel: false,
							success: (res) => {
								//跳转首页
								uni.switchTab({
									url: '/pages/comic/bookshelf'
								})
							}
						})
					}).catch(err => {
						console.log(err)
					})
			}
		}
	}
</script>

<style scoped>
	@import '/common/user.css';
</style>
