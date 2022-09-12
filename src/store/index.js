import { createStore } from 'vuex'
import { getItem, setItem } from '@/utils/storage'

//token
const USER_KEY = 'userToken'
export default createStore({
  state: {
    user: getItem(USER_KEY),
    isRouterAlive: true,
    cachePage: ['LayoutIndex'],
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      setItem(USER_KEY, state.user)
    },
    setRouterAlive (state, bol) {
      state.isRouterAlive = bol
    },
    //添加缓存页面
    addCachePage (state, pageName) {
      if (!state.cachePage.includes(pageName)) {
        state.cachePage.push(pageName)
      }
    },
    //移除
    removeCachePage (state, pageName) {
      const index = state.cachePage.indexOf(pageName)
      if (index !== -1) {
        state.cachePage.splice(index, 1)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
