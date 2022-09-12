<template>
  <div class="user-photo">
    <img class="image" :src="image" ref="imageRef" />
    <van-nav-bar
      class="toolbar"
      left-text="取消"
      right-text="确认"
      @click-left="$emit('close')"
      @click-right="onConfirm"
    />
  </div>
</template>

<script>
import { updateUserPhoto } from '@/api/user'
import { Toast } from 'vant'
import { onMounted, reactive, ref, toRefs } from 'vue'
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
export default {
  name: 'PersonPhoto',
  props: {
    file: {
      required: true
    }
  },
  setup (props, { emit }) {
    const state = reactive({
      image: window.URL.createObjectURL(props.file),
      cropper: null
    })
    const imageRef = ref(null)
    const onConfirm = async () => {
      Toast.loading({
        message: '保存中...',
        forbidClick: true,
        duration: 0
      })
      const file = await getCropperCanvas()
      const fd = new FormData()
      fd.append('photo', file)
      await updateUserPhoto(fd)
      emit('update-photo', window.URL.createObjectURL(file))
      emit('close')
      Toast.success('保存成功')
    }
    const getCropperCanvas = () => {
      return new Promise(resolve => {
        state.cropper.getCroppedCanvas().toBlob((blob) => {
          resolve(blob)
        })
      })
    }
    onMounted(() => {
      const realImage = imageRef.value
      console.log(realImage);
      state.cropper = new Cropper(realImage, {
        viewMode: 1,
        dragMode: 'move',
        aspectRatio: 1,
        cropBoxMovable: false,
        cropBoxResizable: false,
        background: false,
        movable: true
      })
    })
    return {
      ...toRefs(state),
      imageRef,
      onConfirm
    }
  }
}
</script>

<style lang="less" scoped>
.user-photo {
  height: 100%;
  background-color: #000;
  :deep(.toolbar) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    .van-nav-bar__text {
      color: #fff;
    }
  }
  .image {
    display: block;
    max-width: 100%;
  }
}
</style>