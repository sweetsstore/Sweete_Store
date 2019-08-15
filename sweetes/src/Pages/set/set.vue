<template>
    <div class="set">
        <div class="setBack">
            <div class="setjiantou">
                <img src="./img/tou.png" alt="jiantou" @click="goTo('/person')">
            </div>
            <div class="setWord">设置</div>
        </div>
        <div class="setBody">
            <div class="sethead">
                <img src="./img/head.png" alt="" class="setpic">
                <!-- user_Pic -->
                <div class="setheadWord">更改头像</div>
                <input type="file" class="file">
                <a href="#">
                    <img src="./img/youjiantou.png" alt="">
                </a>
            </div>
            <div class="setempty"></div>
            <div class="setuser">
                <div class="setuser1">用户名</div>
                <!-- user_Name -->
                <input type="text" class="setuser2"  value="张金蕊">
            </div>
            <div class="setuser">
                <div class="setuser1">电子邮件</div>
                <!-- user_Email -->
                <input type="text" class="setuser2" value="1365351516@qq.com">
            </div>
            <div class="setuser">
                <div class="setuser1">手机号码</div>
                <!-- user_Tel -->
                <input type="text" class="setuser2" value="18009240559">
            </div>
        </div>
        <div class="setOk" @click="goTo('/person')">确认并返回</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      user_Name: '用户名'
    }
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
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
