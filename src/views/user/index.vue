<template>
  <div class="my-container">

    <van-cell-group v-if="user" class="my-info">
      <div class="icon-login"  @click="goMessage">
        <img src="../../../public/image/消息.png"/>
        <span class="text">消息</span>
      </div>
      <div class="setting" @click="onLogout"  v-if="user" >
        <img src="../../../public/image/退出登录.png"/>
        <span class="text">退出</span>
      </div>
      
      <div class="base-info">
         <div class="userName"> 
           <span class="image"><img :src="currentUser.photo" /></span>
           <span class="text">{{currentUser.name}}</span>
         </div>
         <div class="editBtn" @click="toUserprofile">
           <span>个人主页</span>
            <img src="../../../public/image/个人信息.png"/>
          </div>
      </div>
      
    </van-cell-group>
    <!-- 未登录 -->
    <div v-else class="not-login">
      <div class="icon-login" @click="goLogin">
          <img src="../../../public/image/登录.png"/>
          <span class="text">登录</span>
          </div>
      <div class="setting" @click="goLogin">
      <img src="../../../public/image/设置.png"/>
      <span class="text">消息</span>
      </div>
      <div @click="goLogin" class="tologin">
         <span class="image"><img src="../../../public/image/用户.png" /></span>
         <button  class="text">立即登录</button>
      </div>
    </div>


<!--资产-->
  <div class="assets_liabilities"> 
    <div class="title">资产负债</div>
    <div class="content"> 
      <span>立即查看</span>
      <img src="../../../public/image/user-1.jpg"/>
    </div>
  </div>

  <!--本月收入-->
  <div class="assets_liabilities"> 
    <div class="title">本月收入</div>
    <div class="content"> 
      <span>立即查看</span>
      <img src="../../../public/image/user-2.jpg"/>
    </div>
  </div>


  <div class="modelList" v-for="(item,i) in modelList" :key="i"> 
   <div class="model"> 
     <div class="title">{{item.title}}</div>
      <div class="model_content">
        <router-link 
        class="model_item" 
        v-for="(item2,j) in item.content" 
        :key="j" 
        :to="{
          name: 'life',
        }"> 
          <van-image
            :src="item2.icon"
          />
          <span>{{item2.text}}</span>
        </router-link>
      </div>
    </div>
  </div>


