<template>
    <div id="app">
        <div id="gouwuche">购物车</div>
        <div id="body">
            <div class="shopping">
                <p id="shopname">纪梵希旗舰店</p>
                <div>
                    <div id="goodspic"></div>
                    <div id="goodsname"></div>
                    <span id="price"></span>
                    <div>
                        <input type="button" value="-" />
                        <strong>0</strong>
                        <input type="button" value="+" />
                    </div>
                </div>
            </div>
        </div>
        <div><hr id="hrleft"><div id="yourwangpic"></div>
        <div id="yourwant">按你所需</div><hr id="hrright"></div>
        <div id="shoppingcart_bottom_nav"><div id="price"><span id='total'>合计：</span><span id="totalprice"><strong></strong>￥375.96</span></div><button id="settlement" @click="gooders">结算</button></div><hr id="hr">
 </div>
</template>
<script>
export default {
}
</script>

<style scoped>
    *{
        margin:0;
    }
    #gouwuche{
        width: 98%;
        height:8%;
        display: flex;
        top: 0;
        color: black;
        background-color: white;
        font-size: 18px;
        float: left;
        vertical-align: center;
        padding: 1%;
    }
    #body{
        width: 100%;
        background: -webkit-linear-gradient(#ddd,#fff);
        margin: 0;
    }
    .shopping{
        width: 100%;
        margin: 2% 2% 2% 2%;
        background-color: white;
        padding: 0;
    }
    #shopname{
        width: 96%;
        font-size: 18px;
        height: 20px;
        margin: 0;
        padding: 0;
    }
    #hrleft{
        width: 35%;
        height: 1%;
        display: inline-block;
    }
    #yourwangpic{
        width: 7%;
        height: 10px;
        /*background: url(./img/yourwant); */
        display: inline-block;
    }
    #yourwant{
        width: 20%;
        text-align: center;
        font-size: 15px;
        height: 3%;
        display: inline-block;
        margin:0;
    }
    #hrright{
        width:35%;
        height: auto;
        display: inline-block;
        margin: 0;
    }
    #shoppingcart_bottom_nav{
        width: 100%;
        height: 8%;
        position: fixed;
        bottom: 8%;
        background-color: white;
        vertical-align: middle;
    }
    #price{
        position: absolute;
        right: 40%;
    }
    #total{
        position: fixed;
        right: 50%;
        width: 13%;
        color: 18px;
        bottom: 11%;
    }
    #totalprice{
        color: black;
        font-size: 15px;
        float: right;
        position: fixed;
        right: 30%;
        vertical-align: middle;
        padding: 2% 0 0 0;
        color: red;
        width: 20%;
        bottom: 11%;
    }
    #settlement{
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
