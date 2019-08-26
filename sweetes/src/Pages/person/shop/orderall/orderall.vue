<template>
    <div class="orderall">
        <img :src=gg.goods_Picture alt="">
        <div class="order-body">
            <div class="goodsname">{{gg.goods_Name}}</div>
            <div class="goodsnum">数量：{{gg.goods_Num}}</div>
            <div class="goodsmoney">￥{{gg.goods_Price}}</div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    gg: ''
  },
  data () {
    return {
      money: 25,
      goodsNum: 3
    }
  }
}
</script>
<style scoped>
.orderall{
    width: 100%;
    height: 5rem;
    position: relative;
    border-bottom: 1px solid #ededed;
}
.orderall img{
    width: 30%;
    height: 4rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
}
.order-body{
    width: 66%;
    height: 4rem;
    position: absolute;
    top: 0.4rem;
    right: 0.2rem;
}
.goodsname{
    width: 70%;
    height: 2rem;
    font-size: 1rem;
    line-height: 2rem;
    position: absolute;
    top: 0;
    left: 4%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.goodsnum{
    width: 26%;
    height: 2rem;
    font-size: .8rem;
    position: absolute;
    text-align: center;
    line-height: 2rem;
    top: 0;
    right: 0;
    color: #a1a1a1;
}
.goodsmoney{
    width: 30%;
    height: 2rem;
    font-size: .9rem;
    line-height: 2rem;
    position: absolute;
    bottom: 0;
    left: 4%;
    color: red;
}
</style>