</div>
</template>
<script>
import { useRouter } from 'vue-router'
import store from '@/store'
import { useGetCurrentUser, useLogout,getUserColumnsList } from '@/utils/user'
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs, watch } from 'vue'
export default {
  name: 'user',
  setup () {
    const router = useRouter()
    const state = reactive({
      //token
      user: '',
      //当前用户信息
      currentUser: {},
      //控制页面的刷新
      loginWrap: 0,
      //获取用户模块信息
      modelList:[]
    })
    const { ctx } = getCurrentInstance()
    //退出登录
    const onLogout = () => {
      useLogout()
    }
    onMounted(async () => {
      state.user = store.state.user
      state.currentUser = await useGetCurrentUser()
      state.modelList = await getUserColumnsList()
    })

    function toUserprofile(){
      router.push('/personInformation')
    }

    function goLogin(){
      router.push({
        name: 'login',
        query: {
          redirect: '/user'
        }
      })
    }

    function goMessage(){
      router.push('/message')
    }

    return {
      ...toRefs(state),
      onLogout,
      toUserprofile,
      goLogin,
      goMessage
    }
  }
}
</script>
<style lang="less" scoped>
.my-container {
  justify-content: center;
  align-items: center;
  margin-bottom:  1.33333rem;
  background-color: white;
  .my-info {
    height: 100px;
    padding:45px 10px 0px 10px;
    margin-bottom: 10px;
    position: relative;
    .topTip{
      width: 100%;
      position: absolute;
      top: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 0.05rem;
      .p1{
        font-size: 0.43rem;
        color: #0289d1a9;
      }
      .p2{
        font-size: 0.33rem;
        color: #0278bd7a;
      }
    }
    .icon-login{
      position:absolute;
      top: 5px;
      left: 8px;
      // width: 0.9rem;
      height: 0.9rem;
      display: flex;
      flex-direction: column;
      justify-content:flex-start;
      img{
        height: 70%;
        margin-right: 5px;
      }
      .text{
        font-size: 0.07rem;
      }

    }
    .setting{
      position:absolute;
      top:10px;
      right: 8px;
      height: 0.9rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      img{
        height: 70%;
        margin-right: 5px;
        
      }
      .text{

        font-size: 0.07rem;
      }
    }
    .base-info{
      height: 100%;
      padding:0px 10px;
      background-color: #1a1818cd;
      display: flex;
      justify-content:space-between;
      align-items: center;
      border-radius: 30px;
      .userName{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .image{
        height:1.5rem;
        // padding: 0;
        background-color: white;
        border-radius: 100%;
        img{
          height: 100%;
        }
        }
        .text{
        font-size: 0.7rem;
        border-radius: 20px;
        margin-left: 10px;
        color: white;
        }
      }
      
      .editBtn {
        height: 0.7rem;
        font-size: 10px;
        color: white;
        font-size: 0.45rem;
        display: flex;
        justify-content:flex-end;
        align-items: center;
        img{
          height: 0.5rem;
        }
      }
    }
    .data-info {
      .data-info-item {
        height: 65px;
        .count {
          font-size: 18px;
        }
        .text {
          color: rgb(105, 101, 101);
          font-size:0.4rem;
        }
      }
    }

    :deep(.van-grid-item__content) {
      background: unset;
    }
  }
  /* 未登录 */
  .not-login {
    height: 120px;
    padding:45px 10px 0px 10px;
    margin-bottom: 10px;
    position: relative;
    .icon-login{
      position:absolute;
      top: 5px;
      left: 8px;
      // width: 0.9rem;
      height: 0.9rem;
      display: flex;
      flex-direction: column;
      justify-content:flex-start;
      img{
        height: 70%;
        margin-right: 5px;
      }
      .text{
        font-size: 0.07rem;
      }

    }
    .setting{
      position:absolute;
      top:10px;
      right: 8px;
      height: 0.9rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      img{
        height: 70%;
        margin-right: 5px;
        
      }
      .text{

        font-size: 0.07rem;
      }
    }
    .tologin{
      height: 100%;
      padding:0px 10px;
      background-color: #1a1818cd;
      display: flex;
      justify-content: left;
      align-items: center;
      border-radius: 30px;
      .image{
        height:1.5rem;
        // padding: 0;
        background-color: white;
        border-radius: 100%;
        img{
          height: 100%;
        }
      }
      button{
      font-size: 0.4rem;
      border-radius: 20px;
      margin-left: 10px;
      color: rgb(58, 56, 56);
      background-color: #fcd29a;
    }
    }
    
  }
  :deep(.nav-grid) {
    .nav-grid-item {
      height: 70px;
      .iconfont {
        font-size: 22px;
      }
      .iconshoucang {
        color: #eb5253;
      }
      .iconlishi {
        color: #ff9d1d;
      }
      .van-grid-item__text {
        font-size: 14px;
        color: #333;
      }
    }
  }
  .logoutBtn {
    text-align: center;
    color: #d86262;
  }


  .assets_liabilities{
    width: 94%;
    box-sizing: border-box;
    padding: 10px;
    margin: 0.5rem 3%;
    box-shadow: 0px 2px 8px -2px rgb(124, 122, 122);
    border-radius: 25px;
    .title{
      display: flex;
      justify-content: flex-start;
      font-size: 0.5rem;
      font-weight: 600;
    }
    .content{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        text-align: center;
        background-color: #fdb64cac;
        width: 2.5rem;
        padding: 0.15rem;
        font-size: 0.45rem;
        border-radius: 30px;
        color: #333;
      }
      img{
        width: 4rem;
      }
    }
  }


  .modelList{
    width: 94%;
    padding: 0.3rem 3%;
    .model{
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: rgb(255, 255, 254);
      box-shadow: 0px 2px 8px -2px rgb(124, 122, 122);
      border-radius: 10px;

      .title{
        font-size: 0.5rem;
        font-weight: 600;
        margin: 3px 10px;
      }
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
          padding: 0.2rem 0;
          color: rgb(128, 128, 128);
          // background-color: #eb5253;
          :deep(.van-image){
            width: 35%;
            margin-bottom: 0.18rem;
          }
        }
      }
    }
  }
}
</style>
