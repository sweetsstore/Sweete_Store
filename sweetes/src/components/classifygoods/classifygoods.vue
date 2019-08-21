<template>
<div id="main">
    <div class="left" ref="left">
        <ul class="list" >
          <li v-for= "(arr, index) in arrs" :key= "index" :class= "{current:currentIndex === index}" @click= "change(index, $event)">{{arr}}</li>
        </ul>
    </div>
  <section class="right" ref="right">
        <div v-for= "(item, i) in items" :key= "i" class= "right-item right-item-hook">
            <p>{{item.name}}</p>
            <ul>
                <li v-for= "(good,id) in item.goods" :key= "id">
                    <a href="#">
                    <img :src= "good.src" alt="图片走丢了">
                    <span>{{good.goodname}}</span>
                    </a>
                </li>
            </ul>
        </div>
  </section>
</div>
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
            ],
      arrs:
      [
        '西餐', '中餐', '咖啡', '酒', '零食', '生鲜', '水果', '茗茶', '保健品', '蛋糕'
      ],
      listHeight: [],
      scrollY: 0,
      clickEvent: false
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
      this._getHeight()
    })
  },
  methods: {
    change (index, event) {
      this.clickEvent = true
      if (!event._constructed) {
        return 0
      } else {
        let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
        let el = rightItems[index]
        this.rights.scrollToElement(el, 300)
      }
    },
    _initScroll () {
      this.lefts = new BScroll(this.$refs.left, {
        click: true
      })
      this.rights = new BScroll(this.$refs.right, {
        click: true,
        probeType: 3
      })
      this.rights.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _getHeight () {
      let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < Math.ceil(rightItems.length / 3); i++) {
        let item = rightItems[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
  }
}
</script>
<style scoped="scoped">
.left{
    position:relative;
    top:1.8rem;
    left:0;
}
.list{
    width:26%;
    height:35rem;
    list-style:none;
    overflow:hidden;
}
.current{
    background-color:white;
}
.list li{
    width:100%;
    height:4rem;
    float:left;
    text-align:center;
    line-height:4rem;
    color:black;
    background-color:#f2f2f2;
    border-bottom:white 1px solid;
}
section{
    width:74%;
    height:35rem;
    position:absolute;
    top:3.6rem;
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
