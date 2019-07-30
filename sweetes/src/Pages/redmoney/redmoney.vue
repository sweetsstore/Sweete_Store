<template>
    <div class="redmoney">
        <img src="./img/hongbao1.png" alt="">
        <div class="redbag">
            <div class="redbagbody">
                <span>20</span>
                <p>元</p>
            </div>
            <span class="redstore">米旗蛋糕店</span>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.redmoney{
    width: 90%;
    height: 6rem;
    margin-bottom: 0.5rem;
    background-color: #db3541;
    margin-left: 5%;
    border-radius: 1rem;
    position: relative;
}
img{
    width: 20%;
    height: 4rem;
    margin-top: 1rem;
    margin-left: 1rem;
}
.redbag{
    width: 64%;
    position: absolute;
    height: 5.4rem;
    right: 1rem;
    top: 0.3rem;
}
.redbagbody{
    width: 90%;
    height: 3.8rem;
    color: #ffbcae;
    border-bottom: 1px dashed #ffbcae;
    position: relative;
}
.redbagbody span{
    display: block;
    width: 34%;
    font-size: 2rem;
    line-height: 3.8rem;
    height: 3.8rem;
    position: absolute;
    text-align: center;
}
.redbagbody p{
    display: block;
    width: 66%;
    height: 3.8rem;
    position: absolute;
    right: 0;
    top: 0;
    font-size: .8rem;
    line-height: 3.8rem;
    text-align: left;
}
.redstore{
    display: block;
    height: 1.6rem;
    color: #ffbcae;
    position: absolute;
    display: block;
    font-size: .666667rem;
    line-height: 1.6rem;
}
p{
    position: absolute;
    display: block;
    margin: 0;
}
</style>
