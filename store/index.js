import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: '默认',
		user: {}
	},
	mutations: {
		token(state, token) {
			state.token = token;
		},
		user(state, user) {
			state.user = user
			uni.setStorageSync('user', user)
		}
	},
	getters: {
		token: state => state.token,
		user: state => {
			if (0 == Object.keys(state.user).length) {
				state.user = uni.getStorageSync('user')
			}
			return state.user
		}
	},
	actions: {}
})

export default store
