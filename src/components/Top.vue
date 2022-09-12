<template>
   <div class="van-nav-bar">
        <div class="nav-header">
          <div class="icon-item" @click="Sign()">
            <van-icon name="point-gift-o" color="black" size="25px" class="add-icon"/>
            <span>签到</span>
          </div>
          <van-button class="search-btn" icon="search">搜索</van-button>
          <div class="icon-item" @click="$router.push('/message')">
            <van-icon name="service-o" color="black" size="25px" class="add-icon"/>
            <span>客服</span>
          </div>
          <div class="icon-item" @click="$router.push('/message')">
            <van-icon name="envelop-o" color="black" size="25px" class="add-icon"/>
            <span>消息</span>
          </div>
        </div>  
    </div>
</template>
<script>
import store from '@/store'
import { Toast, Dialog } from 'vant'
import { useRouter } from 'vue-router'
export default {
  name:"Top",
  setup() {
    const router =useRouter()
    function Sign(){
      if(!store.state.user){
        Dialog.confirm({
          title: '访问提示',
          message: '该功能需要登录才能访问，是否登录?'
        }).then(() => { // 确认执行这里
          router.push('/login')
        }).catch(() => { // 取消执行这里
          // 取消了，中断路由导航
        })
      }else{
        Toast.success('签到成功！');
      }
    }
    return {
      Sign
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar{
    width: 100%;
    position:fixed;
    top: 0;
    padding-top: 0.2rem;
    background: rgba(255, 255, 255, 0.5);
    .nav-header{
      width: 100%;
      display: flex;
      align-items: center;
      .stream-icon-div{
        margin: 0px 10px;
        height: 100%;
        display: flex;
        flex-direction: column;
        font-size: 0.06rem;
        .stream-icon{
         height:50%;
        }
      }
      .search-btn {
        width: 70%;
        height: 42px;
        border: 1px solid #e4e4e4;
        background-color: #fafbfc;
        border-radius: 20px;
        .van-icon {
          font-size: 16px;
        }
        .van-button__text {
          font-size: 14px;
        }
      }
      .icon-item{
        width: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.06rem;
        .add-icon{
          margin: 0px 10px;
        }
      }
    }
  }
</style>