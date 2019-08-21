<template>
    <div class="password">
        <div class="forget">
            <div>
                <img src="../../assets/img/passwordimg/tou.png" alt="" class="jiantou"  @click="goTo('/regist')">
            </div>
            <div class="forgetWord">忘记密码</div>
        </div>
        <div class="forgetAll">
            <div class="forgetEmpty"></div>
            <input type="text" placeholder=" 请输入手机号码" ref="phone" @click="input">
            <p v-show="set">手机号格式错误</p>
            <div class="forgetsend">
                <input type="text" placeholder=" 请输入验证码" class="Fsend1" ref="message" @click="input1">
                <button class="Fsend2" ref="Fsend2" @click="send">{{time2}}</button>
            </div>
            <p v-show="show">验证码出错，请重新输入或获取验证码</p>
            <input type="password" placeholder=" 请输入你的新密码" @click="pass" ref="pass1">
            <!-- <input type="password" placeholder=" 请再次输入密码" ref="pass2"> -->
            <div class="Forgetbottom" @click="yes">确认</div>
        </div>
    </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    return {
      time2: '发送',
      set: false,
      phone: '',
      message: '',
      respon: 'NO',
      user_Password: '',
      show: false
    }
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    },
    input: function () {
      this.set = false
      this.show = false
    },
    input1: function () {
      this.show = false
    },
    pass: function () {
      if (this.$refs.message.value) {
        this.phone = this.$refs.phone.value
        this.message = this.$refs.message.value
        this.$http.post('/api/acceptcode.action',
          qs.stringify({
            message: this.message,
            phone: this.phone
          })
        ).then(res => {
          // if (res.data === 'YES') {
          //   this.$router.push('/zhuceOk')
          // }
          this.respon = res.data
        })
      }
    },
    send: function () {
      this.phone = this.$refs.phone.value
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!myreg.test(this.phone)) {
        this.set = true
      } else {
        this.set = false
        this.$http.post('/api/accept.action',
          qs.stringify({
            phone: this.phone
          })
        ).then(res => {
          // if (res.data === 'YES') {
          //   this.$router.push('/zhuceOk')
          // }
        })
        var t = 59
        var this2 = this
        this2.time2 = t
        this2.$refs.Fsend2.disabled = true
        var timer = window.setInterval(function () {
          this2.time2 = --t
          if (this2.time2 === 1) {
            this2.time2 = '发送'
            window.clearTimeout(timer)
            this2.$refs.Fsend2.disabled = 'disabled'
          }
        }, 1000)
      }
    },
    yes: function () {
      this.$refs.Fsend2.disabled = true
      if (this.respon === 'YES') {
        this.$http.post('/api/forgetuser_Password.action',
          qs.stringify({
            user_Tel: this.phone,
            user_Password: this.$refs.pass1.value
          })
        ).then(res => {
          if (res.data === 'updateuser_Password success') {
            this.$router.push('/')
          }
        })
      } else {
        this.show = true
      }
    }
  }
}
</script>
<style scoped>
.password{
    width: 100%;
    height: 100%;
    position: fixed;
    background: url("../../assets/img/passwordimg/passwordBG.png") no-repeat;
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
p{
  margin: 0;
  display: block;
  position: absolute;
  left: 22%;
  font-size: .8rem;
  color: red;
}
</style>
