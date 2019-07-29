<template slot-scope>
<div class="main">
    <ul class="list">
        <li class="xican">西餐</li>
        <li class="zhongcan">中餐</li>
        <li class="kafe">咖啡</li>
        <li class="jiu">酒</li>
        <li class="lingshi">零食</li>
        <li class="shengxian">生鲜</li>
        <li class="shuiguo">水果</li>
        <li class="cha">茗茶</li>
        <li class="baojianpin">保健品</li>
        <li class="dangao">蛋糕</li>
    </ul>
    <section>
        <div>
            <p>西餐</p>
            <ul>
                <li>
                    <img src="./classifyimg/意大利面.png" alt="">
                    <span>意大利面</span>
                </li>
                <li>
                    <img src="./classifyimg/牛排.png" alt="">
                    <span>牛排</span>
                </li>
                <li>
                    <img src="./classifyimg/披萨.png" alt="">
                    <span>披萨</span>
                </li>
                <li>
                    <img src="./classifyimg/牛排.png" alt="">
                    <span>牛排</span>
                </li>
               
            </ul>
        </div>
        <div>
            <p>中餐</p>
            <ul>
                <li>
                    <img src="./classifyimg/中餐.png" alt="">
                    <span>中餐</span>
                </li>
            </ul>
        </div>
        <div>
            <p>咖啡</p>
            <ul>
                <li>
                    <img src="./classifyimg/咖啡.png" alt="">
                    <span>咖啡</span>
                </li>
            </ul>
        </div>
        <div>
            <p>酒</p>
            <ul>
                <li>
                    <img src="./classifyimg/酒杯.png" alt="">
                    <span>酒</span>
                </li>
            </ul>
        </div>
        <div>
            <p>零食</p>
            <ul>
                <li>
                    <img src="./classifyimg/零食.png" alt="">
                    <span>零食</span>
                </li>
                <li>
                    <img src="./classifyimg/零食_面包.png" alt="">
                    <span>面包</span>
                </li>
                <li>
                    <img src="./classifyimg/零食罐头.png" alt="">
                    <span>罐头</span>
                </li>
            </ul>
        </div>
        <div>
            <p>生鲜</p>
            <ul>
                <li>
                    <img src="./classifyimg/生鲜.png" alt="">
                    <span>生鲜</span>
                </li>
            </ul>
        </div>
        <div>
            <p>水果</p>
            <ul>
                <li>
                    <img src="./classifyimg/水果.png" alt="">
                    <span>水果</span>
                </li>
            </ul>
        </div>
        <div>
            <p>茗茶</p>
            <ul>
                <li>
                    <img src="./classifyimg/茶.png" alt="">
                    <span>茶</span>
                </li>
            </ul>
        </div>
        <div>
            <p>保健品</p>
            <ul>
                <li>
                    <img src="./classifyimg/保健品.png" alt="">
                    <span>保健品</span>
                </li>
            </ul>
        </div>
        <div>
            <p>蛋糕</p>
            <ul>
                <li>
                    <img src="./classifyimg/蛋糕.png" alt="">
                    <span>蛋糕</span>
                </li>
            </ul> 
        </div>
    </section>
</div>
    
</template>
<script>
import Velocity from 'velocity-animate'

export default {
    
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
.main{
    position:relative;
}
.list{
    width:26%;
    height:43rem;
    list-style:none;
    background-color:#f2f2f2;
}
.list li{
    width:100%;
    height:10%;
    float:left;
    text-align:center;
    line-height:4.3rem;
}
.list li:hover{
    background-color:white;
}
section{
    width:74%;
    height:43rem;
    position:absolute;
    top:0;
    right:0;
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
