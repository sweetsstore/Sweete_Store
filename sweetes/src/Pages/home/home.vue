<template>
<div class="homes">
<home-head></home-head>
<home-chart></home-chart>
<home-nav></home-nav>
<home-new></home-new>
<home-footer></home-footer>
</div>
</template>
<script>
import homehead from '../../components/homehead/homehead'
import homenav from '../../components/homenav/homenav'
import homefooter from '../../components/homefooter/homefooter'
import homechart from '../../components/homechart/homechart'
import homenew from '../../components/homenew/homenew'
export default {
  components: {
    'home-head': homehead,
    'home-nav': homenav,
    'home-footer': homefooter,
    'home-chart': homechart,
    'home-new': homenew
  }
}
</script>
<style scoped="scoped">
*{
    margin:0;
    padding:0;
}
.homes{
    height:0;
    margin:0;
    padding:0;
}
/* .c_banner{
    width: 100%;
    height: 14rem;
    margin-top:2rem;
}
.c_banner .banner a{
    display:block;
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
} */
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
</style>
