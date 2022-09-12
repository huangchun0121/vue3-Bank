<template>
  <div class="columnList" v-for="(item,i) in columnList" :key="i" :style="'margin-top:'+marginTop+'rem'"> 
   <div class="model"> 
      <div class="model_content">
        <router-link 
        class="model_item" 
        v-for="(item2,j) in item.content" 
        :key="j" 
        to="/message"> 
          <van-image
            :src="item2.icon"
          />
          <span>{{item2.text}}</span>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
import {reactive, toRefs } from 'vue'
export default {
 name:'columns',
 props:{
   columnList:{
      type: Object,
      required: true
    },
    marginTop:{
      type:Number,
      default:1.9
    }
 },

}
</script>


<style lang="less" scoped>
.columnList{
    width: 97%;
    padding: 0.18rem 0.1rem;
    // margin-top: 1.9rem;
    .model{
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: rgb(255, 255, 254);
      // box-shadow: 0px 5px 10px -7px rgb(57, 56, 56);
      border-radius: 10px;
      .model_content{
        width: 100%;
        display: flex;
        flex-direction: row;
        // justify-content:space-around;
        align-content:flex-start;
        flex-wrap:wrap;
        .model_item{
          width: 25%;
          box-sizing:border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 0.3rem;
          font-weight: 600;
          padding: 0.2rem 0;
          color: rgb(6, 6, 6);
          // background-color: #eb5253;
          :deep(.van-image){
            width: 35%;
            margin-bottom: 0.18rem;
          }
        }
      }
    }
  }

</style>