<template>
<div class="regist">
    <div class="head">
        <img src="./img/registerHead.png" alt="图片丢了">
    </div>
    <div class="body">
        <div class="phone">
            <span>手机号码 :</span>
            <input type="text" name="username" placeholder="  请输入手机号码">
        </div>
        <div class="password">
            <span>登录密码 :</span>
            <input type="text" password="password" placeholder="  请输入登录密码">
        </div>
        <a href="#" class="yemian1">忘记密码？</a>
    </div>
    <div class="denglu">登录</div>
    <div class="zhuce">
        <p>还不是我们的会员？<a href="../person/person.vue" class="yemian2">去注册</a></p>
    </div>
</div>
</template>
<script>
export default {
}
</script>
<style scoped>
body{
    width:100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: red;
}
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
    margin-top: 20%;
}
.zhuce{
    width: 40%;
    height: 20%;
    margin-left: 30%;
}
</style>
