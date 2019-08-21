<template>
    <div id="app">
        <div id="return-1"><span class="iconfont" id="return">&#xe622;</span><span id="sureorder">确认订单</span></div>
            <div id="personmsg">
                <div class="addchara"><span class="iconfont" id="addchara">&#xe641;</span></div>
                <div class="spanchara">
                    <span id="name">{{name}}</span>
                    <span id="accounttel">13633234491</span>
                    <p id="accountadd">{{accountadd}}</p>
                    <router-link to="myaddress"><div id="seladd"></div></router-link>
                </div>
            </div>
        <ul class="shopping">
            <li class="everyshop" v-for="item in carts" :key="item.id">
                <span class="iconfont" id="shoppic">&#xe608;</span>
                <div class="shoptitle">{{item.shopTitle}}</div>
                <hr class="shophr">
                <ul class="productlist">
                    <li v-for="pros in item.productLists" :key="pros.id">
                        <div class="product">
                            <img class="productpic" v-bind:src="pros.images">
                            <div id="shopchara">
                                <div class="producttitle">{{pros.productTitle}}</div>
                                <div class="price"><!--使用过滤器对总价改变-->
                                    <span>￥{{pros.price}}</span>
                                    <div class="count">数量：{{pros.count}}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="navblock"></div>
        <div class="paybox">
            <span class="allprice">合计：{{allPrice}}</span>
            <button class="allcount" @click="gopay">提交订单({{goodsnum}})</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'orders',
  data () {
    return {
      name: '鱼鱼',
      accounttel: '13633234491',
      accountadd: '陕西省西安市长安区郭杜街道西安邮电大学长安校区西区',
      carts: [
        {
          shopTitle: 'TIMMY的店', // 商店名
          productLists: [
            {
              images: require('./img/12.jpg'),
              productTitle: '少女心Q萌榴莲千层蛋糕', // 产品名
              price: 58, // 价格
              count: 1 // 数量
            }
          ]
        },
        {
          shopTitle: '味·KING',
          productLists: [
            {
              images: require('./img/8.jpg'),
              productTitle: '意式黑椒培根牛肉面',
              price: 36,
              count: 1
            },
            {
              images: require('./img/12.jpg'),
              productTitle: '法国乔士麦春天精品比诺白葡萄',
              price: 1790,
              count: 1
            }
          ]
        }
      ],
      goodsnum: '3',
      allPrice: '553'
    }
  },
  methods: {
    gopay () {
      this.$router.push('./payment')
    }
  }
}
</script>
<style scoped>
    #app{
            width: 100%;
            margin: 0;
            padding: 0;
            background: -webkit-linear-gradient(#ddd,#fff);
            font-family:sans-serif;
    }
    *{
        margin:0;
        width: 100%;
        padding: 0;
    }
    #return-1{
        color: black;
        font-size:18px;
        width: 100%;
        height:auto;
        vertical-align: middle;
        text-align: left;
        background-color: white;
        z-index: 0;
    }
    #return{
        font-size: 30px;
    }
    #sureorder{
        width: 30%;
        height: 25px;
        font-size: 20px;
        margin:1.5% 0 1.5% 2%;
        display: inline-block;
        vertical-align: bottom;
    }
    #personmsg{
        width: 92%;
        background-color: white;
        padding: 1% 0 2% 0;
        margin: 3% 0% 3% 3%;
        text-align:left;
        height: 103px;
    }
    .addchara{
        width: 30%;
        float: left;
        position: relative;
    }
    #addchara{
        font-size: 60px;
        margin: 18% 0 0 20%;
        display: inline-block;
        position: absolute;
    }
    .spanchara{
        width: 68%;
        float: right;
        margin: 3% 0 0 0;
    }
    #name{
        font-size: 20px;
    }
    #accounttel{
        width:50%;
        height: auto;
        font-size:10px;
        color: #aaa;
        display: inline-block;
    }
    #accountadd{
        font-size: 14px;
        display: inline;
        width: 70%;
        float: left;
    }
    #seladd{
        width: 13%;
        height: 30px;
        background-image: url(./img/seladd.png);
        float: right;
    }
    .shopping{
        width: 96%;
        margin: 2% 2% 2% 2%;
        position: relative;
    }
    .everyshop{
      width: 100%;
      margin: 2% 0 2% 0;
      background-color: white;
    }
    li{
      list-style: none;
    }
    #shoppic{
        width: 5%;
        font-size: 25px;
    }
    .shoptitle{
        width: 91%;
        font-size: 17px;
        color: black;
        height: 25px;
        bottom: -5px;
        display: inline-block;
    }
    .shophr{
      width: 80%;
      text-align: center;
      position: absolute;
      left: 10%;
    }
    .productlist{
      width: 100%;
      position: relative;
    }
    .productpic{
      width: 25%;
      margin: 2% 0 2% 2%;
      display: inline-block;
    }
    #shopchara{
      width: 65%;
      display: inline-block;
      float: right;
      margin: 1% 0 0 0%;
    }
    .producttitle{
      width: 100%;
      font-size: 15px;
      margin: 3% 2%;
    };
    .price{
      display: inline-block;
      width: 60%;
      float: left;
      position: absolute;
      font-size: 15px;
      color: red;
      margin: 4% 2%;
    }
    .productnum{
      width: 20px;
      height: 20px;
      right: 0;
    }
    .navblock{
        width: 100%;
        height: 40px;
    }
    .paybox{
        width: 100%;
        height: 40px;
        position: fixed;
        bottom: 0;
        background-color: white;
        vertical-align: middle;
    }
    .allprice{
        color: black;
        font-size: 17px;
        float: right;
        position: fixed;
        right: 33%;
        vertical-align: middle;
        padding: 2% 0 0 0;
        color: red;
        width: 30%;
        bottom: 1%;
    }
    .allcount{
        float: right;
        width: 32%;
        height:40px;
        font-size: 16px;
        background-color: red;
        border-radius: 20px;
        position: absolute;
        right: 0%;
        margin:0;
        padding: 0;
        color: white;
        text-align: center;
    }
</style>
