<template>
 <div class="images">
        <van-swipe :autoplay="3000" :height="200">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
    </div>
  
</template>

<script>
export default {
  props: {
    images:{
      type:Array,
      default:[
       "./image/swiper/swipe1.jpg",
        "./image/swiper/swipe2.jpg",
        "./image/swiper/swipe3.jpg"
     ]
    } 
    
  },
  setup(){

  }
}
</script>

<style lang='less' scoped>
.images{
  padding: 10px 10px;
  .van-swipe {
    width: 100%;
    height: 100px;
    border-radius: 15px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
    }
  }
}
</style>
