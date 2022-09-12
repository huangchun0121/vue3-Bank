import store from '@/store'
import router from '@/router'
import { Toast, Dialog } from 'vant'
import { useRoute } from 'vue-router'
import { login,  getCurrentUser,ModelList,userColumnsList } from '@/api/user'
const route = useRoute()
/**
 * @method 登录
 * @param {*} userData 手机号码、密码
 */
export const useLogin = async userData => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  });
  try {
    const  data  = await login(userData)
    if(userData.mobile!=data.data.mobile||userData.password!=data.data.password)
    {
      ('账号或密码错误，请重试!');
      returnToast.fail
    }else{
    Toast.success('登陆成功');
    store.commit('removeCachePage', 'LayoutIndex')
    store.commit('setUser', data)
    router.push('/user')
    }
    
    
  }
  catch (err) {
    Toast.fail('账号或密码错误，请重试!');
    console.log('登录失败', err)
  }
}

/**
 * @method 表单验证失败的函数
 * @param {*} error 
 */
export const useFailed = (error) => {
  if (error.errors[0]) {
    Toast({
      message: error.errors[0].message, // 提示消息
      position: 'top'
    })
  }
}
/**
 * @method 退出登录
 */
export const useLogout = () => {
  Dialog.confirm({
    title: '退出提示',
    message: '真的要退出登录吗？再考虑一下吧！',
  })
    .then(() => {
      store.commit('setUser', null)
      router.push('/login')
    })
    .catch(() => {
      // on cancel
    });
}


/**
 * @method 刷新页面 
 *
 */

export const reload = () => {
  store.commit('setRouterAlive', false)
  setTimeout(() => {
    store.commit('setRouterAlive', true)
  }, 0)
}
/**
 * @method 发送验证码
 * @param {} ref 表单的引用
 * @param {} mobile 手机号码
 * @param {} show isCountDownShow
 */

export const useSendSms = async (ref, mobile, show) => {
  try {
    await ref.value.validate('mobile')
    await sendSms(mobile)
    if (!show) {
      show = true
    }
    console.log(show);
  } catch (err) {
    let message = ''
    if (err && err.response && err.response.status === 429) {
      message = '发送太频繁了，请稍后重试'
    } else if (err.name === 'mobile') {
      message = err.message
    } else {
      message = '发送失败，请稍后重试'
    }
    Toast({
      message, // 提示消息
      position: 'top'
    })
  }
}

/**
 * @method 获取当前用户信息
 */
export const useGetCurrentUser = async () => {
  const { data } = await getCurrentUser()
  return data.data
}



/**
 * @method 获取用户模块信息
 */
 export const getModelList = async() =>{
  const {data} =await ModelList()
  return data.data
}


/**
 * @method 获取用户模块信息
 */
 export const getUserColumnsList = async() =>{
  const {data} =await userColumnsList()
  return data.data
}