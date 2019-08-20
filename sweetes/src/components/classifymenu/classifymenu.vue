<template>
    <div class="main">
        <ul class="list menu-wrapper" ref="menuwrapper">
        <router-link v-for="(item, index) in items"  :key="index" tag="li" :to="item.url" >{{item.name}}</router-link>
        </ul>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      items:
      [
        {url: '/goodsshow/westclass', name: '西餐'},
        {url: '/goodsshow/eastclass', name: '中餐'},
        {url: '/goodsshow/cafeclass', name: '咖啡'},
        {url: '/goodsshow/wineclass', name: '酒'},
        {url: '/goodsshow/snackclass', name: '零食'},
        {url: '/goodsshow/fishclass', name: '生鲜'},
        {url: '/goodsshow/fruitclass', name: '水果'},
        {url: '/goodsshow/teaclass', name: '茗茶'},
        {url: '/goodsshow/thingclass', name: '保健品'},
        {url: '/goodsshow/cakeclass', name: '蛋糕'}
      ]
    }
  },
  methods: {
    _initScroll () {
      this.meunScroll = new BScroll(this.$refs.menuwrapper, {})
    }
  }
}
</script>
<style scoped>
.main{
    position:relative;
    top:1.8rem;
    left:0;
}
.list{
    width:26%;
    height:35rem;
    list-style:none;
    overflow:hidden;
}
.list li{
    width:100%;
    height:4rem;
    float:left;
    text-align:center;
    line-height:4rem;
    color:black;
    background-color:#f2f2f2;
    border-bottom:white 1px solid;
}
</style>
