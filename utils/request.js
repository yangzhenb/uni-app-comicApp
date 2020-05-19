import Vue from 'vue'
import Request from '@/components/luch-request/luch-request/index.js'
import store from '../store'

const http = new Request();
/**
 * @description 修改全局默认配置
 * @param {Function}   
 */
http.setConfig((config) => { /* config 为默认全局配置*/
	config.baseUrl = 'http://localhost:8888/jeecg-boot'; /* 根域名 */
	return config
})
/**
 * @param { Function} cancel - 取消请求,调用cancel 会取消本次请求，但是该函数的catch() 仍会执行; 不会进入响应拦截器
 *
 * @param {String} text ['handle cancel'| any] - catch((err) => {}) err.errMsg === 'handle cancel'。非必传，默认'handle cancel'
 * @cancel {Object} config - catch((err) => {}) err.config === config; 非必传，默认为request拦截器修改之前的config
 * function cancel(text, config) {}
 */
http.interceptor.request((config, cancel) => { /* cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
	let token = store.getters.getToken
	if(token){
		config.header = {
		      ...config.header,
		      token: token
		    }
	}
	return config
})
export {http};