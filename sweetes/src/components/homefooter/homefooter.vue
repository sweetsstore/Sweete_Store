<template>
     <footer>
      <ul >
          <li v-for="(item, index) in arrs" :key='item.index' @click="go(index)">
              <div>
                  <img :src="item.goods_Picture" alt="图片走丢咯~">
                  <p class="newname">{{item.goods_Name}}</p>
                  <p class="newmoney">￥{{item.goods_Price}}/份</p>
              </div>
          </li>
      </ul>
  </footer>
</template>
<script>
export default {
  props: ['arrs'],
  methods: {
    go (id) {
      this.$router.push({
        path: 'goodsdetailtest',
        query: {id: this.arrs[id].goods_Id}
      })
    }
  }
}
</script>
<style scoped="scoped">
ul{
  margin:0;
  padding:0;
}
p{
   margin:0;
   padding: 0;
}
footer{
    width:100%;
    height:8rem;
    margin-top:1.2rem;
}
footer ul{
    width:100%;
    height:8rem;
    list-style:none;
    white-space:nowrap;
    overflow-x:auto;
    overflow-y:hidden;
}
footer li {
    width:35%;
    margin-left:.5rem;
    display:inline-block;
}
footer div{
    display:block;
    width:100%;
    height:100%;
    text-decoration:none;
}
footer li div img{
    display:block;
    width:100%;
    height:5.5rem;
    border-radius:.5rem;
}
footer li div .newname{
    /* margin-top:.2rem; */
    margin-bottom:.2rem;
    font-size:90%;
    text-decoration:none;
    color:black;
}
footer li div .newmoney{
    font-size:90%;
    text-decoration:none;
    color:#f5a9a9;
}
</style>
