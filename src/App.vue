<template>
  <keep-alive :include="$store.state.cachePage">
    <router-view />
  </keep-alive>
</template>
<script>
// import { onMounted, reactive, toRefs, watch } from 'vue'
import store from '@/store'
import { onMounted } from 'vue'
export default {
  setup () {
    // const state = reactive({
    //   isRouterAlive: store.state.isRouterAlive
    // })
    // watch(() => store.state.isRouterAlive,
    //   () => {
    //     state.isRouterAlive = store.state.isRouterAlive
    //     console.log(state.isRouterAlive);
    //   })

    // return {
    //   ...toRefs(state)
    // }
    onMounted(() => {
      store.commit('addCachePage', 'LayoutIndex')
    })
  }

}
</script>
