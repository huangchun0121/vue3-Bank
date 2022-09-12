<template>
    <div class="manage-money">
        <van-cell is-link>
         <template #title>
           <div style="font-size:0.5rem;font-weight:bold;">稳健理财</div>
         </template>
       </van-cell>
       <div class="manage-money-item">
        <table style="width:100%">
          <tr style="font-size:15px;font-weight:bold;">
            <td style="width:40%">3.95%</td>
            <td >农银理财 “农银进取”</td>
          </tr>
          <tr style="font-size:4px;color:#b2b2b2">
            <td style="width:40%"> 业绩比较基准</td>
            <td> 中低风险&nbsp;&nbsp;最低持有360天</td>
          </tr>
        </table>
       </div> 
      </div>
</template>
<script>
export default {
   data(){
       return{

       }
   }
}
</script>
<style lang="less" scoped>
.manage-money{
  // background-color: white;
  width: 94%;
  display: flex;
  align-items:center;
  flex-direction: column;
  padding: 10px 3%;
  background-color: aquamarine;
  margin-bottom: 50px;
  .manage-money-item{
  width: 90%;
  /* height: 120px; */
  display: flex;
  align-items:center;
  border-radius: 10px;
  margin: 10px auto;
  box-shadow: 0px 0px 4px #d5d4d4;
  padding: 20px 10px;
}
}

</style>
