<template>
    <div class="personaddress">
      <div class="addressBack">
          <div class="addressjiantou">
              <img src="../../assets/img/personaddressimg/tou.png" alt="" class="jiantou" @click="goTo('/person')">
          </div>
          <div class="addressWord">收货地址</div>
          <div class="newaddress" @click="goTo('/newaddress')">添加收货地址</div>
      </div>
      <myaddress></myaddress>
      <myaddress></myaddress>
      <myaddress></myaddress>
    </div>
</template>
<script>
import myaddress from '../myaddress/myaddress.vue'
export default {
  components: {
    myaddress
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style scoped>
.addressBack{
    width: 100%;
    height: 2rem;
    position: relative;
    top:0;
    background-color: rgba(200, 200, 200, 0.6);
}
.addressjiantou{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .5rem;
    left: .5rem;
}
.addressWord{
    width: 30%;
    height: 1.4rem;
    margin: auto;
    position: absolute;
    top: .3rem;
    left: 30%;
    font-size: 1.066667rem;
    line-height: 1.4rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.newaddress{
  width: 30%;
  height: 1.4rem;
  position: absolute;
  top: .3rem;
  right: 1%;
  font-size: .8rem;
  line-height: 1.4rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
