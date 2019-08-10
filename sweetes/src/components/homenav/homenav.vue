<template>
<div class="home_nav">
    <div class="dot">
        <a href="#"><img src="../../assets/homeimg/cha.png" alt=""></a>
        <a href="#"><img src="../../assets/homeimg/meijiu.png" alt=""></a>
        <a href="#"><img src="../../assets/homeimg/meishi.png" alt=""></a>
        <a href="#"><img src="../../assets/homeimg/miaosha.png" alt=""></a>
    </div>
    <ul class="dots">
        <li v-for="item in items" :key="item.id">
            <span @click="changediv">{{item}}</span>
            <div></div>
        </li>
    </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      items: ['品好茶', '挑美酒', '尝美食', '去秒杀']
    }
  }
}
</script>
<style>
.home_nav{
    width:100%;
    margin-top:1rem;
}
.dot{
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:2rem;
    margin-top:2rem;
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
.dots{
    display:flex;
    align-items:center;
    justify-content:space-around;
    margin-top:.1rem;
    list-style:none;
}
.dots li span{
    display:inline-block;
}
.dots li div{
    background-color: #fecf37;
    width:3rem;
    height:.2rem;
    margin-top:0.2rem;
}
</style>
