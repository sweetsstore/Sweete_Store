<template>
<div class="homes">
  <header>
    <img src="./homeimg/默认头像.png" id="pic">
    <form id="search" action="#" method="GET">
        <input type="text" >
        <button><img src="./homeimg/search.png" alt="" srcset=""></button>
    </form>
  </header>
<section>
    <div class="c_banner">
        <div class="banner">
            <a href="#"><img src="./homeimg/1.jpg" alt="" class="banner-slide1"></a>
            <a href="#"><img src="./homeimg/2.jpg" alt="" class="banner-slide2"></a>
            <a href="#"><img src="./homeimg/3.jpg" alt="" class="banner-slide3"></a>
            <a href="#"><img src="./homeimg/6.jpg" alt="" class="banner-slide4"></a>
        </div>
        <!-- <div class="left-right">
                <button id="prev"><img src="./homeimg/left.png"></button>
                <button id="next"><img src="./homeimg/right.png"></button>
        </div> -->
        <!-- <div class="point">
            <ul>
                <li pointimg="0"></li>
                <li pointimg="1"></li>
                <li pointimg="2"></li>
                <li pointimg="3"></li>
            </ul>
        </div>-->
    </div>

    <div class="dot">
        <a href="#"><img src="./homeimg/cha.png" alt=""></a>
        <a href="#"><img src="./homeimg/meijiu.png" alt=""></a>
        <a href="#"><img src="./homeimg/meishi.png" alt=""></a>
        <a href="#"><img src="./homeimg/miaosha.png" alt=""></a>
    </div>
    <div class="dots">
        <span>品好茶</span>
        <span>挑美酒</span>
        <span>尝美食</span>
        <span>去秒杀</span>
    </div>
</section>
     <p class="new">今日新品</p>
  <footer>
      <ul >
          <li>
              <a href="#">
                  <img src="./homeimg/1small.jpg" alt="">
                  <p class="newname">草莓味红丝绒蛋糕</p>
                  <p class="newmoney">￥20/份</p>
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="./homeimg/2small.jpg" alt="">
                  <p class="newname">橙味流心蛋糕</p>
                  <p class="newmoney">￥30/份</p>
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="./homeimg/8small.jpg" alt="">
                  <p class="newname">荔枝味夹心蛋糕</p>
                  <p class="newmoney">￥40/份</p>
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="./homeimg/13small.jpg" alt="">
                  <p class="newname">草莓味软蛋糕</p>
                  <p class="newmoney">￥45/份</p>
              </a>
          </li>
      </ul>
  </footer>
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
.homes{
    height:0;
    margin:0;
    padding:0;
}
header{
    width:100%;
    position:relative;
    height:3.7rem;
}
#pic{
    margin-left:0.5rem;
    display:inline-block;
}
#search{
    height: 3.6rem;
    width:75%;
    position:absolute;
    left:5rem;
    top:0;
}
#search input{
    display:inline-block;
    height:1.5rem;
    width: 100%;
    border-radius: 2rem;
    background-color:white;
    border:.2px black solid;
    margin-top:1rem;
}
#search button{
    height:.5rem;
    border:none;
    background-color:transparent;
    position:absolute;
    left:16rem;
    top:1rem;
}
section{
    width:100%;
    /* position: relative;
    top:.8rem; */
    margin-top:2rem;
}
.c_banner{
    width: 100%;
    height: 14rem;
}
.c_banner .banner a{
    display:block;
    /* position:absolute; */
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
/* .c_banner .left-right button{
    padding: .333333rem .133333rem;
    position:absolute;
    top: 38%;
    margin-top: -0.706667rem;
    background-color: #000000;
    opacity: 0.3;
    border-radius:0.5rem;
    z-index:1;
} */
/* #prev{
    left:0;
} */
/* #next{
    right:0;
} */
/* .c_banner .point{
    width:100%;
    position:absolute;
    bottom: .266667rem;
} */
/* .c_banner .point ul{
    list-style:none;
} */
/* .c_banner .point ul li{
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    display: inline-block;
    background-color: black;
    opacity: 0.7;
    z-index:10;
    margin-left: .8rem;
} */
/* .c_banner .point ul li:nth-child(1){
    margin-left:35%;
} */
.dot{
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:2rem;
    margin-top:2rem;
}
.dots{
    display:flex;
    align-items:center;
    justify-content:space-around;
    margin-top:.1rem;
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
.new{
    font-size: 120%;
    font-weight:bold;
    margin-top:2.5rem;
    margin-left:.5rem;
}
footer{
    width:100%;
    height:8.3rem;
    margin-top:1.2rem;
}
footer ul{
    width:100%;
    height:8.3rem;
    list-style:none;
    white-space:nowrap;
    overflow-x:auto;
    overflow-y:hidden;
}
footer li {
    width:35%;
    margin-left:.5rem;
    display:inline-block;
}
footer a{
    display:block;
    width:100%;
    height:100%;
    text-decoration:none;
}
footer li a img{
    width:100%;
    height:5.5rem;
    border-radius:.5rem;
}
footer li a .newname{
    margin-top:.2rem;
    margin-bottom:.2rem;
    font-size:90%;
    text-decoration:none;
    color:black;
}
footer li a .newmoney{
    font-size:90%;
    text-decoration:none;
    color:#f5a9a9;
}
</style>
