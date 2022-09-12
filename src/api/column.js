/**
 * 频道相关请求
 */
import request from '@/utils/request'

/**
 * @method 全部频道列表请求
 * 
 */

// }
export const getAllChannel =()=>{
  return request.get('./Json/channels.json')
}