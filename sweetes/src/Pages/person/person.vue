<template>
<div class="person">
    <a href="#"><img src="./img/setting.png" alt="setting" class="setting"></a>
    <a href="#"><img src="./img/write.png" alt="write" class="write"></a>
    <div class="head">
        <img src="./img/personHead.png" alt="" class="background">
        <img src="./img/head.png" alt="" class="picture">
    </div>
    <div class="user">用户</div>
    <div class="box">
        <div class="box1">
            <span>0</span>
            <div class="box11">收藏</div>
            <div class="border1"></div>
        </div>
        <div class="box2">
            <span>0</span>
            <div class="box22">关注</div>
            <div class="border2"></div>
        </div>
        <div class="box3">
            <span>0</span>
            <div class="box33" @click="goTo('/personmoney')">红包</div>
            <div class="border3"></div>
        </div>
        <div class="box4">
            <span>0</span>
            <div class="box44">地址</div>
        </div>
    </div>
    <div class="empty"></div>
    <div class="PersonOrder1">
        <b>我的订单</b>
    </div>
    <div class="PersonOrder2">
        <div>全部</div>
        <div>待付款</div>
        <div>待评价</div>
    </div>
    <div class="PersonActive"></div>
    <div class="empty"></div>
    <div class="PersonFoot">
        <orderall></orderall>
        <orderall></orderall>
        <orderall></orderall>
        <orderall></orderall>
        <orderall></orderall>
        <div class="empty"></div>
    </div>
</div>
</template>

<script>
import orderall from '../orderall/orderall.vue'
export default {
  components: {orderall},
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style scoped>
.person{
    width: 100%;
}
.setting,.write{
    width: 1.066667rem;
    height: 1.066667rem;
    position: absolute;
    top: .533333rem;
    z-index: 5;
}
.setting{
    right: .533333rem;
}
.write{
    left: .533333rem;
}
.head{
    width: 100%;
    position: relative;
}
.background{
    width: 100%;
}
.picture{
    width: 16%;
    height: 70%;
    position: absolute;
    top: 55%;
    left: 42%;
}
.user{
    width: 100%;
    height: 20%;
    margin-top: 8%;
    font-size: .8rem;
    text-align: center;
}
.box{
    width: 94%;
    height: 4rem;
    margin: 2% auto;
    display: flex;
}
.box1,.box2,.box3,.box4{
    width: 25%;
    height: 4rem;
    justify-content: space-around;
    align-items: center;
    position: relative;
}
.box4{
    border-right: 0;
}
.box11,.box22,.box33,.box44{
    color: #a1a1a1;
    width: 98%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: .8rem;
}
.box1 span,.box2 span,.box3 span,.box4 span{
    width: 98%;
    display: block;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 1.333333rem;
}
.border1,.border2,.border3{
    width: 2%;
    height: 50%;
    position: absolute;
    top: 25%;
    right: 0;
    background-color: #ededed;
}
.empty{
    width: 100%;
    height: .8rem;
    background-color: #f5f5f5;
}
.PersonOrder1{
    width: 80%;
    height: 1.6rem;
    border-bottom:1px solid #f5f5f5;
    margin: auto;
    font-size: .8rem;
    line-height: 1.6rem;
}
.PersonOrder2{
    width: 80%;
    height: 1.6rem;
    margin: auto;
    font-size: .72rem;
    line-height: 1.6rem;
    display: flex;
}
.PersonOrder2 div{
    width: 26%;
    justify-items: center;
    align-items: flex-start;
}
.PersonActive{
    width: 10%;
    height: .133333rem;
    background-color:#fecf37;
    position: relative;
    left: 10%;
}
.PersonFoot{
    width: 100%;
    background-color: #f5f5f5;
}
</style>
