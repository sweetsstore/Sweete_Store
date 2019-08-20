<template>
    <div class="collect">
        <img src="../../assets/img/collectimg/4.jpg" alt="">
        <!-- goods_Picture -->
        <div class="collectbody">
            <p>{{goods_Name}}</p>
            <!-- goods_Name -->
            <div>
                <span>￥{{goods_Price}}</span>
                <!-- goods_Price -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      goods_Name: '艾菲勒法式马卡龙甜点24枚西式糕点心小蛋糕甜品零食品送女友礼盒',
      goods_Price: 20
    }
  }
}
</script>
<style scoped>
.collect{
    width: 100%;
    height: 7rem;
    position: relative;
}
img{
    width:30%;
    height:6rem;
    position: absolute;
    border-radius: 0.5rem;
    top: 0.5rem;
    left: 0.5rem;
}
.collectbody{
    width: 60%;
    height: 6rem;
    position: absolute;
    right: 4%;
    top: 0.5rem;
}
.collectbody p{
    margin: 0;
    width: 100%;
    height: 3rem;
    overflow: hidden;
    font-size: .8rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 3rem;
    text-align: center;
}
.collectbody div{
    width: 100%;
    height: 3rem;
    position: absolute;
    bottom: 0;
    color: red;
    text-align: left;
    line-height: 4rem;
}
.collectbody span{
    color: red;
}
</style>
