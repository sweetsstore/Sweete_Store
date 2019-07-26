<template>
    <div id="app">
        <div id="return-1"><div></div><span>确认订单</span><br></div>
        <div id="bodyblock">
            <div id="personmsg">
                <span id="name">鱼鱼</span>
                <span id="accounttel">13633234491</span>
                <span id="address">陕西省西安市长安区郭杜街道西安邮电大学长安校区西区</span>
            </div>
            <div id="shopgoodsdetails">
                <div>
                <div id="shoppic"> </div>
                <div id="shopname">纪梵希旗舰店</div></div>
                <div>
                    <div id="goodspic"></div>
                    <span id="goodsname">绿色森林：甜美爱恋茶抹草莓芒果夹心蛋糕180g下午茶</span>
                    <span id="price">￥:35.5</span>
                </div><div id="buynum"></div>
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
            background-color: lightgray;
    }
    #return-1{
        color: black;
        font-size:15px;
        background-color: white;
        width: 100%;
        height:auto;
        vertical-align: middle;
        margin: 3% 0 3% 5px;
    }
</style>
