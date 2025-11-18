import request from '@/utils/request.js';

//注册校验
export const userCheckRegister = function(data = {}) {
	return request.post('/login/checkRegister', {...data})
}
//注册
export const userRegister = function(data = {}) {
	return request.post('/login/register', data)
}
//登录
export const userLogin = function(data = {}) {
	return request.post('/login/login', data)
}
//登录
export const userInfo = function(data = {}) {
	return request.get('/user/getUserInfo', data)
}
//获取已绑定
export const userGetCash = function(data = {}) {
	return request.post('user/getCash', data)
}
//绑定c出金账户
export const userBindWithdraw = function(data = {}) {
	return request.post('user/cash_save', data)
}
//出金
export const userWithdraw = function(data = {}) {
	return request.post('user/downmark', data)
}
//公共配置
export const getUserIndex = function(data = {}) {
	return request.get('index/index', data)
}
export const up_password = function(data = {}) {
	return request.post('user/up_password', data)
}
// 修改交易密码
export const up_mpassword = function(data = {}) {
	return request.post('user/up_mpassword', data)
}
//设置交易密码
export const set_mpassword = function(data = {}) {
	return request.post('user/set_mpassword', data)
}
// 充值配置信息
export const recharge_config = function(data = {}) {
	return request.post('user/recharge_config', data)
}
// 充值提交申请
export const recharge_apply = function(data = {}) {
	return request.post('user/record', data)
}