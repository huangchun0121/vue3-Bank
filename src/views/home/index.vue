<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <top/>
    
    <!--头部背景图-->
    <div class="one"></div>

  <!--悬浮窗-->
  <navlist :navList="navList"/>

  <!--模块-->
 <columns :columnList="columnList" />
 
  <div class="USD-AU"> 
    <div class="USD-AU-item" style="border-right:1px solid #c00000"><span class="name">美元（USD)</span><span class="number">672.23</span></div>
    <div class="USD-AU-item"><span class="name">黄金（AU)</span><span class="number">399.41</span></div>
  </div>

  <!-- 轮播图区域 -->
    <swiper :images="images"/>

  <!--财富精选-->
  <div class="wealth"> 
    <van-cell>
         <template #title>
           <div style="font-size:0.5rem;font-weight:bold;">财富精选</div>
         </template>
    </van-cell>

    <van-swipe :height="130">
      <van-swipe-item v-for="(item,i) in wealthlist" :key="i" class="read">
        <div class="card" v-for="(item2,j) in item.content" :key="j">
          <div class="title">
            {{item2.title}}
          </div>
          <div class="proportion">{{item2.proportion}}</div>
          <div class="text">
            {{item2.text}}
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>

  <!--乡村集市-->
  <div class="country"> 
    <van-cell>
         <template #title>
           <div style="font-size:0.5rem;font-weight:bold;">乡村集市</div>
         </template>
    </van-cell>
   <div class="image">
      <img src="../../../public/image/home/country.png"/>
   </div>
  </div>
  

  <!--资讯-->
 <div class="zixun"> 
    <van-cell>
         <template #title>
           <div style="font-size:0.5rem;font-weight:bold;">资讯</div>
         </template>
    </van-cell>

   <div v-for="(item,i) in nowsList" :key="i" class="nows">
     <div class="text">
       <div class="content">{{item.content}}</div>
       <div class="time">{{item.time}}</div>
     </div>
     <div class="image">
       <img :src="item.image"/>
     </div>
   </div>
  </div>

  </div>
</template>

<script>
import Top from '../../components/Top.vue'
import columns from '../../components/columns.vue'
import navlist from '../../components/navlist.vue'
import swiper from '../../components/Swiper.vue'
import { getModelList } from '@/utils/user'
import {getNavList}  from '@/utils/nav'
import {getWealthsList,getNowsList} from '@/utils/home'
import { onMounted, reactive, toRefs } from 'vue'
export default {
  name: 'HomeIndex',
  components: {
    Top,
    columns,
    navlist,
    swiper
  },
  setup () {
    const information = reactive({
     
      isEditChannelShow: false,
      images: [
         "./image/swiper/swipe1.png",
        "./image/swiper/swipe5.jpg",
        "./image/swiper/swipe6.jpg"
      ],
      columnList:[],
      navList:[],
      wealthlist:[],
      nowsList:[
      ]
    })

    onMounted(async() => {
      information.columnList = await getModelList()
      const nav_list = await getNavList()
      nav_list.forEach(element => {
        console.log(element)
        if(element.tabbar === "首页")
        {
          information.navList = element.content
        }
      });

      information.nowsList = await getNowsList()
      information.wealthlist = await getWealthsList()
    })

    return {
      ...toRefs(information),
     
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  width: 100%;
  background-color: white;
  :deep(.van-nav-bar__title) {
    max-width: none;
  }
  .one {
    height: 200px;
    background: url('../../../public/image/home/首页背景.jpg') no-repeat;
    background-size: cover;
  }
  
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

  .USD-AU{
    width: 90%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.45rem 0.2rem;
    margin: 10px 5%;
    border-radius: 10px;
     box-shadow: 0px 2px 6px 0px rgb(103, 102, 102);
    .USD-AU-item{
      height: 50%;
      width: 50%;
      padding:0px 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .name{
        font-size: 0.4rem;
        color: rgb(205, 150, 20);
      }
      .number{
        font-size: 0.4rem;
      }
    }
  }

  .wealth{
    :deep(.van-swipe__indicators){
      display: none;
    }
    .read{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content:flex-start;
    align-items:center;
    padding: 10px 10px 10px 10px;
    background-color: white;
    .card{
      width: 33.33%;
      height: 100%;
      padding: 0.1rem 0;
      border-radius: 10px;
      box-shadow: 0px 0px 5px #d5d4d4;
      display: flex;
      flex-direction:column;
      align-items: center;
      .title{
      font-size: 0.47rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
      }
      .proportion{
          font-size: 0.7rem;
          margin-bottom: 0.1rem;
          color: red;
      }
      .text{
        font-size: 0.3rem;
        color: #aaa;
      }
    }
    }
  }

  .country{ 
    box-sizing: border-box;
    width: 100%;
    padding: 0px 0px 10px 0px;
    .image {
    margin:0px 0px 0px 0px;
    padding: 0px 10px;
    img{
      width: 100%;
      height:3rem;
      border-radius: 15px;
      overflow: hidden;
    }
  }
  }
  
  .zixun{
    box-sizing: border-box;
    width: 100%;
    padding: 0px 0px 60px 0px;
    background-color: white;
    display: flex;
    flex-direction:column ;
    justify-content: center;
    .nows{
      box-sizing: border-box;
      width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0.3rem 0.3rem;
     margin: 0.1rem 0rem;
     border-bottom: 1px solid rgba(170, 170, 170, 0.16);
      .text{
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .content{
            font-size: 0.4rem;
            margin-bottom: 0.2rem;
        }
        .time{
            font-size: 0.3rem;
            color: #aaa;
        }
      }
      .image{
        width: 27%;
        img{ 
          width: 100%;
          border-radius: 30%;
        }
      }
    }
  }
}
</style>