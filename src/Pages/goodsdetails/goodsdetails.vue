<template>
    <div id="app">
        <span class="iconfont" id="return">&#xe601;</span><home-chart></home-chart><!-- 头部轮播图 -->
        <div>
        <span id="price"><strong>￥: {{goods_Picture}} </strong></span><div id="inventorynum">剩余库存{{goods_Stock}}件</div><!-- {{price}} -->
        </div>
        <hr width="90%" text-align="center">
        <P id="goodsname">{{goods_Descr}}</P><!-- {{goodsname}} -->
        <div class="greyblock"></div>
        <div class="discount" @click='lingqu'> </div>
        <div class="greyblock"></div>
        <div id="comment">
            <div><span id="shopcommit"><strong>商品评价</strong></span><router-link to="commit"><span class="iconfont" id="morecommit">&#xe62b;</span></router-link></div>
            <div><div id="accountpic"><img v-bind:src="user_Pic" width="30px" height="30px"></div>
            <span id="accountname">{{user_Name}}</span>
            <span id="committime">{{goods_Eva_Time}}</span></div><br>
            <div id="truecommit">{{goodsEvaMas}}</div>
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
        <car-nav></car-nav>
    </div>
</template>
<script>
import carnav from '../../components/carnav/carnav'
import homechart from '../../components/homechart/homechart'
import qs from 'qs'
export default {
  name: 'goodsdetails',
  components: {
    'car-nav': carnav,
    'home-chart': homechart
  },
  data () {
    return {
      goods_Picture: '58',
      goods_Descr: '慕斯蛋糕',
      goods_Stock: '558',
      user_Pic: require('./img/touxiang.png'),
      user_Name: '猫儿',
      goods_Eva_Time: '2019-07-12',
      goodsEvaMas: '加油',
      lists: [
        {img: require('./img/13.jpg')},
        {img: require('./img/5.jpg')},
        {img: require('./img/4.jpg')},
        {img: require('./img/6.jpg')}]
    }
  },
  methods: {
    lingqu () {
      this.$http.post('/api/getCoupon.action',
        params: {
            shop_Id:shop_Id,
        },
        qs.stringify({
            shop_Id: this.shop_Id,
            goods_Picture: this.goods_Picture,
            goods_Descr: this.goods_Descr,
            goods_Stock: this.goods_Stock,
            user_Pic: this.user_Pic,
            user_Name: this.user_Name,
            goods_Eva_Time: this.goods_Eva_Time,
            goodsEvaMas: this.goodsEvaMas
        })
      ).then(res => {
        if (res.data === 'True') {
          this.$router.push('/lingquOk')
        }
      })
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
        .discount{
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
            /* float: right; */
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
</style>
