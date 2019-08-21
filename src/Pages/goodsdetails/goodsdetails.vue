<template>
    <div id="app">
        <span class="iconfont" id="return">&#xe601;</span><home-chart></home-chart><!-- 头部轮播图 -->
        <div>
        <span id="price"><strong>￥: {{goods_Picture}} </strong></span><div id="inventorynum">剩余库存{{inventorynum}}件</div><!-- {{price}} -->
        </div>
        <hr width="90%" text-align="center">
        <P id="goodsname">{{goodsname}}</P><!-- {{goodsname}} -->
        <div class="greyblock"></div>
        <div id="discount"></div>
        <div class="greyblock"></div>
        <div id="comment">
            <div><span id="shopcommit"><strong>商品评价</strong></span><router-link to="commit"><span class="iconfont" id="morecommit">&#xe62b;</span></router-link></div>
            <div><div id="accountpic" v-if="account=flase" @click="alertredbag"><img v-bind:src="accountpic" width="30px" height="30px"></div>
            <span id="accountname">{{accountname}}</span>
            <span id="committime">{{committime}}</span></div><br>
            <div id="truecommit">{{truecommit}}</div>
        </div>
        <div class="greyblock"></div>
        <div class="tanggreyblock">图文详情</div><hr>
        <div id="shopdetails">
        <div class="imgdata" v-for="item in lists" :key="item.img">
            <img v-bind:src="item.img" width="100%" height="auto">
        </div>
        </div>
        <span class="line"></span>
        <div class="wantnav"><hr id="hrleft"><span class="iconfont" font-size="18px">&#xe62d;</span><span font-size="18px"> 已经到最低了</span><hr id="hrright"></div>
        <span class="line"></span>
        <div class="block"></div>
        <bottom-nav></bottom-nav>
    </div>
</template>
<script>
import bottomnav from '../../components/bottomnav/bottomnav'
import homechart from '../../components/homechart/homechart'
export default {
  name: 'goodsdetails',
  components: {
    'bottom-nav': bottomnav,
    'home-chart': homechart
  },
  data () {
    return {
    /* pic 轮播图 */
      goods_Picture: '58',
      goodsname: '绿色森林：甜美爱恋茶抹草莓芒果夹心蛋糕180g下午茶',
      inventorynum: '55688',
      accountpic: require('./img/touxiang.png'),
      accountname: '猫儿',
      committime: '2019-07-24',
      truecommit: '挺！',
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
        #return{
            font-size: 30px;
            margin: 10px 0 2px 5px;
        }
        #price{
            width:42%;
            height:8%;
            font-size:23px;
            color: red;
            display:block;
            margin: 2% 0 0 5% ;
            text-align: left;
            display: inline-block;
        }
        #inventorynum{
            width:47%;
            height:8%;
            color: #aaa;
            font-size: 13px;
            margin: 0 3% 0 0;
            display: inline-block;
            vertical-align: bottom;
        }
        #goodsname{
            width:85%;
            height:auto;
            color:black;
            font-size:16px;
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
            margin: 0 0 0 5%;
        }
        #shopcommit{
            font-size: 20px;
            margin:0% 0 0 0;
        }
        #morecommit{
            float: right;
            font-size: 30px;
            margin: 0 2% 0 0;
            padding: 0;
        }
        #accountpic{
            width: 30px;
            height:25px;
            background-repeat: no-repeat;
            background-size: cover;
            display: inline-block;
            padding: 1.5% 0 0 0;
            margin: 1% 0 0 5%;
        }
        #accountname{
            width: 40%;
            font-size:20px;
            color: grey;
            margin: 0% 0 0 3%;
            display: inline-block;
        }
        #committime{
            width: 25%;
            font-size: 14px;
            color: grey;
            display: inline-block;
            float: right;
        }
        #truecommit{
            width: 80%;
            height: auto;
            color: black;
            font-size: 17px;
            margin: -3% 3% 5px 7%;
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
        #hrleft{
            width: 32%;
            height: 1%;
            float: left;
            margin: 3% 0 0 0;
        }
        #hrright{
            width:32%;
            right: 0;
            float: right;
            margin: 0;
            margin: 3% 0 0 0;
        }
        .block{
            width: 100%;
            height: 50px;
        }
</style>
