/**
 * 悬浮导航相关请求模块
 */
 import request from '@/utils/request'

 /**
 * @method 数据请求
 */

export const navlist= () =>{
  return request.get('./Json/nav.json')
}