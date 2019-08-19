<template>
     <footer>
      <ul >
          <li v-for="item in items" :key='item.index'>
              <a href="#">
                  <img :src="item.imgsrc" alt="">
                  <p class="newname">{{item.name}}</p>
                  <p class="newmoney">￥{{item.money}}/份</p>
              </a>
          </li>
      </ul>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      items:
            [
              {imgsrc: require('../../assets/homeimg/1small.jpg'), name: '草莓味红丝绒蛋糕', money: 20},
              {imgsrc: require('../../assets/homeimg/2small.jpg'), name: '橙味流心蛋糕', money: 30},
              {imgsrc: require('../../assets/homeimg/8small.jpg'), name: '荔枝味夹心蛋糕', money: 40},
              {imgsrc: require('../../assets/homeimg/13small.jpg'), name: '草莓味软蛋糕', money: 45}
            ]
    }
  }
}
</script>
<style scoped="scoped">
footer{
    width:100%;
    height:8.5rem;
    margin-top:1.2rem;
}
footer ul{
    width:100%;
    height:8.5rem;
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
footer a{
    display:block;
    width:100%;
    height:100%;
    text-decoration:none;
}
footer li a img{
    width:100%;
    height:5.5rem;
    border-radius:.5rem;
}
footer li a .newname{
    margin-top:.2rem;
    margin-bottom:.2rem;
    font-size:90%;
    text-decoration:none;
    color:black;
}
footer li a .newmoney{
    font-size:90%;
    text-decoration:none;
    color:#f5a9a9;
}
</style>
