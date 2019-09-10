<template>
    <div class="set">
        <div class="setBack">
            <div class="setjiantou">
                <img src="../../assets/img/setimg/tou.png" alt="jiantou" @click="goTo('/person')">
            </div>
            <div class="setWord">设置</div>
        </div>
        <div class="setBody">
            <div class="sethead">
                <img :src="Pic" alt="" class="setpic" ref="headshow">
                <!-- user_Pic -->
                <div class="setheadWord">更改头像</div>
                <input type="file" class="file" @change="head" ref="sethead" name="file" >
                <a href="#">
                    <img src="../../assets/img/setimg/youjiantou.png" alt="">
                </a>
            </div>
            <div class="setempty"></div>
            <div class="setuser">
                <div class="setuser1">用户名</div>
                <!-- user_Name -->
                <input type="text" class="setuser2" ref="name">
            </div>
            <div class="setuser">
                <div class="setuser1">电子邮件</div>
                <!-- user_Email -->
                <input type="text" class="setuser2" ref="email">
            </div>
            <div class="setuser">
                <div class="setuser1">手机号码</div>
                <!-- user_Tel -->
                <input type="text" class="setuser2" ref="phone">
            </div>
        </div>
        <div class="setOk" @click="sure">确认并返回</div>
    </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    return {
      user_Name: '',
      Pic: '',
      user_Email: '',
      user_Tel: '',
      file: ''
    }
  },
  created () {
    this.$http.post('/api/mypage/showUser.action').then(res => {
      this.Pic = res.data.user_Pic
      this.$refs.name.value = res.data.user_Name
      this.$refs.email.value = res.data.user_Email
      this.$refs.phone.value = res.data.user_Tel
      console.log(res)
    })
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    },
    sure: function () {
      this.$http.post('/api/mypage/setUser.action',
        qs.stringify({
          user_Name: this.$refs.name.value,
          user_Email: this.$refs.email.value,
          user_Tel: this.$refs.phone.value,
          user_Pic: this.file.name
        })
      ).then(res => {
        console.log(res)
      })
    },
    head: function () {
      let file = this.$refs.sethead.files[0]
      this.file = file
      this.$refs.headshow.src = URL.createObjectURL(file)
      //   var formdata = new FormData()
      //   formdata.append('file', this.file)
      //   console.log(formdata)
      console.log(this.file)
      //   this.file = formdata
    }
  }
}
</script>
<style scoped>
.file{
    display: block;
    position: absolute;
    width: 50%;
    height: 2rem;
    top: 1.2rem;
    left: 84%;
    opacity: 0;
}
.setBack{
    width: 100%;
    height: 2rem;
    position: relative;
    top:0;
    background-color: rgba(200, 200, 200, 0.6);
}
.setjiantou{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .5rem;
    left: .5rem;
}
.setWord{
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
}
.jiantou{
    width: 1rem;
    height: 1rem;
}
.set{
    width: 100%;
    height: 100%;
}
.setBody{
    width: 100%;
}
.sethead{
    width: 100%;
    height: 4rem;
    position: relative;
    overflow: hidden;
}
.setpic{
    width: 2.666667rem;
    height: 2.666667rem;
    position: absolute;
    top: .666667rem;
    left: .666667rem;
    border-radius: 50%;
}
.setheadWord{
    width: 8rem;
    height: 2.666667rem;
    top: .666667rem;
    position: absolute;
    right: .666667rem;
    line-height: 2.666667rem;
    text-align: center;
}
.sethead a{
    display: block;
    width: 1.333333rem;
    height: 1.333333rem;
    position: absolute;
    top: 1.333333rem;
    right: 0.6rem;
}
a img{
    width: 100%;
    height: 100%;
}
.setempty{
    width: 100%;
    height: 1.333333rem;
    background-color: #f5f5f5;
}
.setuser{
    width: 100%;
    height: 3.2rem;
    position: relative;
    border-bottom: 1px solid #dbdbdb;
}
.setuser1{
    width: 24%;
    height: 2.4rem;
    position: absolute;
    top: .4rem;
    left: .4rem;
    line-height: 2.4rem;
    text-align: center;
}
.setuser2{
    width: 46%;
    height: 2.4rem;
    display: block;
    border: 0;
    position: absolute;
    top: .4rem;
    right: .4rem;
    outline: none;
    line-height: 2.4rem;
    text-align: right;
    overflow: hidden;
}
.setOk{
    width: 60%;
    height: 3.2rem;
    position: fixed;
    bottom: 15%;
    left: 20%;
    border-radius: 1.6rem;
    background-color: #fbcc02;
    line-height: 3.2rem;
    text-align: center;
}
</style>
