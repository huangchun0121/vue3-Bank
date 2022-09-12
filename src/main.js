import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible'
import '@/assets/css/global.less'
import VideoPlayer from "vue-video-player/src";
import "vue-video-player/src/custom-theme.css";
import "video.js/dist/video-js.css";

// 导入mock
require("./mock/index");
const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(Vant)
  .use(VideoPlayer)
  .mount('#app')
