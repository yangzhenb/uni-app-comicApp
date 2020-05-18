import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
//漫画网站地址
//https://www.manhuadb.com/manhua/1167