<template>
<div class="chart">
    <swiper :options="swiperOption" ref="mySwiper" id="f">
      <swiper-slide v-for="(item,id) in items" :key="id">
          <img id="imgs" :src="item" alt="图片走丢咯~" @click="go()">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['items'],
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    go (id) {
      this.$router.push({ path: '../../Pages/goodsdetails/goodsdetails.vue' })
    }
  },
  data () {
    return {
      item: [],
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
    margin-top:3rem;
    z-index: -1;
}
#f{
    border-radius:.5rem;
    margin-left:.5rem;
    margin-right:.5rem;
}
#imgs{
  /* height: 1rem; */
    width:100%;
    height:14rem;
}
</style>
