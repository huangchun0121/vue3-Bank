<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="登录"
      left-arrow
      @click-left="$router.back"
    />
    <!-- 登录表单 -->
    <div class="login"> 

      <van-form
      validate-first
      @submit="onLogin"
      @failed="onFailed"
      ref="loginFormRef"
      :show-error-message="false"
      :show-error="false"
    >
      <van-field
        v-model="user.username"
        left-icon="contact"
        placeholder="账号"
        name="username"
      />
      <van-field
        v-model="user.password"
        left-icon="eye-o"
        placeholder="密码"
        name="password"
        type="password"
        
      >
        <template #button>
          <van-count-down
            v-if="isCountDownShow"
            :time="1000 * 60"
            format="ss s"
            @finish="isCountDownShow = false"
          />
        </template>
      </van-field>
      <!-- 登录按钮 -->
      <div class="login-btn-wrapper">
        <van-button class="login-btn" block native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>

    </div>
    
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import { useLogin, useFailed } from '@/utils/user'
export default {
  name: 'LoginIndex',
  setup () {
    const state = reactive({
      user: {
        username: 'user',
        password: '123456'
      },
      isCountDownShow: false,
      isSendSmsLoading: false
    })
    const loginFormRef = ref('')
    //登录
    const onLogin = () => {
      useLogin(state.user)
    }
    //登录失败
    const onFailed = (error) => {
      useFailed(error)
    }
    return {
      ...toRefs(state),
      loginFormRef,
      onLogin,
      onFailed,
    }
  }
}
</script>

<style lang="less" scoped>
.app-nav-bar{
  background:#42c11f;
}
.login{
   width: 70%;
   margin:1rem 5%;
   background-color:white;
   padding: 1rem;
   border-radius: 50px;
   box-shadow: 0px 6px 10px 6px #d5d4d4;
}

.send-btn {
  width: 76px;
  height: 23px;
  border: none;
  .van-button__text {
    font-size: 11px;
  }
}
.login-btn-wrapper {
  padding: 26px 16px;
  .login-btn {
    background: #42c11f;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
  }
}
</style>