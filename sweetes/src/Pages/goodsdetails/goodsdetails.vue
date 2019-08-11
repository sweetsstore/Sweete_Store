<template>
    <div id="app">
        <div id="pic"></div><!-- 头部轮播图 -->
        <div>
        <span id="price"><strong>￥: 58 </strong></span><div id="inventorynum">剩余库存3366件</div><!-- {{price}} -->
        </div>
        <hr width="90%" text-align="center">
        <P id="goodsname">绿色森林：甜美爱恋茶抹草莓芒果夹心蛋糕180g下午茶</P><!-- {{goodsname}} -->
        <div class="greyblock"></div>
        <div id="discount"></div>
        <div class="greyblock"></div>
        <div id="comment">
            <div><span id="shopcommit"><strong>商品评价</strong></span></div>
            <div><div id="accountpic"></div>
            <span id="accountname">猫儿</span>
            <span id="committime">2019-07-24</span></div><br>
            <div id="truecommit">挺！</div>
        </div>
        <div class="greyblock"></div>
        <div class="tanggreyblock">图文详情</div><hr>
        <div id="shopdetails">
        <div class="imgdata" v-for="item in lists" :key="item">
            <img v-bind:src="item.img" width="100%" height="auto">
        </div>
        </div>
        <span class="line"></span>
        <span class="txt">已经到最低了</span>
        <span class="line"></span>
        <div class="suojin"></div>
        <div id="shopbottomnav">
        <ul class="nav">
            <li class="nav1" id="linav1"  ><a href=""><img src="img/dianpu.png" alt="">店铺</a></li>
            <li class="nav1" id="linav2"><a href=""><img src="img/shoucang.png" alt="">收藏</a></li>
            <li class="nav2"><a href="">加入购物车</a></li>
            <li class="nav2"><a href="">立即购买</a></li>
        </ul></div>
    </div>
</template>
<script>
export default {
  name: 'goodsdetails',
  data () {
    return {
      lists: [
        {img: require('./img/4.jpg')},
        {img: require('./img/5.jpg')},
        {img: require('./img/6.jpg')},
        {img: require('./img/7.jpg')}]
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
        #pic{
            width: 100%;
            height: 300px;
            background: url(img/1.jpg) no-repeat;/* {{shoppic}} */
            margin:0;
            padding:0;
            background-size: cover;
        }
        #price{
            width:42%;
            height:8%;
            font-size:23px;
            color: red;
            display:block;
            margin: 0 0 0 8% ;
            text-align: left;
        }
        #goodsname{
            width:85%;
            height:auto;
            color:black;
            font-size:20px;
            margin: 0% 5% 0 7%;
            line-height:21px;
            text-align: left;
        }
        .greyblock{
            width: 100%;
            height: 10px;
            background-color: #eee;
        }
        #discount{
            width:100%;
            height:80px;
            background:url(img/2.png) no-repeat;
            margin: 5px auto;
        }
        #comment{
            width: 95%;
            height: auto;
            margin: 0 0 0 5%;
        }
        #shopcommit{
            font-size: 20px;
            margin:0% 0 0 0;
        }
        #accountpic{
            width: 30px;
            height:25px;
            background:url(img/touxiang.png);
            background-repeat: no-repeat;
            background-size: cover;
            display: inline-block;
            /* float: left; */
            padding: 1.5% 0 0 0;
            margin: 1% 0 0 5%;
        }
        #accountname{
            width: 30%;
            font-size:20px;
            color: grey;
            margin: 0% 0 0 3%;
        }
        #committime{
            width: 30%;
            float: right;
            font-size: 17px;
            color: grey;
        }
        #truecommit{
            width: 80%;
            height: auto;
            color: black;
            font-size: 17px;
            margin: 2px 10% 10px 10%;
            text-align: left;
        }
        .tanggreyblock{
            width: 100%;
            height: 18px;
            text-align: center;
            vertical-align: bottom;
            font-size: 17px;
            color: black;
            position: inherit;
            background-color: #fff;
        }
        #shopdetails{
            width: 100%;
            height: auto;
        }
        .imgdata{
            width: 100%;
        }
        .goods-title {
            height: 35px;
            line-height: 35px;
            text-align: center;
        }
        .goods-title .line {
            display: inline-block;
            width: 35%;
            border-top: 1px solid #ccc ;
        }
        .goods-title .txt {
            color: #985f0d;
            height: 30px;
            width: 30%;
            line-height: 30px;
            vertical-align: -15%;
        }
        .suojin{
            width: 100%;
            height: 50px;
            background-color: white;
        }
        .nav{
            width: 100%;
            position:fixed;
            bottom: 0;
            left: 0;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        img{
            background-size: 100% auto;
        }
        .nav .nav1{
            width: 20%;
            float: left;
            background-color: white;
            color: black;
        }
        .nav .nav2{
            width: 32%;
            float: left;
            background-color: red;
            display: block;
            border-radius: 10%;
            color: white;
        }
        .nav a{
            display:block;
            height: 50px;
            color: black;
           /*  background-color:white; */
            font-size: 16px;
            text-align: center;
            line-height: 50px;
        }
        .nav a:hover{
            background:lightgoldenrodyellow;
        }
</style>
