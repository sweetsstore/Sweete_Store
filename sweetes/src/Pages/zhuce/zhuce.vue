<template>
    <div class="zhuce">
        <div class="zhuceBack">
            <div class="zhucejiantou">
                <img src="./img/tou.png" alt="" class="jiantou">
            </div>
            <div class="zhuceWord">注册</div>
        </div>
        <img src="./img/zhucebody.png" alt="">
        <input type="text" placeholder=" 请输入用户名">
        <input type="text" placeholder=" 请输入手机号码">
        <div class="send">
            <input type="text" placeholder=" 请输入验证码" class="send1">
            <button class="send2">发送
            </button>
        </div>
        <input type="text" placeholder=" 请输入你的密码">
        <div class="bottom">注册</div>
    </div>
</template>

<script>
export default {
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
</style>
