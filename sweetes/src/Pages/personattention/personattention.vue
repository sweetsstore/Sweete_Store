<template>
    <div class="personattention">
        <div class="attentionBack">
            <div class="attentionjiantou">
                <img src="../../assets/img/personattentionimg/tou.png" alt="" class="jiantou" @click="goTo('/person')">
            </div>
            <div class="attentionWord">关注</div>
        </div>
        <attention v-for="(ad,index) in ads" :ad="ads[index]" :key="index"></attention>
    </div>
</template>
<script>
import attention from './attention/attention.vue'
export default {
  data () {
    return {
      ads: ''
    }
  },
  components: {attention},
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  },
  created () {
    this.$http.post('/api/mypage/getShops.action').then(res => {
      this.ads = res.data
      console.log(res.data)
    })
  }
}
</script>
<style scoped>
.attentionBack{
    width: 100%;
    height: 2rem;
    position: relative;
    top:0;
    background-color: rgba(200, 200, 200, 0.6);
}
.attentionjiantou{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .5rem;
    left: .5rem;
}
.attentionWord{
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
</style>
