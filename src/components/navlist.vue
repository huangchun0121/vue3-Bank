<template>
  <div class="columns">
    <div class="column-item" v-for="(item,i) in navList" :key="i" @click="$router.push('/message')">
      <img :src="item.icon"/>
      <span @click="goarticleDetial">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'navlist',
  props:{
     navList:{
      type: Object,
      required: true
    }
  }

}
</script>


<style lang="less" scoped>
.columns {
    width: 90%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    position: absolute;
    top:4rem;
    left: 5%;
    border-radius: 10px;
    box-shadow: 0px 2px 8px -2px rgb(124, 122, 122);
    background-color: white;
    .column-item {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      font-size: 0.45rem;
      color: rgb(45, 44, 44);
      img{
        width: 50px;
        margin-bottom: 0.2rem;
      }
      span{
        font-size: 0.4rem;
        font-weight: 700;
      }
    }
  }
</style>