<template>
  <div class="nav-bar van-hairline--top">
    <ul class="nav-list">
      <router-link  class="nav-list-item active" to="home">
        <van-icon name="shop-o" />
        <i class="nbicon nblvsefenkaicankaoxianban-1"></i>
        <span>首页</span>
      </router-link>
      <router-link  class="nav-list-item" to="category">
        <van-icon name="points" />
        <i class="nbicon nbfenlei"></i>
        <span>分类</span>
      </router-link>
      <router-link  class="nav-list-item" to="cart">
        <van-icon  name="shopping-cart-o" :badge="!count ? '' : count" />
        <span>购物车</span>
      </router-link>
      <router-link  class="nav-list-item" to="user">
        <van-icon name="manager-o" />
        <i class="nbicon nblvsefenkaicankaoxianban-"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { getLocal } from '../assets/common/js/utils'
export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    onMounted(() => {
      const token = getLocal('token')
      const path = route.path
      if (token && !['/home', '/category'].includes(path)) {
        store.dispatch('updateCart')
      }
    })
    const count = computed(() => {
      return store.state.cartCount
    })

    return {
      count
    }
  }
}
</script>

<style lang="less" scoped >
@primary: #1baeae; // 主题色
@orange: #FF6B01; 
@bc: #F7F7F7;
@fc:#fff;

// // 背景图片地址和大小
.bis(@url) {
  background-image: url(@url);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

// //圆角
.borderRadius(@radius) {
  -webkit-border-radius: @radius;
  -moz-border-radius: @radius;
  -ms-border-radius: @radius;
  -o-border-radius: @radius;
  border-radius: @radius;
}

// //1px底部边框
.border-1px(@color){
  position: relative;
  &:after{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid @color;
    content: '';
  }
}
// //定位全屏
.allcover{
  position:absolute;
  top:0;
  right:0;
}

// //定位上下左右居中
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// //定位上下居中
.ct {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

// //定位左右居中
.cl {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

// //宽高
.wh(@width, @height){
  width: @width;
  height: @height;
}

// //字体大小，颜色
.sc(@size, @color){
  font-size: @size;
  color: @color;
}

.boxSizing {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

// //flex 布局和 子元素 对其方式
.fj(@type: space-between){
  display: flex;
  justify-content: @type;
}

    .nav-bar{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 5px 0;
      z-index: 1000;
      background: #fff;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
      .nav-list {
        width: 100%;
        .fj();
        flex-direction: row;
        padding: 0;
        .nav-list-item {
          display: flex;
          flex: 1;
          flex-direction: column;
          text-align: center;
          color: #666;
          &.router-link-active {
            color: @primary;
          }
          i {
            text-align: center;
            font-size: 22px;
          }
          span{
            font-size: 12px;
          }
          .van-icon-shopping-cart-o {
            margin: 0 auto;
            margin-bottom: 2px;
          }
        }
      }
    }
</style>
