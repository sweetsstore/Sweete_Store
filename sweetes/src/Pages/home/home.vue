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
    <div class="banner clearfloat">
        <a href="#"><img src="./img/1.jpg" alt="" class="banner-slide1"></a>
        <a href="#"><img src="./img/2.jpg" alt="" class="banner-slide2"></a>
        <a href="#"><img src="./img/3.jpg" alt="" class="banner-slide3"></a>
        <a href="#"><img src="./img/6.jpg" alt="" class="banner-slide4"></a>
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
    <!-- <div class="left-right">
            <button id="prev"><img src="./img/left.png"></button>
            <button id="next"><img src="./img/right.png"></button>
    </div> -->
  </section>
  <footer></footer>
</div>
</template>
<script>
export default {
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
    height: 14rem;
    margin-top: 7%;
    margin-left: 2%;
    margin-right: 2%;
}
.banner{
    width: 100%;
    height: 14rem;
    position: relative;
}
.banner a{
    display: block;
    width: 100%;
    height: 14rem;
}
.banner-slide1,.banner-slide2,.banner-slide3,.banner-slide4 {
    width: 100%;
    height: 14rem;
    border-radius: 5%;
    position: absolute;
}
.banner-slide2{
    left: 120%;
    top: 0;
    /* display: none; */
}
.banner-slide3{
    left: 200%;
    top: 0;
    /* display: none; */
 }
 .banner-slide4{
    left: 300%;
    top: 0;
    /* display: none; */
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
