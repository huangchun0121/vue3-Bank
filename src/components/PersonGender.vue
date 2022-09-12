<template>
  <div class="user-gender">
    <van-picker
      title="标题"
      :columns="columns"
      :default-index="defaultIndex"
      @confirm="onConfirm"
      @cancel="$emit('close')"
      @change="onChange"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { updateUserProfile } from '@/api/user'
import { Toast } from 'vant'
export default {
  name: 'PersonGender',
  props: {
    modelValue: {
      type: Number,
      required: true
    }
  },
  setup (props, { emit }) {
    const state = reactive({
      columns: ['男', '女'],
      defaultIndex: props.modelValue
    })
    const onChange = (value, index) => {
      state.defaultIndex = index
    }
    /*  */
    const onConfirm = async () => {
      Toast.loading({
        message: '保存中...',
        forbidClick: true,
      });
      await updateUserProfile({
        gender: state.defaultIndex
      })
      emit('update:modelValue', state.defaultIndex)
      emit('close')
      Toast.success('更改成功')
    }
    return {
      ...toRefs(state),
      onChange,
      onConfirm
    }
  }
}
</script>

<style>
</style>