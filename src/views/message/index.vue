 <template>
  <div>
    <van-nav-bar
      title="消息中心"
      left-arrow
      @click-left="$router.back"
    />
    <div class="list">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            > 
            <div  v-for="(item,index) in msgList" :key="index" class="list_cell">
            <div class="img">
              <img :src="item.img"/>
            </div>
            <div class="text">
              <span class="person">{{item.person}}</span>
              <span class="content">{{item.content}}</span>
            </div>
            </div>
          </van-list>
    </div>
  </div>
</template>
<script>
import {onMounted,reactive,toRefs} from 'vue'
import {getMessage} from '@/api/message'
export default {
  name: 'VideoIndex',
  setup(){
    const data = reactive({
      msgList:[],
    })
      const onLoad = async () => {
      const res = await getMessage()   
    }
    const getMsgList = async() => {
      const resList = await getMessage()
      data.msgList=resList.data
    }
    onMounted(()=>{
        getMsgList()
    })

    return {
      ...toRefs(data),
      onLoad,
    }
    
  }

}
</script>

<style lang="less" scoped>
.list {
    width: 100%;
    padding-top: 0;
    padding-bottom: 50px;
    .list_cell{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content:space-between;
      align-items: center;
      height: 2rem;
      margin: 0.4rem 0;
      padding: 0 0.4rem;
      background-color: white;
      .img{
        height: 100%;
        img{
          height: 100%;
          border-radius: 100%;
        }
      }
      .text{
        width: 75%;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        // align-items: center;
        line-height: 1rem;
        .person{
          font-size: 0.5rem;
          font-weight: 600;
        }
        .content{
         font-size: 0.4rem;
         color: rgb(53, 51, 51);
        }
      }
    }
  }

 
</style>