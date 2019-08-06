<template>
    <div id="app">
        <div id="gouwuche">购物车</div>
        <div class="greyblock"></div>
        <div class="shopping">
            <ul>
                <li v-for="item in carts" :key="item">
                    <div class="shoptitle">{{item.shopTitle}}</div>
                    <div class="productlist">
                        <ul>
                            <li v-for="pros in item.productList" :key="pros"><!--选择商品-->
                                <span class="check" :class="{'checked':pros.isChecked}" @click="ischeck(item,pros)"></span>
                                <img :src="pros.images" alt="" />
                                <div class="product">
                                    <p class="producttitle">{{pros.productTitle}}.text.substring(0,16)+"..."</p>
                                    <div class="price"><!--使用过滤器对总价改变-->
                                        <span>￥{{pros.price | totalprice(pros.count)}}</span>
                                        <div class="count">
                                            <!--商品数量控制-->
                                            <a herf="javascript:void(0)" class="btn-minus" @click="changeCount(pros,-1)">-</a>
                                            <input type="number" v-model="pros.count">
                                            <a herf="javascript:void(0)" class="btn-plus"  @click="changeCount(pros,1)">+</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div class="greyblock"></div>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="wantnav"><hr id="hrleft"><span class="iconfont">&#xe698;</span><span font-size="18px">按你所需</span><hr id="hrright"></div>
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
              images: '/img/12.jpg',
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
              img: '8.jpg',
              isChecked: false,
              productTitle: '意式黑椒培根牛肉面',
              price: 36,
              count: 1
            },
            {
              img: '12.jpg',
              isChecked: false,
              productTitle: '法国乔士麦春天精品比诺白葡萄',
              price: 1790,
              count: 1
            }
          ]
        }
      ],
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
        background: -webkit-linear-gradient(#ddd,#fff);
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
        border-bottom: #aaa 1px solid;
    }
    .greyblock{
            width: 100%;
            height: 10px;
            background-color: #eee;
        }
    .shopping{
        width: 96%;
        margin: 2% 2% 2% 2%;
        background-color: white;
        padding: 0;
    }
    .shoptitle{
        width: 100%;
        font-size: 18px;
        color: black;
    }
    .productlist{
        width: 100%;
        background-color: white;
        maigin:0 0 5px 0;
    }
    .wantnav{
        width: 100%;
        height: 20px;
        position: relative;
    }
    #hrleft{
        width: 35%;
        height: 1%;
        display: inline-block;
    }
    #hrright{
        width:35%;
        /* position: absolute; */
        right: 0;
        display: inline-block;
        float: right;
        vertical-align: bottom;
        margin: 0;
    }
    .paybox{
        width: 100%;
        height: 8%;
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
        right: 30%;
        vertical-align: middle;
        padding: 2% 0 0 0;
        color: red;
        width: 20%;
        bottom: 11.5%;
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
        width: 90%;
        height: 1px;
        margin: 0 5% 0 5%;
    }
</style>
