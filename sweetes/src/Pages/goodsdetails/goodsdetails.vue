<template>
    <div id="app">
        <div id="pic"></div><!-- 头部轮播图 -->
        <P id="price"><strong>￥:58 </strong></P><!-- {{price}} -->
        <hr width="90%" text-align="center">
        <P id="name">绿色森林：甜美爱恋茶抹草莓芒果夹心蛋糕180g下午茶</P><!-- {{goodsname}} -->
        <div id="discount">
            <div id="redbagreceive">领取</div></div>
        <div id="comment">
            <h5 id="goodscommit">商品评价</h5>
        </div>
        <div id="shop"></div>
        <div id="shopdetails"></div>
        <ul class="nav">
            <li class="nav1"><a href="">店铺</a></li>
            <li class="nav1"><a href="">收藏</a></li>
            <li class="nav2"><a href="">加入购物车</a></li>
            <li class="nav2"><a href="">立即购买</a></li>
        </ul>
    </div>
</template>

<script>
export default {
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
        }
        #price{
            width:92%;
            height:30px;
            font-size:25px;
            color: red;
            display:block;
            margin: 0 0 0 8% ;
        }
        #name{
            width:85%;
            height:50px;
            color:black;
            font-size:20px;
            margin: 0 5% 0 10%;
            line-height:21px;
        }
        #discount{
            width:100%;
            height:120px;
            background:url(img/npc.png);
        }
        #redbagreceive{
            position: relative;
            float: right;
        }
        #comment{
            width: 950%;
            height: 60px;
            margin: 0 0 0 5%;
        }
        #goodscommit{
            width: 100%;
            height: 25px;
            font-size: 25px;
            display: block;
            margin: 0;
        }
        .nav{
            width: 100%;
            position:flxed;
            bottom: 0;
            left: 0;
        }
        .nav .nav1{
            width: 15%;
            float: left;
            background-color: #fab93a;
        }
        .nav .nav2{
            width: 35%;
            float: left;
            background-color: yellow;
            border-radius: 2% 2% 2% 2%;
        }
        .nav a{
            display:block;
            height: 50px;
            color: black;
            background-color:white;
            font-size: 16px;
            text-align: center;
            line-height: 50px;
        }
        .nav a:hover{
            background: #e15646;
            text-decoration: underline;
        }
</style>
