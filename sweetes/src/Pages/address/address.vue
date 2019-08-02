<template>
    <div class="address">
        <div class="body1">
            <div class="name">张金蕊</div>
            <div class="phone">18009240559</div>
            <div class="flag">默认</div>
        </div>
        <div class="body2">
            <div class="area">陕西省西安市长安区西安邮电大学西区</div>
            <div class="delete">删除</div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.address{
    width: 100%;
    height: 4rem;
    margin-top: 1rem;
    position: relative;
}
.body1{
    width: 95%;
    height: 2rem;
    position: relative;
    left: 5%;
}
.name{
    width: 20%;
    height: 2rem;
    font-size: 1.333333rem;
    line-height: 2rem;
    text-align: center;
}
.phone{
    width: 32%;
    height: 2rem;
    position: absolute;
    top: 0;
    left: 24%;
    line-height: 2rem;
    color: #c8c8c8;
}
.flag{
    width: 16%;
    position: absolute;
    top: 0;
    right: 24%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    background-color: #ffebea;
    color: #dd7454;
    /* display: none; */
}
.body2{
    width: 95%;
    height: 2rem;
    position: relative;
    left: 5%;
}
.area{
    width: 76%;
    height: 2rem;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 2rem;
}
.delete{
    width: 18%;
    height: 2rem;
    position: absolute;
    right: 0;
    border-left: 2px solid #f5f5f5;
    color: #bbbbbb;
    line-height: 2rem;
    text-align: center;
}
</style>
