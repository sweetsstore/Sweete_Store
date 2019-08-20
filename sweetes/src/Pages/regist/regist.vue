<template>
<div class="regist">
    <div class="head">
        <img src="../../assets/img/registimg/registerHead.png" alt="图片丢了">
    </div>
    <div class="body">
        <div class="phone">
            <span>用户昵称 :</span>
            <input type="text" name="username" placeholder="  请输入用户名" ref="name" @click="name">
        </div>
        <div class="password">
            <span>登录密码 :</span>
            <input type="password" password="password" placeholder="  请输入登录密码" ref="password" @click="password">
        </div>
        <a href="#" class="yemian1" @click="goTo('/password')">忘记密码？</a>
    </div>
    <p class="no" v-show="no">用户名或密码出错</p>
    <div class="denglu" @click="regist()">登录</div>
    <div class="zhuce">
        <p>还不是我们的会员？<a href="#" class="yemian2" @click="goTo('/zhuce')">去注册</a></p>
    </div>
</div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    return {
      user_Name: '',
      user_Password: '',
      no: false
    }
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    },
    name () {
      this.no = false
    },
    password () {
      this.no = false
    },
    regist () {
      this.user_Name = this.$refs.name.value
      this.user_Password = this.$refs.password.value
      this.$http.post('/api/login.action',
        qs.stringify({
          user_Name: this.user_Name,
          user_Password: this.user_Password
        })
      ).then(res => {
        if (res.data === 'YES') {
          this.$router.push('/person')
        } else {
          this.no = true
        }
      })
    }
    // logincheck: function () {
    //   axios({
    //   })
    // fetch({
    //     url: "",
    //     method: "post",
    //     header:new Header({

    //     }),
    //     body: 'username=${this.username}&userpass=${this.userpass}'
    // })
    // .then((res)=>{
    //     return res.text();
    // })
    // .then((data)=>{
    //     if(this.data){}
    // })
    // }
  }
}
</script>
<style scoped>
.head{
    height: 40%;
}
.head img{
    width: 100%;
    height: 40%;
}
.body{
    width: 100%;
    height: 40%;
}
span{
    color: #6d6d6d;
    margin-left: 8%;
    font-size: .8rem;
}
input{
    margin-left: 4%;
    border-bottom: 1px solid #dbdbdb;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    outline: none;
    width: 50%;
    font-size: .8rem;
}
.phone{
    width: 88%;
    height: 20%;
    margin-top: 20%;
    margin-left: 6%;
}
.password{
    width: 88%;
    height: 20%;
    margin-top: 10%;
    margin-left: 6%;
}
.yemian1{
    color: red;
    font-size: 12%;
    position: relative;
    left: 70%;
    text-decoration:none;
}
p{
    font-size: 10%;
    color: #b5b5b5;
    line-height: 20%;
    text-align: center;
}
.yemian2{
    color: red;
    font-size: 12%;
    text-decoration:none;
}
.denglu{
    width: 70%;
    height: 10%;
    background-color: #ffce39;
    border-radius: 1.333333rem;
    color: white;
    text-align: center;
    font-size: .8rem;
    line-height: 2.133333rem;
    margin-left: 15%;
    margin-top: 14%;
}
.zhuce{
    width: 50%;
    height: 20%;
    margin-left: 30%;
}
.no{
    margin: 0;
    position: absolute;
    left: 14%;
    font-size: .8rem;
    color: red;
}
</style>
