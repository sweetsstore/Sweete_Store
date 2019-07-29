<template>
    <div class="order-all">
        <img src="./img/2.jpg" alt="">
        <div class="order-body">
            <span>草莓夹心蛋糕客家酿豆腐深刻的女的看女生看得出</span>
            <span class="order-money">￥20</span>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.order-all{
    width: 86%;
    height: 4rem;
    position: relative;
    left: 7%;
    margin-bottom: .8rem;
    background-color: white;
}
.order-all img{
    width: 30%;
    height: 3.2rem;
    position: absolute;
    top: 0.4rem;
    left: 0.5rem;
}
.order-body{
    width: 60%;
    height: 3.2rem;
    position: absolute;
    /* background-color: antiquewhite; */
    top: 0.4rem;
    right: 0.5rem;
}
span{
    display: block;
    height: 1.6rem;
    font-size: .72rem;
    line-height: 1.6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.order-money{
    height: 1.6rem;
    font-size:.72rem;
    line-height: 1.6rem;
    color: red;
    margin: 0;
}
p{
    margin: 0;
}
</style>
