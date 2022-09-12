/**
 * 首页数据相关请求模块
 */
 import request from '@/utils/request'

  /**
 * @method 财富精选信息请求
 */

export const wealthsList= () =>{
  return request.get('./Json/home_wealths.json')
}

 /**
 * @method 资讯信息请求
 */

export const nowsList= () =>{
  return request.get('./Json/home_nows.json')
}