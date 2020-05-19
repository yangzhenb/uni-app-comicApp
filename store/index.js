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
		}
	},
	getters: {
		token: state => state.token,
		user: state => state.user
	},
	actions: {}
})

export default store
