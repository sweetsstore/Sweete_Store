<template>
    <div>
        <ul class="cake">
            <li v-for="(item, index) in items" :key="index" @click="go(index)">
                <a href="#"><img :src="item.goods_Picture" alt="图片走丢咯~"></a>
                <p class="name">{{item.goods_Name}}</p>
                <button>购买</button>
                <p class="money">￥{{item.goods_Price}}</p>
                <p class="number">已售：{{item.goods_Num}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ['items'],
  data () {
    return {
      message: ''
    }
  },
  methods: {
    go (index) {
      this.$router.push({
        path: 'goodsdetailtest',
        query: {id: this.items[index].goods_Id}
      })
    }
  }
}
</script>
<style>
ul{
    margin:0;
    padding:0;
}
p{
    margin:0;
    padding:0;
}
.cake{
    width:100%;
    list-style:none;
}
.cake li{
    width:100%;
    height: 5.5rem;
    margin-top: 1.5rem;
    margin-left: .8rem;
    position:relative;
}
.cake li a{
    display:block;
    width:35%;
}
.cake li a img{
    width:35%;
    height: 5.5rem;
    position:absolute;
    border-radius:0.5rem;
    left:0;
    top:0;
}
.cake li .name{
    position:absolute;
    width:60%;
    left:  37%;
    top:0;
}
.cake li button{
    width: 15%;
    height: 1.4rem;
    border: 0;
    background-color:#ffce39;
    border-radius:1rem;
    position:absolute;
    left:78%;
    bottom:0;
    outline: none;
}
.cake li button a{
    display:block;
    width:100%;
    height:1.4rem;
    line-height: 1.4rem;
    text-align:center;
    text-decoration:none;
    color:white;
    font-size:120%;
}
.cake li .money{
    color:#f36466;
    position:absolute;
    left:  37%;
    top: 50%;
    font-size:90%;
}
.cake li .number{
    color:#bebebe;
    position:absolute;
    left:  37%;
    bottom:0;
    font-size:90%;
}
</style>
