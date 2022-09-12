/**
 * 栏目相关请求工具函数
 */
import { navlist } from '@/api/nav'

export const getNavList = async () => {
  const {data} = await navlist()
  return data.data
}