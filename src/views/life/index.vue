<template>
  <div class="home-container">

      <!-- 导航栏 -->
    <top/>
    
    <!--轮播图区域-->
    <div class="one">
        <van-swipe :autoplay="3000" :height="200">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
    </div>

  <!--悬浮窗-->
   <navlist :navList="navList"/>

  <!--模块-->
  <van-swipe :height="170">
    <van-swipe-item v-for="(item,i) in modelList" :key="i" class="modelList">
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
    </van-swipe-item>
    <van-swipe-item v-for="(item,i) in modelList" :key="i" class="modelList">
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
    </van-swipe-item>
  </van-swipe>

  <!-- 合作共建 -->
    <div class="cooperation">
       <van-cell is-link>
         <template #title>
           <div style="font-size:0.5rem;font-weight:bold;">{{lifeGoodsList.title}}</div>
         </template>
       </van-cell>
        <div class="cooperation-content">
        <van-tabs active="{{ active }}" bind:change="onChange" :ellipsis="false">
        <van-tab title="中央和国家机关">
          <div class="content-item" v-for="(item,i) in lifeGoodsList.content" :key="i">
            <div class="content-item1" v-for="(item2,i2) in item.goodsItem" :key="i2">
              <div style="margin:auto 0.2rem;">
                <span style="font-size:0.3rem;font-weight:bold;color:black;">{{item2.department}}</span><br>{{item2.address}}
              </div>
              <img style="width:1rem; height:1rem;border-radius:100%;" :src="item2.img">
            </div>
          </div>
        </van-tab>
        <van-tab title="央企">
          <div class="content-item" v-for="(item,i) in lifeGoodsList.content" :key="i">
            <div class="content-item1" v-for="(item2,i2) in item.goodsItem" :key="i2">
              <div style="margin:auto 0.2rem;">
                <span style="font-size:0.3rem;font-weight:bold;color:black;">{{item2.department}}</span><br>{{item2.address}}
              </div>
              <img style="width:1rem; height:1rem;border-radius:100%;" :src="item2.img">
            </div>
          </div>
        </van-tab>
        <van-tab title="高校">
          <div class="content-item" v-for="(item,i) in lifeGoodsList.content" :key="i">
            <div class="content-item1" v-for="(item2,i2) in item.goodsItem" :key="i2">
              <div style="margin:auto 0.2rem;">
                <span style="font-size:0.3rem;font-weight:bold;color:black;">{{item2.department}}</span><br>{{item2.address}}
              </div>
              <img style="width:1rem; height:1rem;border-radius:100%;" :src="item2.img">
            </div>
          </div>
        </van-tab>
        <van-tab title="地方单位">
          <div class="content-item" v-for="(item,i) in lifeGoodsList.content" :key="i">
            <div class="content-item1" v-for="(item2,i2) in item.goodsItem" :key="i2">
              <div style="margin:auto 0.2rem;">
                <span style="font-size:0.3rem;font-weight:bold;color:black;">{{item2.department}}</span><br>{{item2.address}}
              </div>
              <img style="width:1rem; height:1rem;border-radius:100%;" :src="item2.img">
            </div>
          </div>
        </van-tab>
      </van-tabs>
     </div>
    </div>

  </div>
</template>

<script>
import Top from '../../components/Top.vue'
import navlist from '../../components/navlist.vue'
import { getModelList } from '@/utils/user'
import {getNavList}  from '@/utils/nav'
import {GetLifeGoodsList} from '../../utils/life'
import { onMounted, reactive, toRefs } from 'vue'
export default {
  name: 'HomeIndex',
  components: {
    Top,
    navlist
  },
  setup () {
    const information = reactive({
      //控制栏目标签的重新渲染
      vanTab: 0,
      active: 0,
      channels: [],
      isEditChannelShow: false,
      images: [
        "./image/swiper/swipe1.jpg",
        "./image/swiper/swipe2.jpg",
        "./image/swiper/swipe3.jpg"
      ],
      modelList:[],
      navList:[],
      lifeGoodsList:{},
      active: 1,

    })
    const updateChannels = (index) => {
      information.channels.splice(index, 1)
    }

    function onChange(event) {
      wx.showToast({
        title: `切换到标签 ${event.detail.name}`,
        icon: 'none',
      });
    }

    onMounted(async() => {
      // useGetUserChannels()
      information.modelList = await getModelList()
      const nav_list = await getNavList()
      nav_list.forEach(element => {
        if(element.tabbar === "生活")
        {
          information.navList = element.content
        }
      });
        const res = await GetLifeGoodsList()
        information.lifeGoodsList=res

    })

    return {
      ...toRefs(information),
      updateChannels,
      onChange
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
    margin: 0px 0px 0px 0px;
    padding: 0px;
  }
  .columns {
    width: 90%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    position: absolute;
    top:3.6rem;
    left: 5%;
    border-radius: 10px;
    box-shadow: 0px 2px 12px -2px rgb(57, 56, 56);
    background-color: white;
    .column-item {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      font-size: 0.45rem;
      color: rgb(45, 44, 44);
      img{
        width: 50px;
        margin-bottom: 0.2rem;
      }
      span{
        font-size: 0.4rem;
        font-weight: 700;
      }
    }
  }

  .modelList{
    width: 97%;
    height: 100%;
    padding: 0.18rem 0.1rem;
    margin-top: 0.5rem;
    .model{
      width: 100%;
      height: 100%;
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
          color: rgb(11, 9, 9);
          // background-color: #eb5253;
          :deep(.van-image){
            width: 35%;
            margin-bottom: 0.18rem;
          }
        }
      }
    }
  }

  .channel-tabs {
    padding-right: 33px;
    :deep(.van-tab) {
      min-width: 80px;
      // border-right: 1px solid #f6f6f6;
      border-bottom: 1px solid #f6f6f6;
      // padding-left: 5px;
      // padding-right: 5px;
    }
    :deep(.van-tabs__line) {
      width: 15px !important;
      height: 3px;
      background: #168b88;
      bottom: 20px;
    }
    .wap-nav-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      right: 0;
      width: 33px;
      height: 43px;
      background-color: #fff;
      opacity: 0.8;
      .van-icon {
        font-size: 24px;
      }
    }
  }

  .cooperation{
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: space-around;
  flex-direction: column;
  padding: 0.18rem 0.1rem;
  box-sizing: border-box;
  margin-bottom: 50px;
  .cooperation-content{
    width: 92%;
    box-shadow: 0px 0px 5px #c7bfbf;
    margin: 5px auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 15px;

    .content-item{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      box-sizing: border-box;
      .content-item1{
        width:50%;
        padding: 10px 10px;
        display: flex;
        align-items: center;
        font-size: 0.1rem;
        color: #a5a1a1;
      }
    }
  }
}

}
</style>