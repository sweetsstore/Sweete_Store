<template slot-scope>
<div class="main">
    <classify-head></classify-head>
    <classify-menu></classify-menu>
    <!-- <section>
        <div>
            <p>西餐</p>
            <ul>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/意大利面.png" alt="">
                    <span>意大利面</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/牛排.png" alt="">
                    <span>牛排</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/披萨.png" alt="">
                    <span>披萨</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/牛排.png" alt="">
                    <span>牛排</span>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <p>中餐</p>
            <ul>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/中餐.png" alt="">
                    <span>中餐</span>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <p>咖啡</p>
            <ul>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/咖啡.png" alt="">
                    <span>咖啡</span>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <p>酒</p>
            <ul>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/酒杯.png" alt="">
                    <span>酒</span>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <p>零食</p>
            <ul>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/零食.png" alt="">
                    <span>零食</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/零食_面包.png" alt="">
                    <span>面包</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/零食罐头.png" alt="">
                    <span>罐头</span>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <p>生鲜</p>
            <ul>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/生鲜.png" alt="">
                    <span>生鲜</span>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <p>水果</p>
            <ul>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/水果.png" alt="">
                    <span>水果</span>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <p>茗茶</p>
            <ul>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/茶.png" alt="">
                    <span>茶</span>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <p>保健品</p>
            <ul>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/保健品.png" alt="">
                    <span>保健品</span>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <p>蛋糕</p>
            <ul>
                <li>
                    <a href="#">
                    <img src="../../assets/classifyimg/蛋糕.png" alt="">
                    <span>蛋糕</span>
                    </a>
                </li>
            </ul>
        </div>
    </section> -->
</div>
</template>
<script>
import classifyhead from '../../components/classifyhead/classifyhead'
import classifymenu from '../../components/classifymenu/classifymenu'
export default {
  components: {
    'classify-menu': classifymenu,
    'classify-head': classifyhead
  }
}
</script>
<style scoped="scoped">
*{
    margin:0;
    padding:0;
}
.main{
    position:relative;
}
section{
    width:74%;
    height:43rem;
    position:absolute;
    top:0;
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
