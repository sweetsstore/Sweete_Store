<template>
    <div id="app">
        <div class="suojin"></div>
        <ul class="nav">
            <li class="nav1"><span class="iconfont" id="bo1">&#xe606;</span></li>
            <li class="nav1"><span class="iconfont" id="bo2">&#xe61d;</span></li>
            <li class="nav2" id="shopcart">加入购物车</li>
            <li class="nav2">立即购买</li>
        </ul>
    </div>
</template>
<style scoped>
    .suojin{
        width: 100%;
        height: 50px;
        background-color: white;
    }
    .nav{
        width: 100%;
        height: 50px;
        position:fixed;
        bottom: 0;
        left: 0;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .nav .nav1{
        width: 18%;
        float: left;
        height: 50px;
        background-color: white;
        text-align: center;
        bottom: 0;
        vertical-align: middle;
    }
    #bo1{
        font-size: 30px;
        font-weight: 100;
        position: absolute;
        display: inline-block;
        bottom: 10px;
        left: 20px;
    }
    #bo2{
        font-size: 30px;
        font-weight: 100;
        position: absolute;
        display: inline-block;
        bottom: 10px;
        left: 85px;
    }
    .nav .nav2{
        width: 32%;
        float: left;
        height: 40px;
        background-color: rgb(247, 37, 9);
        display: block;
        font-size: 16px;
        font-weight: lighter;
        bottom: 0;
        color: white;
        text-decoration: none;
        text-align: center;
        padding: 14px 0 0 0;
        font-family: serif;
    }
    #shopcart{
        background-color: rgb(247, 184, 67);
    }
    .nav span:hover{
        background:rgb(238, 236, 153);
    }
</style>
