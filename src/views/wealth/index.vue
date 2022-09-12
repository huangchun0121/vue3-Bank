<template>
  <div class="main">

    <top/>
    <div class="top-image">
      <img src="../../../public/image/财富.jpg"/>
    </div>

  <!--栏目部分-->
  <columns :columnList="columnList" :marginTop="0"/>
  
    <!-- 轮播图区域 -->
     <swiper/>


    <!-- 订阅号  start-->
       <van-cell is-link value="实时获取专家分析">
         <template #title>
           <div style="font-size:0.5rem;font-weight:bold;">订阅号</div>
         </template>
       </van-cell>
      <div class="read">
        <div class="card">
          <div style="margin-top:0.4rem;">
            <van-image src="./image/column/农业银行.png" alt=""></van-image>
          </div>
          <div style="font-size:10px;font-weight:bold;margin-top:0.1rem;">农银汇理基金</div>
          <div>
            <van-button round type="warning" size="mini">+关注</van-button>
          </div>
        </div>
        <div class="card">
           <div style="margin-top:0.4rem;">
            <van-image src="./image/column/农业银行.png" alt=""></van-image>
          </div>
          <div style="font-size:10px;font-weight:bold;margin-top:0.1rem;">农银理财</div>
          <div>
            <van-button round type="warning" size="mini">+关注</van-button>
          </div>
        </div>
        <div class="card">
           <div style="margin-top:0.4rem;">
            <van-image src="./image/column/农业银行.png" alt=""></van-image>
          </div>
          <div style="font-size:10px;font-weight:bold;margin-top:0.1rem;">金融市场日报</div>
          <div>
            <van-button round type="warning" size="mini">+关注</van-button>
          </div>
        </div>
      </div>
      <!-- 订阅号  end-->


 <div class="manage-money">
        <van-cell is-link>
         <template #title>
           <div style="font-size:0.5rem;font-weight:bold;">账户贵金属</div>
         </template>
       </van-cell>
       <div class="manage-money-item">
        <table style="width:100%">
          <tr>
            <td style="font-size:15px;color:#a88137;font-weight:bold"><div>人民币黄金</div></td>
          </tr>
          <tr style="font-size:15px;font-weight:bold;">
            <td style="width:40%">398.22</td>
            <td style="width:40%">398.72</td>
            <td>
              <div>
            <van-button round  size="mini" color="#efc85f">&nbsp;&nbsp;下单&nbsp;&nbsp;</van-button>
          </div>
            </td>
          </tr>
          <tr style="font-size:4px;color:#b2b2b2">
            <td style="width:40%"> 卖出价</td>
            <td style="width:40%">买入价</td>
          </tr>
        </table>
       </div> 
      </div>


    <money-card/>

 </div>
</template>

<script>
import Top from '../../components/Top.vue'
import columns from '../../components/columns.vue'
import MoneyCard from '../../components/MoneyCard.vue'
import swiper from '../../components/Swiper.vue'
import { getModelList } from '@/utils/user'
import {onMounted, reactive, toRefs } from 'vue'
export default  {
 name:'wealth',
 components:{
   Top,
   columns,
   MoneyCard,
   swiper
 },
 setup(){
    const data = reactive({
     columnList:[],
     images: [
        "./image/swiper/swiper1.webp",
        "./image/swiper/swiper2.webp",
        "./image/swiper/swiper3.webp"
      ],
    })
    onMounted(async() => {
      // useGetUserChannels()
      data.columnList = await getModelList()
    })

    return{
      ...toRefs(data)
    }
 }
};
</script>

<style lang="less" scoped>
.main{
  background-color: white;
  width: 100%;
  .top-image {
  margin: 65px 0px 0px 0px;
  padding: 0px 10px;
  img{
    width: 100%;
    height: 110px;
    border-radius: 15px;
    overflow: hidden;
  }
}



/* 订阅号 start */
:deep(.van-cell::after){
  border-bottom: none;
}
.read{
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items:center;
  padding: 10px 10px;
  padding-bottom: 40px;
  .card{
  width: 28%;
  height: 3.5rem;
  margin: 0px 7px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #d5d4d4;
  display: flex;
  align-items: center;
  flex-direction: column;

}
}

/* 订阅号 end */


.manage-money{
  background-color: white;
  width: 95%;
  display: flex;
  align-items:center;
  flex-direction: column;
  padding:0px 10px 10px 10px;
}
.manage-money-item{
  width: 90%;
  height: 120px;
  display: flex;
  align-items:center;
  border-radius: 10px;
  margin: 10px auto;
  box-shadow: 0px 0px 4px #d5d4d4;
  padding: 8px 10px;
}

}

</style>