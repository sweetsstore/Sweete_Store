<template id="bottomnav">
    <div><nav>
    <ul class="list-wrap">
      <li data-color="#eccc68" title="主页" class="li1" @click="go1"></li>
      <li data-color="#ff6b81" title="列表" class="li2" @click="go2"></li>
      <li data-color="#7bed9f" title="种草小甜" class="li3" @click="go3"></li>
      <li data-color="#70a1ff" title="购物车" class="li4" @click="go4"></li>
      <li data-color="#dfe4ea" title="用户" class="li5" @click="go5"></li>
    </ul>
  </nav></div>
</template>
<script>
export default {
  name: 'bottomnav',
  methods: {
    go1 () {
      this.$router.push('./home')
    },
    go2 () {
      this.$router.push('./classify')
    },
    go3 () {
      this.$router.push('./recommeding')
    },
    go4 () {
      this.$router.push('./shoppingcart')
    },
    go5 () {
      this.$router.push('./person')
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
nav {
  position: fixed;
  width: 100%;
  bottom: 10%;
}
.list-wrap {
  display: flex;
  width: 100%;
  height: 8%;
  background: #fecf37;
  list-style: none;
  justify-content: space-around;
  bottom: 0;
  position: fixed;
  margin: 0;
}
.list-wrap li {
  cursor: pointer;
  position: relative;
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  margin: 3%;
  text-align: center;
}
.li1{
    background: url(img/shouye.png);
    background-repeat: no-repeat;
}
.li2{
    background: url(img/fenlei.png);
    background-repeat: no-repeat;
}
.li3{
    background: url(img/zhongcao.png);
    background-repeat: no-repeat;
}
.li4{
    background: url(img/gouwuche.png);
    background-repeat: no-repeat;
}
.li5{
    background: url(img/account.png);
    background-repeat: no-repeat;
}
.list-wrap li:before {
  content: "";
  position: absolute;
  height: 80%;
  width: 80%;
  left: 10%;
  top: 10%;
  border-radius: 50%;
  z-index: 0;
  transform: scale(0);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.list-wrap li.active {
  margin-top: -10px;
  margin-bottom: 0;
  padding:0;
}
.list-wrap li.active element {
  color: black;
  z-index: 1;
}
.list-wrap li.active:before {
  transform: scale(1);
}
.list-wrap li:nth-child(1):before {
  background: white;
}
.list-wrap li:nth-child(2):before {
  background: white;
}
.list-wrap li:nth-child(3):before {
  background: white;
}
.list-wrap li:nth-child(4):before {
  background: white;
}
.list-wrap li:nth-child(5):before {
  background: white;}
</style>
