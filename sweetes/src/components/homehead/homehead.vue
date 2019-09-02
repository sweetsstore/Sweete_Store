<template>
    <header>
    <img src="../../assets/homeimg/默认头像.png" id="pic">
    <div id="search">
        <input type="text" ref="message">
        <button @click="send()"><img src="../../assets/homeimg/search.png"></button>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      message: '',
      msg: ''
    }
  },
  propo: ['user'],
  created () {
    console.log(this.user.user_Pic)
  },
  methods: {
    send: function () {
      if (this.$refs.message.value) {
        this.msg = this.$refs.message.value
        this.$router.push({
          path: '/goodsshow',
          query: {str: this.msg}
        })
      }
    }
  }
}
</script>
<style scoped="scoped">
header{
    width:100%;
    height:3.7rem;
    position:relative;
    left:0;
    top:0.5rem;
}
#pic{
    margin-left:0.5rem;
    display:inline-block;
}
#search{
    height: 3.6rem;
    width:75%;
    position:absolute;
    left:23%;
    top:0;
}
#search input{
    display:inline-block;
    height:1.5rem;
    width: 100%;
    border-radius: 2rem;
    background-color: whitesmoke;
    border:.2px black solid;
    margin-top:1rem;
}
#search button{
    height:.5rem;
    border:none;
    background-color:transparent;
    position:absolute;
    left:88%;
    top:1rem;
}
</style>
