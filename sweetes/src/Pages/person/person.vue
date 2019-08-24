<template>
<div class="person">
    <a href="#"><img src="../../assets/img/personimg/setting.png" alt="setting" class="setting" @click="goTo('/set')" title="写种草"></a>
    <a href="#"><img src="../../assets/img/personimg/write.png" alt="write" class="write"></a>
    <div class="head">
        <img src="../../assets/img/personimg/personHead.png" alt="" class="background">
        <img :src="pic" alt="" class="picture">
    </div>
    <div class="user">{{user}}</div>
    <div class="box">
        <div class="box1" @click="goTo('/personcollect')">
            <span>{{gCount}}</span>
            <div class="box11">收藏</div>
            <div class="border1"></div>
        </div>
        <div class="box2" @click="goTo('/personattention')">
            <span>{{sCount}}</span>
            <div class="box22">关注</div>
            <div class="border2"></div>
        </div>
        <div class="box3" @click="goTo('/personmoney')">
            <span>{{cCount}}</span>
            <div class="box33" @click="goTo('/personmoney')">红包</div>
            <div class="border3"></div>
        </div>
        <div class="box4" @click="goTo('/personaddress')">
            <span>{{aCount}}</span>
            <div class="box44">地址</div>
        </div>
    </div>
    <div class="empty"></div>
    <div class="PersonOrder1">
        <b>我的订单</b>
    </div>
    <div class="PersonOrder2">
        <div @click="orderall">全部</div>
        <div @click="orderpay">待付款</div>
        <div @click="orderevaluate">待评价</div>
    </div>
    <div class="PersonActive" ref="active"></div>
    <div class="empty"></div>
    <div class="PersonFoot">
        <!-- <shop></shop> -->
        <ul>
            <li v-show="flag1">
                <shop></shop>
                <shop></shop>
                <div class="moneyall">
                    <p>共计 : {{moneyall}}元</p>
                </div>
            </li>
            <li v-show="flag1">
                <shop></shop>
                <div class="moneyall">
                    <p>共计 : {{moneyall}}元</p>
                </div>
            </li>
            <li v-show="flag2">
                <shop></shop>
                <shop></shop>
                <div class="moneyall">
                    <div class="orderpay">支付</div>
                </div>
            </li>
            <li v-show="flag3">
                <shop></shop>
                <div class="moneyall">
                    <div class="orderpay">评价</div>
                </div>
            </li>
            <li v-show="flag3">
                <shop></shop>
                <div class="moneyall">
                    <div class="orderpay">评价</div>
                </div>
            </li>
        </ul>
        <div class="empty"></div>
    </div>
</div>
</template>
<script>
import shop from './shop/shop.vue'
export default {
  data () {
    return {
      gCount: 0,
      sCount: 0,
      cCount: 0,
      aCount: 0,
      moneyall: 0,
      flag1: true,
      flag2: false,
      flag3: false,
      user: '',
      pic: '',
      goodslist: ''
    }
  },
  created () {
    this.$http.post('/api/mypage/getUser.action').then(res => {
    // if (res.data === 'YES') {
    //   this.$router.push('/zhuceOk')
    // }
      this.gCount = res.data.goodsCount
      this.sCount = res.data.shopCount
      this.cCount = res.data.couponCount
      this.aCount = res.data.addrCount
      this.user = res.data.user.user_Name
      this.pic = res.data.user.user_Pic
      this.goodslist = res.data.ordersAndGoods
      console.log(res.data.ordersAndGoods)
    })
  },
  components: {
    shop
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    },
    orderall () {
      this.$refs.active.style.left = '8%'
      this.flag1 = true
      this.flag2 = false
      this.flag3 = false
    },
    orderpay (e) {
      this.$refs.active.style.left = '30%'
      this.flag1 = false
      this.flag2 = true
      this.flag3 = false
    },
    orderevaluate (e) {
      this.$refs.active.style.left = '51%'
      this.flag1 = false
      this.flag2 = false
      this.flag3 = true
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
ul{
    width: 90%;
    padding: 0;
    margin: 0;
    margin-left: 5%;
}
li{
    width: 100%;
    display: block;
    margin-bottom: 10%;
}
.moneyall{
    width: 100%;
    height: 2rem;
    background-color: white;
    position: relative;
}
.moneyall p{
    margin: 0;
    padding: 0;
    width: 40%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 4%;
    font-size: 1rem;
    line-height: 2rem;
    text-align: right;
}
.moneyall .orderpay{
    width: 20%;
    height: 1.6rem;
    position: absolute;
    top: .2rem;
    right: 4%;
    color: white;
    font-size: .8rem;
    line-height: 1.6rem;
    text-align: center;
    border-radius: 0.7rem;
    background-color: #ffce39;
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
    border-radius: 50%;
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
    display: block;
    width: 26%;
    justify-items: center;
    align-items: flex-start;
    /* text-decoration: none;
    color: black; */
}
.PersonActive{
    width: 10%;
    height: .133333rem;
    background-color:#fecf37;
    position: relative;
    left: 8%;
}
.PersonFoot{
    width: 100%;
    background-color: #f5f5f5;
}
</style>
