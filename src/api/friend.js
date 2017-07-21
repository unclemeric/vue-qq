import {
	request_get,
	request_put,
	request_post
} from '@/common/js/request'

const API_CONFIG = '/api/friend'

/**
 * [getAllMessage 获取某个用户的好友和群]
 * @param  {[type]} userId [用户id]
 * @return {[type]}        [消息]
 */
export function get_friend_list(userId) {
	const url = `${API_CONFIG}/list/${userId}`
	return request_get(url)
}

/**
 * [get_new_friends 获取某个用户的新朋友申请]
 * @return {[type]} [description]
 */
export function get_new_friends(userId) {
	const url = `${API_CONFIG}/newfriend/${userId}`
	return request_get(url)
}

/**
 * [get_apply_detail 获取好友申请详情]
 * @param  {[type]} applyId [description]
 * @return {[type]}         [description]
 */
export function get_apply_detail(applyId) {
	const url = `${API_CONFIG}/applydetail/${applyId}`
	return request_get(url)
}

/**
 * [resolve_friend_apply 处理好友申请]
 * @param  {[type]} type    [同意还是拒绝]
 * @param  {[type]} applyId [申请ID]
 * @return {[type]}         [description]
 */
export function resolve_friend_apply(type, applyId) {
	let resolve = type == 1 ? 'agree' : 'reject'
	const url = `${API_CONFIG}/${resolve}/${applyId}`
	return request_put(url)
}

/**
 * [get_fenzu 获取所有分组和好友昵称]
 * @param  {[type]} applyId [申请ID]
 * @return {[type]}         [description]
 */
export function get_fenzu(applyId) {
	const url = `${API_CONFIG}/getfenzu/${applyId}`
	return request_get(url)
}

/**
 * [add_friend 添加好友,设置备注和分组]
 * @param {[type]} data [数据]
 */
export function add_friend(data) {
	const url = `${API_CONFIG}/addfriend`
	return request_post(url, data)
}