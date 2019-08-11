<template>
<div class="home_nav">
    <ul class="dots">
        <li v-for="item in items" :key="item.id">
            <img :src="item.url" alt="">
            <span @click="changediv">{{item.name}}</span>
            <div></div>
        </li>
    </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
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
    changediv: function () {
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
.dots li div{
    background-color: #fecf37;
    width:3rem;
    height:.2rem;
    margin-top:0.2rem;
}
</style>
