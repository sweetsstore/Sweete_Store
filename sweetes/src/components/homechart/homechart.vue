<template>
<div class="chart">
    <swiper :options="swiperOption" ref="mySwiper" id="f">
      <swiper-slide v-for="(item,id) in items" :key="id">
          <img id="imgs" :src="item.src" alt="图片走丢咯~" @click="go()">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    go () {
      this.$router.push({ path: '../../Pages/classify/classfiy.vue' })
    }
  },
  data () {
    return {
      items: [
        {
          src: require('../../assets/homeimg/1small.jpg')
        },
        {
          src: require('../../assets/homeimg/2small.jpg')
        },
        {
          src: require('../../assets/homeimg/8small.jpg')
        },
        {
          src: require('../../assets/homeimg/13small.jpg')
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style scoped="scoped">
.chart{
    width: 100%;
    margin-top:2rem;
}
#f{
    border-radius:1rem;
    margin-left:.5rem;
    margin-right:.5rem;
}
#imgs{
  /* height: 1rem; */
    width:100%;
    height:14rem;
}
</style>
