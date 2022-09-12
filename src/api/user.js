/**
 * 用户相关请求模块
 */
import request from '@/utils/request'

/**
 * @method 登录请求
 * @param {*} data  包括手机号码&密码
 */

export const login= data =>{
  return request.get('/api/login',{data})
}

/**
 * @method 获取登录用户信息请求
 *
 */
export const getCurrentUser = () => {
  return request.get('./Json/user.json')
}

/**
 * @method 获取用户频道列表的请求
 */
export const getUserChannels = () => {
  return request.get('./Json/channels.json')
}



/**
 *@method 获取用户个人资料
 */
export const getUserProfile = () =>{
  return request.get('./Json/profile.json')
}
/**
 *@method 修改用户个人资料
 */

export const updateUserProfile = data =>{
  return request.get('./Json/profile.json',{data})
}

/**
 *@method 修改用户照片资料
 */

export const updateUserPhoto = data =>{
  return request.get('./Json/photo.json',{data})
}
/**
 * @method 用户模块信息
 */
 export const ModelList = () =>{
  return request.get('./Json/model.json')
}

/**
 * 用户模块
 */
export const userColumnsList=()=>{
  return request.get('./Json/myColumns.json')
}
