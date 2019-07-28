<template>

<div>
  <header>
    <img src="./img/默认头像.png" id="pic">
    <form id="search" action="#" method="GET">
        <input type="text" >
        <button><img src="./img/search.png" alt="" srcset=""></button>
    </form>
  </header>
<section>
    <div class="c_banner">
        <div class="banner">
            <a href="#"><img src="./img/1.jpg" alt="" class="banner-slide1"></a>
            <a href="#"><img src="./img/2.jpg" alt="" class="banner-slide2"></a>
            <a href="#"><img src="./img/3.jpg" alt="" class="banner-slide3"></a>
            <a href="#"><img src="./img/6.jpg" alt="" class="banner-slide4"></a>
        </div>
        <div class="left-right">
                <button id="prev"><img src="./img/left.png"></button>
                <button id="next"><img src="./img/right.png"></button>
        </div>
        <div class="point">
            <ul>
                <li pointimg="0"></li>
                <li pointimg="1"></li>
                <li pointimg="2"></li>
                <li pointimg="3"></li>
            </ul>
        </div>
    </div>

    <div class="dot">
        <a href="#"><img src="./img/cha.png" alt=""></a>
        <a href="#"><img src="./img/liwu.png" alt=""></a>
        <a href="#"><img src="./img/meijiu.png" alt=""></a>
        <a href="#"><img src="./img/meishi.png" alt=""></a>
        <a href="#"><img src="./img/miaosha.png" alt=""></a>
    </div>
    <div class="dots">
        <span>品好茶</span>
        <span>寻好物</span>
        <span>挑美酒</span>
        <span>尝美食</span>
        <span>去秒杀</span>
    </div>
  </section>
  <footer></footer>
</div>
</template>
<script>
export default {
//     var time=null;
// var nextImg=0;
// var ImgLength=$(".c_banner .banner a img").length;
//  $(".c_banner .point ul li[pointimg"+nextImg+"]").css("background-color","white");

}

</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
header{
    height: 4.3rem;
    width:100%;
    position:relative;
}
#pic{
    position:absolute;
    left:0.5rem;
    top:.6rem;
    display:inline-block;
}
#search{
    height: 4.3rem;
    width:100%;
    position:absolute;
}
#search input{
    height:1.2rem;
    width: 60%;
    border-radius: 2rem;
    background-color:white;
    border:.2px black solid;
    position:absolute;
    left:6rem;
    top:2.6rem;
}
#search button{
    border:none;
    padding:0;
    position:absolute;
    top:1.5rem;
    right:.1rem;
    background-color:transparent;
}
section{
    height:20rem;
}
.c_banner{
    width: 100%;
    height: 14rem;
    position: relative;
    top:1rem;
}
.c_banner .banner a{
    display:block;
    position:absolute;
    display:none;
}
.c_banner .banner a:nth-child(1){
    display:block;
    position:relative;
}
.c_banner .banner a img{
    width:100%;
    height:14rem;
    opacity:1;
    border-radius:0.5rem;
}
.c_banner .left-right button{
    padding: .333333rem .133333rem;
    position:absolute;
    top: 38%;
    margin-top: -0.706667rem;
    background-color: #000000;
    opacity: 0.3;
    border-radius:0.5rem;
    z-index:1;
}
#prev{
    left:0;
}
#next{
    right:0;
}
.c_banner .point{
    width:100%;
    position:absolute;
    bottom: .266667rem;
}
.c_banner .point ul{
    list-style:none;
}
.c_banner .point ul li{
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    display: inline-block;
    background-color: black;
    opacity: 0.7;
    z-index:10;
    margin-left: .8rem;
}
.c_banner .point ul li:nth-child(1){
    margin-left:35%;
}
.dot{
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:2rem;
    margin-top:10%;
}
.dots{
    display:flex;
    align-items:center;
    justify-content:space-around;
    margin-top:2%;
}
.dots span{
    display:inline-block;
}
.dot a{
    display:inline-block;
    height:2rem;
    width: 2rem;
}
.dot a img{
    height:2rem;
    width: 2rem;
}

</style>
