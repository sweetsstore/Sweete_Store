<template>
    <div id="app">
        <div id="return-1"><div id="return"></div><span id="sureorder">确认订单</span><br></div>
        <div id="bodyblock">
            <div id="personmsg">
                <div id="addpic"></div>
                <span id="name">鱼鱼</span>
                <span id="accounttel">13633234491</span><br>
                <span id="accountadd">陕西省西安市长安区郭杜街道西安邮电大学长安校区西区</span>
                <div id="seladd"></div>
            </div>
            <div id="shopgoodsdetails">
                <span id="shopname">纪梵希旗舰店</span>
                <div><div id="goodspic"></div>
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
            margin: 0;
            padding: 0;
            background: -webkit-linear-gradient(#ddd,#fff);
            font-family:sans-serif;
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
        width: 9%;
        height: 25px;
        background: url(./img/fanhui.png);
        display: inline-block;
        z-index: 1;
        margin:1.5% 0 0% 2%;
    }
    #sureorder{
        width: 30%;
        height: 25px;
        font-size: 17px;
        padding:1.5% 0 3% 2%;
        display: inline-block;
        vertical-align: middle;
    }
    #personmsg{
        width: 92%;
        background-color: white;
        padding: 3% 0 3% 0;
        margin: 3% 0% 3% 3%;
        text-align:left;
    }
    addpic{
        background: url(./img/dizhi.png);
        width: 25px;
        height: 25px;
        border-radius: 50%;
        float: left;
    }
    #name{
        font-size: 20px;
        display: inline-block;
    }
    #accounttel{
        width:50%;
        height: auto;
        font-size:10px;
        color: #aaa;
        display: inline-block;
    }
    #accountadd{
        font-size: 16px;
        display: inline;
        width: 70%;
        float: left;
    }
    #seladd{
        width: 10%;
        height: 25px;
        background-image: url(./img/seladd.png);
        float: right;
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
        width: 10%;
        float: left;
    }
    #shopgoodsdetails #goodsname{
        width: 56%;
        float: left;
    }
    #shopgoodsdetails #price{
        width: 8%;
        float:right;
    }
</style>
