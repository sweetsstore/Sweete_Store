<template>
    <div id="wheel">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'Swiper'
export default {
  data(){
    return {
        imgs: []
    }
  },
  Created: function(){
	fetch("http://localhost:3000/imgs")
	// .then((res)=>{
	//     return res.json()
  //   })
  //   .then((data)=>{
  //     // this.imgs = 
  //     this.$nexttick(()=>{
  //       var mySwiper = new Swiper ('.swiper-container', {
  //           autoplay:true,
  //           loop: true, // 循环模式选项
  //           // 如果需要分页器
  //           pagination: {
  //             el: '.swiper-pagination',
  //           }
  //       })
  //     })
  //   })
  }
}
</script>
@import "../../assets/css/swiper.min.css"
<style scoped>
.swiper-container {
    width: 600px;
    height: 300px;
}  
</style>
