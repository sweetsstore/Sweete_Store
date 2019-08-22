<template>
    <div id="app">
        <div id="gouwuche">购物车</div>
        <div class="greyblock"></div>
        <ul class="shopping">
            <li class="everyshop" v-for="item in carts" :key="item.id">
                <div class="shoptitle">{{item.shop_Name}}</div>
                <hr class="shophr">
                <ul class="productlist">
                    <li v-for="pros in item.productLists" :key="pros.id">
                        <input type='checkbox' :checked="{'checked':pros.isChecked}" class='input-checkbox' @click='ischeck(item,pros)'>
                        <div class="product">
                            <img class="productpic" v-bind:src="pros.goods_Picture">
                            <div id="shopchara">
                            <div class="producttitle">{{pros.productTitle}}</div>
                            <div class="price"><!--使用过滤器对总价改变-->
                                <div class="count">
                                    <!--商品数量控制-->
                                    <a herf="javascript:void(0)" class="btn-minus" @click="changeCount(pros,-1)">-</a>
                                    <input class="productnum" type="number" v-model="pros.goods_Num">
                                    <a herf="javascript:void(0)" class="btn-plus"  @click="changeCount(pros,1)">+</a>
                                </div>
                                <div class="goodsbottom"><span class="proprice">￥{{pros.goods_Price | totalprice(pros.count)}}</span>
                                <span class="iconfont" id="delete">&#xe626;</span></div>
                            </div></div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="fenge"></div>
        <div class="wantnav"><hr id="hrleft"><span class="iconfont">&#xe698; </span><span font-size="18px"> 按你所需</span><hr id="hrright"></div>
        <div class="fenge"></div>
        <div class="paybox">
            <span class="allprice">总计：{{allPrice}}</span>
            <router-link to="orders"><button class="settlement">结算({{allCount}})</button></router-link><hr id="hr">
        </div>
        <car-nav></car-nav>
    </div>
</template>
<script>
import carnav from '../../components/carnav/carnav'
export default {
  name: 'shoppingcart',
  components: {
    'car-nav': carnav
  },
  data () {
    return {
      carts: [
        {
          shop_Name: 'TIMMY的店', // 商店名
          productLists: [
            {
              goods_Picture: require('./img/12.jpg'),
              isChecked: false, // 商品选择状态
              productTitle: '少女心Q萌榴莲千层蛋糕', // 产品名
              goods_Price: 58, // 价格
              goods_Num: 1 // 数量
            }
          ]
        },
        {
          shop_Name: '味·KING',
          productLists: [
            {
              goods_Picture: require('./img/8.jpg'),
              isChecked: false,
              productTitle: '意式黑椒培根牛肉面',
              goods_Price: 36,
              goods_Num: 1
            },
            {
              goods_Picture: require('./img/12.jpg'),
              isChecked: false,
              productTitle: '法国乔士麦春天精品比诺白葡萄',
              goods_Price: 1790,
              goods_Num: 1
            }
          ]
        }
      ],
      allPrice: 0, // 所有价格
      allCount: 0 // 被选中的产品数量
    }
  },
  methods: {
    changeCount (val, way) { // 判断way的值为1还是-1
      if (way > 0) {
        val.count++
      } else {
        val.count--
        if (val.count < 1) {
          val.count = 1
        }
      }
    },
    ischeck (item, pro) { // 为未选中的时候改变为true，反之为true
      !pro.isChecked ? this._checkTrue(item, pro) : this._checkFalse(item, pro)
    },
    _totalPeice () { // 每次调用此方法，将初始值为0，遍历价格并累加
      this.allPrice = 0
      this.carts.forEach(item => {
        let products = item.productList
        products.forEach(pros => {
          if (pros.isChecked) {
            this.allPrice += pros.price * pros.count
          }
        })
      })
    },
    _totalCount () { // 同上
      this.allCount = 0
      this.carts.forEach(item => {
        this.allCount += item.checkedCount
      })
    }
  },
  filters: { // 单件商品的价格 × 数量
    totalprice (val, count) {
      return val * count
    }
  },
  watch: { // 深度监听所有数据，每次改变重新计算总价和总数
    carts: {
      deep: true,
      handler (val, oldval) {
        this._totalPeice()
        this._totalCount()
      }
    }
  }
}
</script>

<style scoped>
    #app{
        /* background: -webkit-linear-gradient(#ddd,#fff); */
        background-color: #eee;
    }
    *{
        margin:0;
        width: 100%;
        padding: 0;
    }
    #gouwuche{
        width: 98%;
        height:8%;
        display: flex;
        top: 0;
        color: black;
        background-color: white;
        font-size: 20px;
        float: left;
        vertical-align: center;
        padding: 1%;
        border-bottom: #eee 1px solid;
    }
    .greyblock{
            width: 100%;
            height: 35px;
            background-color: #eee;
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
    .shoptitle{
        width: 100%;
        font-size: 17px;
        color: black;
        height: 25px;
        bottom: -5px;
    }
    .shophr{
      width: 80%;
      text-align: center;
      position: absolute;
      left: 15%;
    }
    .productlist{
      width: 100%;
      position: relative;
    }
    .input-checkbox{
      width: 10%;
      height: 20px;
      display: inline-block;
      vertical-align: middle;
    }
    .productpic{
      width: 25%;
      margin: 3%;
      display: inline-block;
    }
    #shopchara{
      width: 65%;
      display: inline-block;
      /* float: right; */
    }
    .producttitle{
      width: 100%;
      font-size: 15px;
      margin: 3% 2%;
    }
    .price{
      display: inline-block;
      width: 60%;
      /* float: left; */
      position: relative;
      font-size: 15px;
      color: #000;
      margin: 0% 2% 0% 2%;
    }
    .proprice{
      color: rgb(255,0,0);
      display: inline-block;
      width: 90%;
    }
    .goodsbottom{
      position: absolute;
      top: 45px;
    }
    .productnum{
      /* width: 20px;
      height: 20px; */
      right: 0;
      display: inline;
    }
    #delete{
      font-size: 20px;
      width: 23px;
      position: absolute;
      float: right;
      color: black;
      margin: 0 0 0 50%;
    }
    .fenge{
      width: 100%;
      height: 10px;
      background-color: #eee;
    }
    .wantnav{
        width: 100%;
        height: 20px;
        position: relative;
    }
    #hrleft{
      width: 35%;
      height: 1%;
      float: left;
      margin: 3% 0 0 0;
    }
    #hrright{
        width:35%;
        right: 0;
        float: right;
        margin: 0;
        margin: 3% 0 0 0;
    }
    .paybox{
        width: 100%;
        height: 7%;
        position: fixed;
        bottom: 50px;
        background-color: white;
        vertical-align: middle;
    }
    .allprice{
        color: black;
        font-size: 16px;
        position: fixed;
        left: 46%;
        color: red;
        bottom: 10%;
    }
    .settlement{
      float: right;
        width: 30%;
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
    #hr{
      position: fixed;
      bottom: 8%;
    }
</style>
