<template>
<div class="home_nav">
    <ul class="dots">
        <li v-for="(item, index) in items" :key="index" :class="{active: Index==index}" @click="change(index)" >
            <img :src="item.url" alt="">
            <span>{{item.name}}</span>
        </li>
    </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      Index: 5,
      items:
      [
        {name: '品好茶', url: require('../../assets/homeimg/cha.png')},
        {name: '挑美酒', url: require('../../assets/homeimg/meijiu.png')},
        {name: '尝美食', url: require('../../assets/homeimg/meishi.png')},
        {name: '去秒杀', url: require('../../assets/homeimg/miaosha.png')}
      ]
    }
  },
  methods: {
    change: function (index) {
      this.Index = index
    }
  }
}
</script>
<style scoped="scoped">
.home_nav{
    width:100%;
    margin-top:1rem;
}
/* .dot{
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
} */
.dots{
    display:flex;
    align-items:center;
    justify-content:space-around;
    margin-top:.1rem;
    list-style:none;
}
.dots li img{
  padding-left:.5rem;
}
.dots li span{
    display:block;
}
.active{
    height:4rem;
    width:3rem;
    border-bottom:#fecf37 .1rem solid;
}
</style>
