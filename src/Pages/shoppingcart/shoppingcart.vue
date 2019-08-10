<template>
    <div id="app">
        <div id="gouwuche">购物车</div>
        <div class="greyblock"></div>
        <ul class="shopping">
            <li class="everyshop" v-for="item in carts" :key="item">
                <div class="shoptitle">{{item.shopTitle}}</div>
                <hr class="shophr">
                <ul class="productlist">
                    <li v-for="pros in item.productLists" :key="pros">
                        <input type='checkbox' :checked="{'checked':pros.isChecked}" class='input-checkbox' @click='ischeck(item,pros)'>
                        <div class="product">
                            <img class="productpic" v-bind:src="pros.images">
                            <div id="shopchara">
                            <div class="producttitle">{{pros.productTitle}}</div>
                            <div class="price"><!--使用过滤器对总价改变-->
                                <span>￥{{pros.price | totalprice(pros.count)}}</span>
                                <div class="count">
                                    <!--商品数量控制-->
                                    <a herf="javascript:void(0)" class="btn-minus" @click="changeCount(pros,-1)">-</a>
                                    <input class="productnum" type="number" v-model="pros.count">
                                    <a herf="javascript:void(0)" class="btn-plus"  @click="changeCount(pros,1)">+</a>
                                </div>
                            </div></div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="fenge"></div>
        <div class="wantnav"><hr id="hrleft"><span class="iconfont">&#xe698; </span><span font-size="18px"> 按你所需</span><hr id="hrright"></div>
        <div class="main_box">
          <ul>
              <li v-for="index in todos" :key='index'  @click='goDetail(todo.id)'>
                  <router-link :to="{ name: 'goodsdetails', query: { id: todo.id }}">
                      <div class="list" v-if="todo.sy_zs==1">
                          <div class="image">
                              <img :src="todo.fm_img" alt="图片">
                          </div>
                          <p class="name">{{todo.name}}</p>
                          <p class="Price">￥:{{todo.price}}</p>
                      </div>
                  </router-link>
              </li>
          </ul>
        </div>
        <div class="paybox">
            <span class="allprice">总计：{{allPrice}}</span>
            <button class="allcount">结算</button><hr id="hr">
        </div>
    </div>
</template>
<script>
export default {
  name: 'shoppingcart',
  data () {
    return {
      carts: [
        {
          shopTitle: 'TIMMY的店', // 商店名
          checkedCount: 0, // 此商店被选择的商品数量
          productLists: [
            {
              images: require('./img/12.jpg'),
              isChecked: false, // 商品选择状态
              productTitle: '少女心Q萌榴莲千层蛋糕', // 产品名
              price: 58, // 价格
              count: 1 // 数量
            }
          ]
        },
        {
          shopTitle: '味·KING',
          checkedCount: 0,
          productLists: [
            {
              images: require('./img/8.jpg'),
              isChecked: false,
              productTitle: '意式黑椒培根牛肉面',
              price: 36,
              count: 1
            },
            {
              images: require('./img/12.jpg'),
              isChecked: false,
              productTitle: '法国乔士麦春天精品比诺白葡萄',
              price: 1790,
              count: 1
            }
          ]
        }
      ],
      /* todos: [
        {
          fm_img: require('./img/1.jpg'),
          name: '绿色森林：甜美爱恋茶抹草莓芒果夹心蛋糕180g下午茶',
          price: '58'
        }
      ], */
      allPrice: 0, // 所有价格
      allShops: 0, // 被选中的商店数量
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
    _checkFalse (item, pro) {
      pro.isChecked = false // 改变状态为false
      this.isCheckAll = false // 全选状态为false
    }
  },
  filters: { // 单件商品的价格 × 数量
    totalprice (val, count) {
      return val * count
    }
  },
  mounted: {

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
      float: right;
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
    a{
      width: 20px;
      height: 20px;
      right: 0;
      text-align: center;
    }
    .productnum{
      width: 20px;
      height: 20px;
      right: 0;
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
    .main_box {
    /* height: 339px; */
      height: auto;
    }
    .list {
    height: auto;
    background: white;
    float: left;
    width: 50%;
    border-right: 1px solid #f4f4f4;
    border-top: 1px solid #f4f4f4;
    padding-bottom: 0.25rem
    }
    .main_box ul {
    overflow: hidden;
    /* margin-bottom: 1.5rem; */
    }
    ul li {
      list-style: none;
    }
    .Price {
        margin: auto;
        text-align: center;
        font-size: 0.38rem;
        color: #f81200;
        font-weight: 500;
        padding-top: 0.8rem;
        padding-bottom: 0.2rem;
    }
    .name {
      width: 80%;
      height: 0.64rem;
      line-height: 0.5rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: auto;
      font-size: 0.38rem;
      font-weight: 800;
      text-align: center;
    }
    .image {
        width: 100%;
        background: white;
        padding-top: 0.2rem;
        padding-bottom: 0.3rem;
    }
    .image img {
      width: 2.48rem;
      height: 2.6rem;
      display: block;
      margin: auto;
      margin-top: .4rem;
      margin-bottom: .2rem;
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
        bottom: 8%;
        background-color: white;
        vertical-align: middle;
    }
    .allprice{
        color: black;
        font-size: 15px;
        float: right;
        position: fixed;
        right: 33%;
        vertical-align: middle;
        padding: 2% 0 0 0;
        color: red;
        width: 20%;
        bottom: 10%;
    }
    .allcount{
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
