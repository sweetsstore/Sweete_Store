<template>
    <div class="myaddress">
        <div class="body1">
            <div class="name">{{user_Addr_Name}}</div>
            <!-- user_Addr_Name -->
            <div class="phone">{{user_Addr_Num}}</div>
            <!-- user_Addr_Num -->
            <div class="flag" v-show="flag">{{user_Addr_Defaddr}}</div>
            <!-- user_Addr_Defaddr -->
        </div>
        <div class="body2">
            <div class="area">{{user_Address}}</div>
            <!-- user_Address -->
            <div class="delete" @click="del">删除</div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['key'],
  data () {
    return {
      user_Addr_Name: '张金蕊',
      user_Addr_Num: '18009240559',
      user_Addr_Defaddr: '默认',
      user_Address: '陕西省西安市长安区西安邮电大学西区',
      flag: true
    }
  }
//   del () {
//     console.log('key')
//   }
}
</script>
<style scoped>
.myaddress{
    width: 100%;
    height: 4rem;
    position: relative;
    margin-top: 3%;
}
.body1{
    width: 95%;
    height: 2rem;
    position: relative;
    left: 5%;
}
.name{
    width: 20%;
    height: 2rem;
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.phone{
    width: 32%;
    height: 2rem;
    position: absolute;
    top: 0;
    left: 24%;
    line-height: 2rem;
    color: #c8c8c8;
}
.flag{
    width: 16%;
    position: absolute;
    top: .2rem;
    right: 24%;
    height: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    background-color: #ffebea;
    color: #dd7454;
    font-size: .933333rem;
    /* display: none; */
}
.body2{
    width: 95%;
    height: 2rem;
    position: relative;
    left: 5%;
}
.area{
    width: 76%;
    height: 2rem;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 2rem;
}
.delete{
    width: 18%;
    height: 2rem;
    position: absolute;
    right: 0;
    border-left: 2px solid #f5f5f5;
    color: #bbbbbb;
    line-height: 2rem;
    text-align: center;
}
</style>
