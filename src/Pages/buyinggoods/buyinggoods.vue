<template>
    <div id="app">
        <div id="return-1"><span class="iconfont" id="return">&#xe622;</span><span id="sureorder">限时抢杀</span></div>
        <ul class="goodslists">
            <li class="everyshop" v-for="item in lists" :key="item"><hr>
                <div class="product">
                    <img class="productpic" v-bind:src="item.images">
                    <div class="shopchara">
                        <div class="producttitle">{{item.productTitle}}</div><br>
                        <div class="price"><!--使用过滤器对总价改变-->
                            <span>￥{{item.price}}</span>
                        </div>
                    </div>
                    <button class="buying">立即购买</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'buyinggoods',
  data () {
    return {
      lists: [
        {
          images: require('./img/13.jpg'),
          productTitle: '意式黑椒培根牛肉面',
          price: 36
        },
        {
          images: require('./img/13.jpg'),
          productTitle: '法国乔士麦春天精品比诺白葡萄',
          price: 1790
        }
      ]
    }
  }
}
</script>
<style scoped>
    #app{
        width: 100%;
        margin: 0;
        padding: 0;
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
        margin: 2% 0 0% 0;
    }
    #return{
        font-size: 30px;
    }
    #sureorder{
        width: 30%;
        height: 25px;
        font-size: 16px;
        margin:1.5% 0 1% 2%;
        display: inline-block;
        vertical-align: bottom;
    }
    hr{
        margin: 0;
        width: 100%;
    }
    .goodslists{
        padding: 0;
        /* position: relative; */
        margin: 0;
    }
    li{
        list-style: none;
    }
    .everyshop{
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
    }
    .productpic{
      width: 24%;
      margin: 3% 1% 0 2%;
      display: inline-block;
      float: left;
    }
    .shopchara{
        width: 48%;
        display: inline-block;
        margin: 0;
        padding: 0;
        float: left;
        margin: 3% 0 2% 0%;
    }
    .producttitle{
        display: inline-block;
        font-size: 16px;
    }
    .price{
        display: inline-block;
        font-size: 16px;
    }
    .buying{
        display: inline;
        width: 20%;
        background-color: red;
        font-size: 14px;
        padding: 0;
        height: 100px;
        margin: 0% 0 0 0;
        float: right;
    }
</style>
