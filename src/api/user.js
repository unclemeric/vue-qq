import {
	request_put
} from '@/common/js/request'

const API_CONFIG = '/api/user'

/**
 * [logout 登出]
 * @param  {number} userId [用户id]
 * @return {[type]}        [description]
 */
export function logout(userId) {
	const url = `${API_CONFIG}/logout/${userId}`
	return request_put(url)
}

/**
 * [change_status 切换用户的状态]
 * @param  {[type]} userId [用户Id]
 * @param  {[type]} status [新状态]
 * @return {[type]}        [description]
 */
export function change_status(userId,status) {
	const url = `${API_CONFIG}/changestatus/${userId}/${status}`
	return request_put(url)
}

/**
 * [change_user 切换用户]
 * @param  {[type]} currentUserId [当前用户的id]
 * @param  {[type]} userId        [新用户的id]
 * @return {[type]}               [description]
 */
export function change_user(currentUserId,userId){
	const url = `${API_CONFIG}/changeuser/${currentUserId}/${userId}`
	return request_put(url)
}