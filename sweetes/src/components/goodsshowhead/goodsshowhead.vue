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
    <router-link v-for="(item,index) in items" :key="index" tag="li" :to="url" :class="{active: Index==index}" @click.native="change(index)">{{item}}</router-link>
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
      title: '热销榜单',
      Index: 0,
      items: ['西餐', '中餐', '咖啡', '酒', '零食', '生鲜', '水果', '茗茶', '保健品', '蛋糕'],
      url: '/goodsshow/goods'
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
    },
    change: function (index) {
      this.Index = index
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
    white-space:nowrap;
    overflow-x:auto;
    overflow-y:hidden;
}
.classes ul{
    width:140%;
    list-style:none;
}
.classes ul li{
    margin-left: .8rem;
    display:inline-block;
    color:#ccc;
    font-size:120%;
}
.active{
    height: 1.8rem;
    border-bottom:#fecf37 .1rem solid;
}
</style>
