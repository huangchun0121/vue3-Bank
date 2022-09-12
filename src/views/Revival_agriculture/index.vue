 <template>
  <div class="main">
    <top/>
   <!-- 轮播图区域 -->
      <div class="one">
        <van-swipe :autoplay="3000" :height="200">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
    </div>

  <!--栏目部分-->
  <columns :columnList="columnList" :marginTop="0"/>

   <!-- 热卖榜 -->
     <div class="modelList"> 
      <van-cell value="换一批">
        <template #title>
          <div style="font-size:16px;font-weight:bold;">{{goodsList.title}}</div>
        </template>
      </van-cell>
      <div class="model"> 
      <div class="model_content">
        <router-link 
        class="model_item" 
        v-for="(item,i) in goodsList.content" :key="i" 
        to="/message"> 
          <van-image
            :src="item.img"
          />
          <span>{{item.goodsName}}</span>
          <span style="color:red;">￥{{item.price}}</span>
        </router-link>
      </div>
    </div>
  </div>


  <!-- 选项卡片 -->
     <div class="card-select">
        <div class="card-item1">
          <div class="card-item1-1">
            湖光山色 野炊有你
            <span  class="card-item1-1-font">烤肉冰饮小食 特色任性购</span>
          </div>
          <img src="../../../public/image/goods/goods9.webp" alt=""/>
        </div>
        <div class="card-item2">
          <div class="card-item2-1">
            <div style="margin:5px auto;">
              <img style="width:100%;border-radius:15px;" src="../../../public/image/goods/goods_p5.png" alt="">
            </div>
            <div style=" margin:5px auto;"><img style="width:100%;border-radius:15px;" src="../../../public/image/goods/goods_p3.png" alt=""></div>
          </div>
          <div class="card-item2-2">
            <div style=" margin:5px auto;"><img style="width:100%;border-radius:15px;" src="../../../public/image/goods/goods_p1.png" alt=""></div>
            <div style=" margin:5px auto;"><img style="width:100%;border-radius:15px;" src="../../../public/image/goods/goods_p2.png" alt=""></div>
            <div style=" margin:5px auto;"><img style="width:100%;border-radius:15px;" src="../../../public/image/goods/goods_p4.png" alt=""></div>
          </div>
        </div>
     </div>

   <div class="goods-select">
        <div class="goods-title">{{goodsSelect.title}}<br><hr>    
        </div>
        <div class="recommend" v-for="(item,i) in goodsSelect.content" :key="i">
          <div class="recommend-item" v-for="(item2,i2) in item.goodsItem" :key="i2">
            <img style="height:3rem;" :src="item2.img">
            <view class="van-multi-ellipsis--l2">
              {{item2.goodsName}}
            </view>
            <div style="width:100%;text-align:left;color:red;">
              ￥{{item2.price}}
              <div style="float:right;width:0.5rem;height:0.5rem;text-align:center;">
                <img style="width:100%;border-radius:15px;" src="../../../public/image/goods/goods_car.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>


</div>
</template>
<script>
import Top from '../../components/Top.vue'
import columns from '../../components/columns.vue'
import {getModelList} from '../../utils/user'
import {getGoods,getGoods_select} from '../../api/xingnong_goods'
import {onMounted,reactive,toRefs} from 'vue'
export default {
  name: 'Revival_agriculture',
  components:{
    Top,
    columns
  },
  setup(){
    const data = reactive({
      images: [
       "./image/swiper/swipe1.jpg",
        "./image/swiper/swipe2.jpg",
        "./image/swiper/swipe3.jpg"
      ],
      columnList:[],
       goodsList:{},
      goodsSelect:{}

    })
     onMounted(async() => {
      data.columnList = await getModelList()
      getGoodsList()
      getGoodsSelectList()
    })
    const getGoodsList = async () => {
      const res = await getGoods()
      data.goodsList=res.data 
     
    }
    const getGoodsSelectList = async () =>{
      const res =await getGoods_select()
      data.goodsSelect=res.data
       console.log(res.data)
    }

    return{
      ...toRefs(data),
      
    }
  }

}
</script>

<style lang="less" scoped>
.main{
  background-color: white;

}
.one{
  margin: 50px 0px 0px 0px;
  padding: 10px 10px;
.van-swipe {
  width: 100%;
  height: 100px;
  border-radius: 15px;
  overflow: hidden;
  img {
  width: 100%;
  height: auto;
  border-radius: 15px;
}
}
}
.modelList{
    width: 97%;
    padding: 0.18rem 0.1rem;
    .model{
      width: 92%;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 0px 5px  #cdcbcb;
      border-radius: 15px;
      margin: 5px auto;
      .model_title{
        height: 1rem;
        width: 100%;
        float: left;
        font-size: 0.46rem;
        margin-top:0.15rem;
        margin-left:0.2rem;
        color: rgb(84, 84, 84);
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
          color: #727070;
          // background-color: #eb5253;
          :deep(.van-image){
            width: 35%;
            margin-bottom: 0.18rem;
          }
        }
      }
    }
  }

  .card-select{
  width: 97%;
  padding: 0.18rem 0.1rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  margin:10px auto;
  .card-item1{
    width: 92%;
    height: 3rem;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;
    background-color: #f6eaf8c7;
    border-radius: 15px;
    text-align: center;
    margin: 5px auto;
    .card-item1-1{
      width:50%;
      font-size: 16px;
      font-weight: bold;
      color: #e6469e;
      .card-item1-1-font{
       font-size:6px;
       color:#e298d5;
       white-space:nowrap;
       font-weight:500;
      }
    }
  }
  .card-item1 img{
    width:42%;
    margin: auto 10px;
    box-sizing: border-box;
    // height: 3rem;
    // border-radius: 15px;
    // box-shadow: 0px 0px 5px #d5d4d4;
    // background-color: #dccede;
  }
  .card-item2{
    display: flex;
    width: 92%;
    .card-item2-1{
      width: 50%;
      height:8rem ;
      margin-right: 10px;
       box-sizing: border-box;
    }
    .card-item2-2{
      width: 50%;
      height:8rem ;
      margin-left: 10px;
      box-sizing: border-box;
    }
  }
}

.goods-select{
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin:10px auto 50px auto; 
  box-sizing: border-box;

  .goods-title{
    width: 100%;
    margin-left: 20px;
    font-size: 19px;
    font-weight: bolder;
    hr{
      width:2rem;
      margin-left:0px;
      background:#4eb4b4;
    }
  }
  .recommend{
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .recommend-item{
      width:50%;
      // height: 200px;
      box-sizing: border-box;
      border-radius: 10px;
      box-shadow: 0px 0px 4px #d5d4d4;
      margin: 10px 10px;
      padding: 10px 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      font-size: 8px;
    }
  }
}


</style>