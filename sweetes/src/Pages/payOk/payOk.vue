<template>
    <div class="payOk">
        <div class="ok">
            <img src="../../assets/img/payOkimg/zhuceHead.png" alt="">
        </div>
        <div class="okWord">
            <b>付款成功</b>
        </div>
        <div class="okJump" @click="goTo('/person')">返回</div>
    </div>
</template>
<script>
export default {
  methods: {
    goTo  (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style scoped>
.payOk{
    width: 100%;
    height: 100%;
}
.ok{
    width: 8rem;
    height: 8rem;
    margin: auto;
    margin-top: 30%;
}
.ok img{
    width: 8rem;
    height: 8rem;
}
.okWord{
    width: 60%;
    height: 2.666667rem;
    margin: 20% auto;
    font-size: 1.333333rem;
    text-align: center;
    line-height: 2.666667rem;
}
.okJump{
    width: 70%;
    height: 2.666667rem;
    background-color: #fbcc02;
    margin: 20% auto;
    border-radius: 1.333333rem;
    font-size: 1.333333rem;
    text-align: center;
    line-height: 2.666667rem;
}
</style>
