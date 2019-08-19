<template>
    <header>
      <button @click="go">
        <img src="../../assets/classifyimg/返回.png" alt="图片走丢了~">
      </button>
        <span>{{title}}</span>
    </header>
</template>
<script>
export default {
  data () {
    return {
      title: '热销榜单'
    }
  },
  methods: {
    go: function () {
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>
<style scoped>
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
</style>
