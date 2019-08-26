<template>
    <div class="shop">
        <div class="shop-name">
            <div>{{g.shop_Name}}</div>
            <img src="../../../assets/img/shopimg/youjiantou.png" alt="图片走丢了">
        </div>
        <div class="shop-goods">
            <orderall v-for="(g1,index111) in g.goodsVo" :gg="g1" :key="index111"></orderall>
        </div>
        <div></div>
    </div>
</template>
<script>
import orderall from './orderall/orderall.vue'
export default {
  props: {
    g: ''
  },
  data () {
    return {
    }
  },
  components: {orderall}
}
</script>
<style scoped>
.shop{
    width: 100%;
    background-color: white;
    margin: auto;
    border: 1xp solid rebeccapurple;
}
.shop-name{
    width: 100%;
    height: 3rem;
    position: relative;
    line-height: 3rem;
    /* border-bottom: 1px solid #ededed; */
    /* background-color: aquamarine; */
}
.shop-name div{
    position: absolute;
    left: 4%;
    font-size: 1rem;
}
.shop-name img{
    width: 10%;
    height: 1.6rem;
    position: absolute;
    right: 1%;
    top: .7rem;
}
</style>
