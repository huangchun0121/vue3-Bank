<template>
  <div class="user-birthday">
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择完整时间"
      :min-date="minDate"
      :max-date="maxDate"
      @cancel="$emit('close')"
      @confirm="onConfirm"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { updateUserProfile } from '@/api/user'
import { Toast } from 'vant'
import dayjs from 'dayjs'
export default {
  name: 'PersonBirthday',
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  setup (props, { emit }) {
    const state = reactive({
      minDate: new Date(1970, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(props.modelValue)
    })
    const onConfirm = async () => {
      Toast.loading({
        message: '保存中...',
        forbidClick: true,
      });
      const date = dayjs(state.currentDate).format('YYYY-MM-DD')
      await updateUserProfile({
        birthday: date
      })
      emit('update:modelValue', date)
      emit('close')
      Toast.success('更改成功')
    }
    return {
      ...toRefs(state),
      onConfirm
    }
  }
}
</script>

<style>
</style>