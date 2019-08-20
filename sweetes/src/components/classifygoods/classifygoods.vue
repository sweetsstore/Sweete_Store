<template>
  <section class="foods-wrapper" ref="foodswrapper">
        <div v-for="(item, index) in  items" :key="index">
            <p>{{item.name}}</p>
            <ul>
                <li v-for="(good,id) in item.goods" :key="id">
                    <a href="#">
                    <img :src="good.src" alt="图片走丢了">
                    <span>{{good.goodname}}</span>
                    </a>
                </li>
            </ul>
        </div>
  </section>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      items:
            [
              {
                name: '西餐',
                goods:
                    [
                      {
                        src: require('../../assets/classifyimg/意大利面.png'),
                        goodname: '意大利面'
                      },
                      {
                        src: require('../../assets/classifyimg/牛排.png'),
                        goodname: '牛排'
                      },
                      {
                        src: require('../../assets/classifyimg/披萨.png'),
                        goodname: '披萨'
                      },
                      {
                        src: require('../../assets/classifyimg/牛排.png'),
                        goodname: '牛排'
                      }
                    ]
              },
              {
                name: '中餐',
                goods:
                    [
                      {
                        src: require('../../assets/classifyimg/中餐.png'),
                        goodname: '中餐'
                      }
                    ]
              },
              {
                name: '咖啡',
                goods:
                    [
                      {
                        src: require('../../assets/classifyimg/咖啡.png'),
                        goodname: '咖啡'
                      }
                    ]
              },
              {
                name: '酒',
                goods:
                    [
                      {
                        src: require('../../assets/classifyimg/酒杯.png'),
                        goodname: '酒'
                      }
                    ]
              },
              {
                name: '零食',
                goods:
                    [
                      {
                        src: require('../../assets/classifyimg/零食.png'),
                        goodname: '零食'
                      },
                      {
                        src: require('../../assets/classifyimg/零食_面包.png'),
                        goodname: '面包'
                      },
                      {
                        src: require('../../assets/classifyimg/零食罐头.png'),
                        goodname: '罐头'
                      }
                    ]
              },
              {
                name: '生鲜',
                goods:
                    [
                      {
                        src: require('../../assets/classifyimg/生鲜.png'),
                        goodname: '生鲜'
                      }
                    ]
              },
              {
                name: '水果',
                goods:
                    [
                      {
                        src: require('../../assets/classifyimg/水果.png'),
                        goodname: '水果'
                      }
                    ]
              },
              {
                name: '茗茶',
                goods:
                    [
                      {
                        src: require('../../assets/classifyimg/茶.png'),
                        goodname: '茶'
                      }
                    ]
              },
              {
                name: '保健品',
                goods:
                    [
                      {
                        src: require('../../assets/classifyimg/保健品.png'),
                        goodname: '保健品'
                      }
                    ]
              },
              {
                name: '蛋糕',
                goods:
                    [
                      {
                        src: require('../../assets/classifyimg/蛋糕.png'),
                        goodname: '蛋糕'
                      }
                    ]
              }
            ]
    }
  },
  // computed: {
  //   created () {
  //     this.$nextTick(() => {
  //       this._initScroll()
  //     })
  //   }
  // },
  methods: {
    _initScroll () {
      this.foodScroll = new BScroll(this.$refs.foodswrapper, {})
    }
  }
}
</script>
<style scoped="scoped">
section{
    width:74%;
    height:35rem;
    position:absolute;
    top:3.3rem;
    right:0;
    overflow:hidden;
}
section div{
    width:100%;
}
section div p{
    font-size:120%;
    font-weight:bold;
    padding-top:.4rem;
    padding-left:1rem;
}
section div ul{
    list-style:none;
    width:100%;
    margin-top: 2rem;
    margin-left: 1rem;
}
section div ul li{
    width:25%;
    height:4rem;
    display: inline-block;
    margin-right:.853333rem;
    margin-bottom: 3rem;
}
section div ul li a{
    display: block;
    width:100%;
    height:100%;
    text-decoration:none;
    color:black;
}
section div ul li img{
    width:90%;
    height:90%;
}
section div span{
    display:block;
    width:100%;
    text-align:center;
    margin-bottom: 1rem;
}
</style>
