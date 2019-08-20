<template>
    <div class="zhuce">
        <div class="zhuceBack">
            <div class="zhucejiantou">
                <img src="../../assets/img/zhuceimg/tou.png" alt="" class="jiantou" @click="goTo('/regist')">
            </div>
            <div class="zhuceWord">注册</div>
        </div>
        <img src="../../assets/img/zhuceimg/zhucebody.png" alt="">
        <input type="text" placeholder=" 请输入用户名" ref="name">
        <input type="text" placeholder=" 请输入手机号码" ref="phone" @click="hide">
        <p v-show="set">手机号格式错误</p>
        <input type="password" placeholder=" 请输入你的密码" ref="password">
        <div class="bottom" @click="isphone">注册</div>
    </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    return {
      set: false,
      user_Name: '',
      user_Email: '',
      user_Password: '',
      user_Tel: ''
    }
  },
  methods: {
    isphone () {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!myreg.test(this.$refs.phone.value)) {
        this.set = true
      } else {
        this.set = false
        this.user_Name = this.$refs.name.value
        this.user_Password = this.$refs.password.value
        this.user_Tel = this.$refs.phone.value
        // this.$router.push('/')
        this.$http.post('/api/register.action',
          qs.stringify({
            user_Name: this.user_Name,
            user_Email: this.user_Email,
            user_Password: this.user_Password,
            user_Tel: this.user_Tel
          })
        ).then(res => {
          console.log(res)
        })
      }
    },
    hide () {
      this.set = false
    },
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style scoped>
.zhuceBack{
    width: 100%;
    height: 2rem;
    position: relative;
    top:0;
    background-color: rgba(200, 200, 200, 0.6);
}
.zhucejiantou{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .5rem;
    left: .5rem;
}
.zhuceWord{
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
img{
    width: 100%;
    height: 10%;
    margin: auto;
}
.jiantou{
    width: 1rem;
    height: 1rem;
}
.zhuce{
    width: 100%;
    height: 100%;
    /* background: url("./img/zhuceHead1.png") repeat-x; */
}
.bottom{
    width: 50%;
    height: 10%;
    margin: 15% auto;
    border-radius: 1.333333rem;
    background-color: #fbcc02;
    line-height: 2.666667rem;
    text-align: center;
}
input,.send1{
    width: 70%;
    height: 10%;
    padding: .4rem;
    margin-left: 15%;
    margin-top: 8%;
    outline: none;
    border-bottom: 1px solid #dbdbdb;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    background-color: rgba(200, 200, 200, 0.5);
}
.send{
    height: 10%;
    position: relative;
}
.send1{
    width: 40%;
    height: 100%;
    border: 1px solid #dbdbdb;
}
.send2{
    width: 28%;
    height: 100%;
    padding: 0;
    border: 0;
    padding:.4rem;
    background-color: rgba(200, 200, 200, 0.5);
}
p{
  margin: 0;
  display: block;
  position: absolute;
  left: 15%;
  font-size: .8rem;
  color: red;
}
</style>
