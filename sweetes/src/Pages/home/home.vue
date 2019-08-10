<template>
<div class="homes">
<home-head></home-head>
<div class="c_banner">
        <div class="banner">
            <a href="#"><img src="../../assets/homeimg/1.jpg" alt="" class="banner-slide1"></a>
            <a href="#"><img src="../../assets/homeimg/2.jpg" alt="" class="banner-slide2"></a>
            <a href="#"><img src="../../assets/homeimg/3.jpg" alt="" class="banner-slide3"></a>
            <a href="#"><img src="../../assets/homeimg/6.jpg" alt="" class="banner-slide4"></a>
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
<home-nav></home-nav>
     <p class="new">今日新品</p>
  <footer>
      <ul >
          <li>
              <a href="#">
                  <img src="../../assets/homeimg/1small.jpg" alt="">
                  <p class="newname">草莓味红丝绒蛋糕</p>
                  <p class="newmoney">￥20/份</p>
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="../../assets/homeimg/2small.jpg" alt="">
                  <p class="newname">橙味流心蛋糕</p>
                  <p class="newmoney">￥30/份</p>
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="../../assets/homeimg/8small.jpg" alt="">
                  <p class="newname">荔枝味夹心蛋糕</p>
                  <p class="newmoney">￥40/份</p>
              </a>
          </li>
          <li>
              <a href="#">
                  <img src="../../assets/homeimg/13small.jpg" alt="">
                  <p class="newname">草莓味软蛋糕</p>
                  <p class="newmoney">￥45/份</p>
              </a>
          </li>
      </ul>
  </footer>
</div>
</template>
<script>
import homehead from '../../components/homehead/homehead'
import homenav from '../../components/homenav/homenav'
export default {
  components: {
    'home-head': homehead,
    'home-nav': homenav
  }
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
.c_banner{
    width: 100%;
    height: 14rem;
    margin-top:2rem;
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

.new{
    font-size: 120%;
    font-weight:bold;
    margin-top:2rem;
    margin-left:.5rem;
}
footer{
    width:100%;
    height:8.5rem;
    margin-top:1.2rem;
}
footer ul{
    width:100%;
    height:8.5rem;
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
