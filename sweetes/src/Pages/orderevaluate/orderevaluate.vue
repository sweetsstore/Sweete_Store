<template>
    <div class="orderevaluate">
        <img src="./orderevaluateimg/3.jpg" alt="">
        <div class="order-body">
            <span>巧克力蛋糕i减哦i说的就是如果梵蒂冈地方官第个</span>
            <div class="order-money">
                <span>￥<p>25</p></span>
                <div class="box">评价</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.orderevaluate{
    width: 86%;
    height: 5rem;
    position: relative;
    left: 7%;
    margin-bottom: .8rem;
}
.orderevaluate img{
    width: 30%;
    height: 4rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
}
.order-body{
    width: 60%;
    height: 4rem;
    position: absolute;
    top: 0.4rem;
    right: 0.5rem;
}
span{
    display: block;
    height: 2rem;
    font-size: .746667rem;
    line-height: 2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.order-money{
    height: 2rem;
    font-size:.746667rem;
    line-height: 2rem;
    color: red;
    margin: 0;
}
p{
    display: inline;
    margin: 0;
}
.box{
    width: 32%;
    height: 1.4rem;
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
    font-size: .746667rem;
    line-height: 1.4rem;
    text-align: center;
    border-radius: 0.7rem;
    background-color: #ffce39;
}
</style>
