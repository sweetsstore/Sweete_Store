<template>
  <div class="personmoney">
    <div class="redBack">
        <div class="redjiantou">
            <img src="../../assets/img/personmoneyimg/tou.png" alt="" class="jiantou" @click="goTo('/person')">
        </div>
        <div class="redWord">红包</div>
    </div>
    <div class="white"></div>
    <div class="redbody">
      <redmoney v-for="(ad,index) in ads" :ad="ads[index]" :key="index" ></redmoney>
    </div>
  </div>
</template>
<script>
import redmoney from './redmoney/redmoney.vue'
export default {
  data () {
    return {
      ads: ''
    }
  },
  props: [],
  components: {
    redmoney
  },
  created () {
    this.$http.post('/api/mypage/getCoupon.action').then(res => {
      this.ads = res.data
    })
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style scoped>
.redBack{
    width: 100%;
    height: 2rem;
    position: relative;
    top:0;
    background-color: rgba(200, 200, 200, 0.6);
}
.redjiantou{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .5rem;
    left: .5rem;
}
.redWord{
    width: 50%;
    height: 1.4rem;
    margin: auto;
    position: absolute;
    top: .3rem;
    left: 25%;
    font-size: .8rem;
    line-height: 1.4rem;
    text-align: center;
}
.white{
  width: 100%;
  height: 0.5rem;
}
.personmoney{
  width: 100%;
}
</style>
