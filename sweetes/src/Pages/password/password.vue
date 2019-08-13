<template>
    <div class="password">
        <div class="forget">
            <div>
                <img src="./img/tou.png" alt="" class="jiantou"  @click="goTo('/regist')">
            </div>
            <div class="forgetWord">忘记密码</div>
        </div>
        <div class="forgetAll">
            <div class="forgetEmpty"></div>
            <input type="text" placeholder=" 请输入手机号码">
            <div class="forgetsend">
                <input type="text" placeholder=" 请输入验证码" class="Fsend1">
                <button class="Fsend2" ref="Fsend2" @click="send">{{time2}}</button>
            </div>
            <input type="text" placeholder=" 请输入你的新密码">
            <input type="text" placeholder=" 请再次输入密码">
            <div class="Forgetbottom" @click="goTo('/regist')">确认</div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      time2: '发送'
    }
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    },
    send: function () {
      var t = 59
      var this2 = this
      this2.time2 = t
      this2.$refs.Fsend2.disabled = true
      var timer = window.setInterval(function () {
        this2.time2 = --t
        console.log(this2.time2)
        if (this2.time2 === 1) {
          this2.time2 = '发送'
          window.clearTimeout(timer)
          this2.$refs.Fsend2.disabled = false
        }
      }, 1000)
    }
  }
}
</script>
<style scoped>
.password{
    width: 100%;
    height: 100%;
    position: fixed;
    /* background-color: #c7b9b0; */
    background: url("img/passwordBG.png") no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
}
.forget{
    width: 100%;
    height: 2rem;
    position: relative;
    top:0;
    background:rgba(255, 255, 255, 0.8);
}
.forget div{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .5rem;
    left: .5rem;
}
.forget .forgetWord{
    width: 50%;
    height: 1.4rem;
    position: absolute;
    top: .3rem;
    left: 25%;
    font-size: .8rem;
    line-height: 1.4rem;
    text-align: center;
}
.forgetAll{
    width: 80%;
    height: 70%;
    background:rgba(255, 255, 255, 0.6);
    margin: 20% auto;
}
.forgetEmpty{
    width: 100%;
    height: 2.2rem;
}
.jiantou{
    width: 1rem;
    height: 1rem;
}
.Forgetbottom{
    width: 50%;
    height: 2rem;
    margin-top: 15%;
    margin-left: 25%;
    border-radius: 1.333333rem;
    background-color: #dbdbdb;
    line-height: 2rem;
    text-align: center;
}
input,.Fsend1{
    width: 70%;
    height: 1.333333rem;
    padding: .4rem;
    margin-left: 15%;
    margin-top: 10%;
    outline: none;
    border-bottom: 1px solid #dbdbdb;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    background-color: rgba(200, 200, 200, 0.6);
}
.Forgetsend{
    width: 70%;
    height: 1.333333rem;
}
.Fsend1{
    width: 40%;
}
.Fsend2{
    width: 28%;
    border: 1px solid rgb(200, 200, 200);
    padding:.4rem;
    line-height: 1.333333rem;
    text-align: center;
    background-color: rgb(200, 200, 200);
}
</style>
