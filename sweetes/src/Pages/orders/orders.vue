<template>
    <div id="app">
        <div id="return-1"><span id="sureorder">确认订单</span><br></div>
        <div id="bodyblock">
            <div id="personmsg">
                <div id="addpic"></div>
                <span id="name">鱼鱼</span>
                <span id="accounttel">13633234491</span><br>
                <span id="accountadd">陕西省西安市长安区郭杜街道西安邮电大学长安校区西区</span>
                <div id="seladd"></div>
            </div>
            <div id="shopgoodsdetails">
                <div><div id="goodspic"></div>
                <span id="shopname">纪梵希旗舰店</span>
                <div id="shoppic"> </div>
                <span id="goodsname">绿色森林：甜美爱恋茶抹草莓芒果夹心蛋糕180g下午茶</span>
                <span id="price">￥:35.5</span>
            </div>
                <div id="buynum"></div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
console.log($)
</script>
<script src="/js/orders.js" ></script>
<script>
export default {
    mounted: function(){
    console.log($)
  }
}
</script>
<style scoped>
    #app{
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background: -webkit-linear-gradient(#ddd,#fff);
        font-family:sans-serif;
    }
    #return-1{
        color: black;
        font-size:18px;
        background-color: white;
        width: 100%;
        height:auto;
        vertical-align: middle;
        text-align: left;
        padding:3% 0 2% 0;
    }
    #sureorder{
        margin:0 0 0 2%;
    }
    #personmsg{
        background-color: white;
        padding: 0 5%;
        margin: 3% 3% 3% 3%;
        text-align:left;
    }
    .addpic{
        background:url(img/dizhi.png);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        float: left;
    }
    #name{
        font-size: 20px;
        display: inline;
    }
    #accounttel{
        font-size:10px;
        color: #aaa;
        display: inline;
    }
    #accountadd{
        font-size: 16px;
        display: inline;
    }
    #seladd{
        width: 10%;
        height: 100%;
        background-image: url(img/seladd.png);
    }
    #shopgoodsdetails{
        text-align: left;
        margin: 3% 3% 3% 3%;
        padding: 0 5%;
        background-color: white;
    }
    #shopname{
        font-size: 19px;
        margin: 5% 0 5% 0;
    }
    #shopgoodsdetails #shoppic{
        width: 20%;
        float: left;
    }
    #shopgoodsdetails #goodsname{
        width: 72%;
        float: left;
    }
    #shopgoodsdetails #price{
        width: 8%;
        float:right;
    }
</style>
