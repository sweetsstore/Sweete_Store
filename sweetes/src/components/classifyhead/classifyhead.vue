<template>
    <header>
      <button @click="go()">
        <img src="../../assets/classifyimg/返回.png" alt="图片走丢了~">
      </button>
        {{title}}
    </header>
</template>
<script>
export default {
  data () {
    return {
      title: '商品分类'
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
    display:block;
    width:100%;
    margin-top:1rem;
    padding: 0;
    font-size:130%;
    font-weight:bold;
    text-align: center;
    position:relative;
}
header button{
    display:inline-block;
    border:none;
    background-color:transparent;
    outline:none;
    position: absolute;
    left:1rem;
    top:0;
    margin:0;
    padding:0;
}
</style>
