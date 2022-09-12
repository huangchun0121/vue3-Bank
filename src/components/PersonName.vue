<template>
  <div class="update-name">
    <van-nav-bar
      title="修改昵称"
      left-text="取消"
      right-text="完成"
      @click-left="$emit('close')"
      @click-right="onConfirm"
    />
    <div class="name-field-wrap">
      <van-field
        v-model="realName"
        rows="2"
        autosize
        type="textarea"
        maxlength="10"
        placeholder="请输入昵称"
        show-word-limit
      />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { updateUserProfile } from '@/api/user'
import { Toast } from 'vant'
export default {
  name: 'PersonName',
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  setup (props, { emit }) {
    const state = reactive({
      realName: props.modelValue
    })
    console.log(props.modelValue);
    const onConfirm = async () => {
      Toast.loading({
        message: '保存中...',
        forbidClick: true,
      });
      try {
        await updateUserProfile({
          name: state.realName
        })
        emit('update:modelValue', state.realName)
        emit('close')
        Toast.success('更改成功')
      } catch (err) {
        if (err && err.response && err.response.status === 409) {
          Toast.fail('昵称已存在')
        }
      }
    }
    return {
      ...toRefs(state),
      onConfirm
    }
  }
}
</script>

<style lang="less" scoped>
.name-field-wrap {
  padding: 10px;
}
</style>