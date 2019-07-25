<template>
<div>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
  <div class="container">
			<aside class="fall-box grid">
				<div class="grid-item item">
                    <img src="finishing/img/1.jpg" class="item-img" />
					<section class="section-p">
					   <p class="title-p">甜到心坎儿的小甜水</p>
				       <p class="name-p">雷敏</p>
				       <p class="point-p">1250</p>
					</section>
				</div>
				<div class="grid-item item">
					<img src="finishing/img/4.jpg" class="item-img" />
					<section class="section-p">
					   <p class="title-p">3秒get女神同款</p>
				       <p class="name-p">庞美如</p>
				       <p class="point-p">2250</p>
					</section>
				</div>
				<div class="grid-item item">
					<img src="finishing/img/3.jpg" class="item-img" />
					<section class="section-p">
					   <p class="title-p">网红小龙虾爆款推荐</p>
				       <p class="name-p">肖叶</p>
				       <p class="point-p">2110</p>
					</section>
				</div>
				<div class="grid-item item">
					<img src="finishing/img/2.jpg" class="item-img" />
					<section class="section-p">
					   <p class="title-p">意面黑椒培根牛肉面</p>
				       <p class="name-p">吴文虎</p>
				       <p class="point-p">3330</p>
					</section>
				</div>
				<div class="grid-item item">
					<img src="finishing/img/5.jpg" class="item-img" />
					<section class="section-p">
					   <p class="title-p">法式乔士麦春天精品</p>
				       <p class="name-p">张金蕊</p>
				       <p class="point-p">2200</p>
					</section>
				</div>
				<div class="grid-item item">
					<img src="finishing/img/6.jpg" class="item-img" />
					<section class="section-p">
					   <p class="title-p">少女心Q萌榴莲千层蛋糕</p>
				       <p class="name-p">邬静</p>
				       <p class="point-p">1360</p>
					</section>
				</div>
				<div class="grid-item item">
					<img src="finishing/img/7.jpg" class="item-img" />
					<section class="section-p">
					   <p class="title-p">法国巴黎BACK乔士蒂斯粉色情人</p>
				       <p class="name-p">刘东田</p>
				       <p class="point-p">2410</p>
					</section>
				</div>
				<div class="grid-item item">
					<img src="finishing/img/8.jpg" class="item-img" />
					<section class="section-p">
					   <p class="title-p">浪漫少女心形草莓戚风蛋糕</p>
				       <p class="name-p">杨欣</p>
				       <p class="point-p">2500</p>
					</section>
				</div>
				<div class="grid-item item">
					<img src="finishing/img/9.jpg" class="item-img" />
					<section class="section-p">
					   <p class="title-p">绿光森林抹茶芒果夹心蛋糕</p>
				       <p class="name-p">王佳杰</p>
				       <p class="point-p">4300</p>
					</section>
				</div>
				<div class="grid-item item">
					<img src="finishing/img/10.jpg" class="item-img" />
					<section class="section-p">
					   <p class="title-p">热带雨林水果荟萃</p>
				       <p class="name-p">张孟奇</p>
				       <p class="point-p">1800</p>
					</section>
				</div>
			</aside>
			<a href="javascript:;" class="more-a">
				<img src="finishing/img/ic_loading.gif" />
		    </a>
		</div>
</div>
</template>

<script>
import find from '../like/likehtml/finishing/js/find.js'
import imagesloaded from '../like/likehtml/finishing/js/imagesloaded.js'
import jquery from '../like/likehtml/finishing/js/jquery.js'
import masonry from '../like/likehtml/finishing/js/masonry.js'
import swiper from '../like/likehtml/finishing/js/swiper.js'
</script>

<style>
    .fall-box{
                width: 100%;
                margin: 5% 8px 0px 8px ;
            }
            .fall-box .item{
                width: calc((100% - 28px)/2);
                margin-bottom: 1.5rem;
            }
            .fall-box .section-p{
	            background: white;
	            padding-top: 1.5rem;
	            padding-left:5%;
            }
            .fall-box .item-img{
	            width:100% ;
	            display: block;
            }
            .item .title-p{
	            color: #000;
	            font-size: 1.2rem;
	            margin-bottom: .5rem;
            }
            .item .name-p{
	            color: #555;
	            font-size: 1rem;
            }
            .item .price-p{
	            margin-top: .8rem;
	            color: #444;
	            font-size: 1.2rem;
	            padding-bottom: 2.2rem;
            }
            .more-a{
	            display: block;
	            text-align: center;
	            margin-top: 8%;
            }
            .more-a img{
	            width: 6%;
            }
            .points{
                width: .5rem;
                height: .5rem;
                display: block;
                float: right;
            }
</style>