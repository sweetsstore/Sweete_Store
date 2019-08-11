<template>
  <div id="show">
    <header>
      <button @click="go">
        <img src="../../assets/goodsshowimg/返回.png" alt="">
      </button>
      <span>{{title}}</span>
    </header>
    <div class="classes">
    <ul :default-active="active" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <router-link index="westclass" tag="li" to="/goodsshow/westclass">西餐</router-link>
    <router-link index="eastclass" tag="li" to="/goodsshow/eastclass">中餐</router-link>
    <router-link index="cafeclass" tag="li" to="/goodsshow/cafeclass">咖啡</router-link>
    <router-link index="wineclass" tag="li" to="/goodsshow/wineclass">酒</router-link>
    <router-link index="snackclass" tag="li" to="/goodsshow/snackclass">零食</router-link>
    <router-link index="fishclass" tag="li" to="/goodsshow/fishclass">生鲜</router-link>
    <router-link index="fruitclass" tag="li" to="/goodsshow/fruitclass">水果</router-link>
    <router-link index="teaclass" tag="li" to="/goodsshow/teaclass">茗茶</router-link>
    <router-link index="thingclass" tag="li" to="/goodsshow/thingclass">保健品</router-link>
    <router-link index="cakeclass" tag="li" to="/goodsshow/cakeclass">蛋糕</router-link>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    active: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      title: '热销榜单'
    }
  },
  methods: {
    go: function () {
      this.$router.push({
        path: '/classify'
      })
    },
    handleSelect: function (key, keyPath) {
      this.$emit('update:active', key)
    }
  }
}
</script>
<style scoped="scoped">
*{
    margin:0;
    padding:0;
}
header{
    width:100%;
    height:1.8rem;
    position:relative;
    left:0;
    top:1rem;
}
header button{
    border:none;
    background-color:transparent;
    width:2%;
    height: 1.8rem;
    position:absolute;
    left: .386667rem;
    top:0;
    outline:none;
}
header span{
    display:inline-block;
    font-size:130%;
    font-weight:bold;
    width:100%;
    line-height:1.8rem;
    text-align: center;
}
.classes{
    width:100%;
    height:2.5rem;
    margin-top:2.5rem;
    position:relative;
    overflow-x:scroll;
}
.classes ul{
    width:300%;
    list-style:none;
}
.classes ul li{
    margin-left: .8rem;
    display:inline-block;
    color:#ccc;
    font-size:120%;
}
.changecolor{
  color:#fecf37;
}
</style>
