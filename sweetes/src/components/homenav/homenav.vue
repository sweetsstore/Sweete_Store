<template>
<div class="home_nav">
    <ul class="dots">
        <li v-for="(item, index) in items" :key="index" :class="{active: Index==index}" @click="change(index)" :keybig="item.big">
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
        {name: '品好茶', url: require('../../assets/homeimg/cha.png'), big: 7},
        {name: '挑美酒', url: require('../../assets/homeimg/meijiu.png'), big: 4},
        {name: '尝美食', url: require('../../assets/homeimg/meishi.png'), big: 2},
        {name: '寻好物', url: require('../../assets/homeimg/liwu.png'), big: 5}
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
ul{
  margin:0;
  padding:0;
}
.home_nav{
    width:100%;
    margin-top:1rem;
}
.dots{
    width:100%;
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
