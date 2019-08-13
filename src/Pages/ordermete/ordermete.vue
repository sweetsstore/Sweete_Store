<template>
    <div id="app">
        <div id="return-1"><span class="iconfont" id="return">&#xe622;</span><span id="sureorder">订单详情</span></div>
        <div class="success"></div>
            <div id="personmsg">
                <div class="addchara"><span class="iconfont" id="addchara">&#xe641;</span></div>
                <div class="spanchara">
                    <span id="name">收货人：{{name}}</span>
                    <span id="accounttel">13633234491</span>
                    <p id="accountadd">{{accountadd}}</p>
                </div>
            </div>
        <div class="shopping">
                <span class="iconfont" id="shoppic">&#xe608;</span>
                <span class="shoptitle">{{shopTitle}}</span>
                <ul class="productlist">
                    <li v-for="item in productLists" :key="item">
                        <div class="product">
                            <img class="productpic" v-bind:src="item.images">
                            <div id="shopchara">
                                <div class="producttitle">{{item.productTitle}}</div>
                                <div class="price"><!--使用过滤器对总价改变-->
                                    <span>￥{{item.price}}</span>
                                    <div class="count">数量：{{item.count}}</div>
                                    <button class="goodafter">申请售后</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
        </div>
        <div class="pricechara"><span class="allcount">商品总价</span><span class="trueprice">￥{{allcount}}</span></div>
        <div class="navblock"></div>
        <div class="paybox">
            <button class="deleteorder">删除订单</button>
            <button  class="classorder">查看订单</button>
            <button class="commit">评价</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ordermete',
  data () {
    return {
      name: '鱼鱼',
      accounttel: '13633234491',
      accountadd: '陕西省西安市长安区郭杜街道西安邮电大学长安校区西区',
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
      ],
      allcount: '337'
    }
  }
}
</script>
<style scoped>
    #app{
            width: 100%;
            margin: 0;
            padding: 0;
            background-color: white;
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
        margin: 2% 0 2% 0;
    }
    #return{
        font-size: 30px;
    }
    #sureorder{
        width: 30%;
        height: 25px;
        font-size: 15px;
        margin:1.5% 0 1.5% 2%;
        display: inline-block;
        vertical-align: bottom;
    }
    .success{
        background: url(img/success.jpg) no-repeat;
        width: 100%;
        height: 80px;
        margin: 0px auto;
        background-size:100% 100%;
    }
    #personmsg{
        width: 94%;
        background-color: white;
        /* padding: 3% 0 3% 0; */
        margin: 3% 0% 3% 3%;
        text-align:left;
        height: 70px;
        position: relative;
    }
    .addchara{
        width: 10%;
        float: left;
    }
    #addchara{
        font-size: 25px;
        margin: 5% 5% 3% 1%;
        position: absolute;
    }
    .spanchara{
        width: 90%;
        float: right;
        margin: 1% 0 0 0%;
        position: relative;
    }
    #name{
        font-size: 15px;
        display: inline-block;
    }
    #accounttel{
        width:10%;
        height: auto;
        font-size:10px;
        color: #aaa;
        display: inline-block;
        position: absolute;
        right: 55px;
        top: 2px;
    }
    #accountadd{
        font-size: 14px;
        display: block;
        margin: 1% 0 0 1%;
    }
    .shopping{
        width: 96%;
        margin: 2% 2% 2% 2%;
        position: relative;
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
      margin: 0% 0 0 2%;
      position: absolute;
    }
    .producttitle{
      width: 100%;
      font-size: 15px;
      margin: 3% 2%;
    };
    .price{
      display: inline-block;
      width: 60%;
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
    .goodafter{
        width: 70px;
        height: 20px;
        font-size: 15px;
        float: right;
    }
    .pricechara{
        width: 96%;
        margin: 3% auto;
        position: relative;
    }
    .allcount{
        float: left;
    }
    .trueprice{
        display: inline-block;
        position: absolute;
        left: 80%;
    }
    .navblock{
        width: 100%;
        height: 46.69px;
    }
    .paybox{
        width: 360px;
        height: 25px;
        position: fixed;
        bottom: 0;
        background-color: white;
        vertical-align: middle;
    }
    .deleteorder{
        float: right;
        display: flex;
        width: 20%;
        height:25px;
        font-size: 16px;
    }
    .classorder{
        float: right;
        width: 20%;
        height:25px;
        font-size: 16px;
    }
    .commit{
        float: right;
        width: 20%;
        height:25px;
        font-size: 16px;
    }
</style>
