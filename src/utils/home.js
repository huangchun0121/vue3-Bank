/**
 * 首页相关请求工具函数
 */
 import { wealthsList,nowsList } from '@/api/home'

 export const getWealthsList = async ()=>{
  const {data} = await wealthsList()
   return data.data
 }

 export const getNowsList = async () => {
   const {data} = await nowsList()
   return data.data
 }