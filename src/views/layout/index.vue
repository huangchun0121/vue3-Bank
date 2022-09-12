<template>
  <div class="layout-container">
    <!-- 路由出口 -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="balance-o" to="/wealth">财富</van-tabbar-item>
      <van-tabbar-item icon="wap-home-o" to="/life">生活</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/Revival_agriculture">兴农</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'LayoutIndex',
  setup () {
    const state = reactive({
      active: 0
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>
</style>