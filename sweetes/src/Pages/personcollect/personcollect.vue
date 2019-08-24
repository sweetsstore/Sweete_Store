<template>
    <div class="personcollect">
        <div class="collectBack">
            <div class="collectjiantou">
                <img src="../../assets/img/personcollectimg/tou.png" alt="" class="jiantou" @click="goTo('/person')">
            </div>
            <div class="collectWord">收藏</div>
        </div>
        <collect></collect>
    </div>
</template>
<script>
import collect from './collect/collect.vue'
export default {
  components: {
    collect
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  },
  create () {
    this.$http.post('/api/mypage/getGoods.action').then(res => {
      console.log(res.data)
    })
  }
}
</script>
<style scoped>
.collectBack{
    width: 100%;
    height: 2rem;
    position: relative;
    top:0;
    background-color: rgba(200, 200, 200, 0.6);
}
.collectjiantou{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .5rem;
    left: .5rem;
}
.collectWord{
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
