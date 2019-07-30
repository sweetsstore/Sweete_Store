<template>
    <div>
        <header>
            <a href="#"><img src="./goods_showimg/返回.png" alt=""></a>
            <span>热销榜单</span>
        </header>
        <div class="classes">
            <ul>
               <li ><a href="#">西餐</a></li>
               <li ><a href="#">中餐</a></li>
               <li ><a href="#">咖啡</a></li>
               <li ><a href="#">酒</a></li>
               <li ><a href="#">零食</a></li>
               <li ><a href="#">生鲜</a></li>
               <li ><a href="#">水果</a></li>
               <li ><a href="#">茗茶</a></li>
               <li ><a href="#">保健品</a></li>
               <li ><a href="#">蛋糕</a></li>
               <!-- <li class="line"></li> -->
            </ul>
        </div>
        <ul class="cake">
            <li>
                <a href="#"><img src="./goods_showimg/1.jpg" alt=""></a>
                <p class="name">粉红色的回忆---草莓味红丝绒蛋糕</p>
                <button><a href="#">购买</a></button>
                <p class="money">￥20</p>
                <p class="number">已售:1345</p>
            </li>
            <li>
                <a href="#"><img src="./goods_showimg/8.jpg" alt=""></a>
                <p class="name">橙色年华---橙味流心蛋糕</p>
                <button><a href="#">购买</a></button>
                <p class="money">￥30</p>
                <p class="number">已售:356</p>
            </li>
            <li>
                <a href="#"><img src="./goods_showimg/2.jpg" alt=""></a>
                <p class="name">粉色马卡龙---荔枝味夹心蛋糕</p>
                <button><a href="#">购买</a></button>
                <p class="money">￥40</p>
                <p class="number">已售:58</p>
            </li>
            <li>
                <a href="#"><img src="./goods_showimg/13.jpg" alt=""></a>
                <p class="name">奶油慕斯---草莓味软蛋糕</p>
                <button><a href="#">购买</a></button>
                <p class="money">￥45</p>
                <p class="number">已售:40</p>
            </li>
        </ul>
    </div>
</template>
<script>
import Velocity from 'velocity-animate'

export default {
//  method:{
//      dofun(){
//         this.velocity("finish").velocity({
//             "width" : this.find("a").outerWidth()+"px",
//             "left" :this.find("a").offset().left+"px",
//         },{
//             "duration" : "300ms",
//             "easing" : [3000,20],
//         })
//      }

//  }
    
}
</script>
<style>
*{
    margin:0;
    padding:0;
}
header{
    width:100%;
    height:1.8rem;
    position:relative;
    left:0;
    top:1rem;
}
header a{
    display:block;
    width:2%;
    height: 1.8;
    position:absolute;
    left: .386667rem;
    top:0;
    text-decoration:none;
}
header span{
    font-size:130%;
    font-weight:bold;
    width:100%;
    padding-left:39%;
    line-height:1.8rem;
}
.classes{
    width:100%;
    height:2rem;
    margin-top:2.5rem;
    position:relative;
    overflow-x:scroll;
}
.classes ul{
    width:1000%;
    list-style:none;
}
.classes ul li{
    margin-left: .8rem;
    display:inline-block;
}
.classes ul li a{
    text-decoration:none;
    color:#ccc;
    font-size:120%;
}
/* .line{
        height: .4rem;
        width: 0;
        position: absolute;
        left: 0;
        top: 2.6rem;
        background-color:#ffcd3a;
    } */
.cake{
    width:100%;
    list-style:none;
}
.cake li{
    width:100%;
    height: 5.5rem;
    margin-top: 1.5rem;
    margin-left: .8rem;
    position:relative;
}
.cake li a{
    display:block;
    width:35%;
}
.cake li a img{
    width:35%;
    height: 5.5rem;
    position:absolute;
    border-radius:0.5rem;
    left:0;
    top:0;
}
.cake li .name{
    position:absolute;
    width:60%;
    left:  37%;
    top:0;
}
.cake li button{
    width: 15%;
    height: 1.4rem;
    border: 0;
    background-color:#ffce39;
    border-radius:1rem;
    position:absolute;
    left:78%;
    bottom:0;
    outline: none;
}
.cake li button a{
    display:block;
    width:100%;
    height:1.4rem;
    line-height: 1.4rem;
    text-align:center;
    text-decoration:none;
    color:white;
    font-size:120%;
}
.cake li .money{
    color:#f36466;
    position:absolute;
    left:  37%;
    top: 50%;
    font-size:90%;
}
.cake li .number{
    color:#bebebe;
    position:absolute;
    left:  37%;
    bottom:0;
    font-size:90%;
}
</style>
