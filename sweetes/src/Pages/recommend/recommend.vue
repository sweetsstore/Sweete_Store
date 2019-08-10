<template>
<div>
    <div id="top">
        <div id="return" @click="go_back">
            <img alt="" src="./img/fanhui.png">
        </div>
        <div id="write" @click="go_write">
            <img alt="" src="./img/pinglun.png">
        </div>
        <div class="module">
            <div class="picture">
                <img alt="" src="./img/touxiang.png">
            </div>
            <div class="idname">zhangjinruileiminxiaoye</div>
        </div>
    </div>
    <div id="mid">
        <div id="pic">
            <img alt="" src="./img/8.jpg" @click="go_goods">
        </div>
        <div id="inner">甜品，也叫甜点，是一个很广的概念，大致分为甜味点心和广式的糖水。甜品，一般不会被当作正餐，通常作为下午茶的小食。
                甜食，是治疗抑郁、放松心情的灵丹妙药，大多人在犒劳自己的时候喜欢来一点甜的，忘记减肥、忘记塑身、忘记那些好看但绷着身体的华丽衣服。一般来说，喜欢吃甜食的人，脾气都不坏，她们的坏情绪可以被巧克力、蛋糕、布丁、奶酪等一切甜美的食物代谢殆尽。即便如才女张爱玲也对冰淇凌、蛋糕等甜品“爱不释口”，尤其喜欢老上海凯司令的“栗子蛋糕”和“处女冰淇淋”。
                广东糖水甜品的种类十分多样，豆类的有红豆沙、绿豆沙；糊类的有芝麻糊、杏仁糊、花生糊、核桃糊；药材类的有百合糖水、莲子糖水；牛奶类的有窝蛋奶、姜撞奶、双皮奶。另外，诸如银耳炖木瓜、芝麻汤圆、养颜西米露、黑糯米这样的甜食，也是糖水店里的常备之物。</div>
        <div id="content">
            <div id="date">2019-7-28</div>
            <div id="like">
                <img alt="" src="./img/aixin.png">
            </div>
        </div>
        <div id="comment">
            <div class="piece">
                <div class="photo">
                    <img alt="" src="./img/touxiang.png">
                </div>
                <div class="id">zhangjinruileiminxiaoye</div>
                <div class="date">2019-7-27</div>
                <div class="point">
                    <img alt="" src="./img/dianzan.png">
                </div>
                <div class="inner">kajfbckahcljlihoihgiyhgvjGKCJBcnlakcljabkjgkJGLJHLJHBJFJGVjvjgchgdhtutetegfchgcjhfyiug</div>
            </div>
            <div class="piece">
                <div class="photo">
                    <img alt="" src="./img/touxiang.png">
                </div>
                <div class="id">zhangjinruileiminxiaoye</div>
                <div class="date">2019-7-27</div>
                <div class="number">12345</div>
                <div class="point">
                    <img alt="" src="./img/dianzan.png">
                </div>
                <div class="inner">kajfbckahcljlihoihgiyhgvjGKCJBcnlakcljabkjgkJGLJHLJHBJFJGVjvjgchgdhtutetegfchgcjhfyiug</div>
            </div>
        </div>
    </div>
    <div id="bottom">
        <textarea id="writing" wrap="soft" cols="45" required maxlength="50%" placeholder="在这里发表评论" style="width: 95%;height: 1.5rem"></textarea>
    </div>
</div>
</template>

<script>
export default {
//   data: function () {
//     return {
//       whether: false
//     }
//   },
  methods: {
    go_back () {
      this.$router.go(-1)
    },
    go_write () {
      this.$router.push({path: '/comment'})
    },
    go_goods () {
      this.$router.push({path: '/goodsdetails'})
    }
  }
}
</script>

<style>
    body{
        background-color: white;
        margin: 0;
        padding: 0;
    }
    #top{
        position: absolute;
        top: 0;
        width: 100%;
        height: 3rem;
        background-color: transparent;
    }
    #return{
        display: block;
        float: left;
    }
    #write{
        display: block;
        float: right;
        top: 0;
    }
    img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
    img:hover{
        opacity: .25;
    }
    .module{
        display: flex;
        height: 3rem;
        width: calc(100% - 6.5rem);
        flex-direction: row;
        flex-wrap: wrap;
    }
    .picture{
        display: inline-block;
        margin: .5rem;
        width: 2rem;
        height: 2rem;
    }
    .picture img{
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
    }
    .idname{
        display: inline-block;
        width: 7rem;
        height: 1rem;
        font-size: 1rem;
        overflow: hidden;
        margin: 1rem;
    }
    #pic{
        position: absolute;
        top: 3rem;
        width: 100%;
        height: 14rem;
    }
    #pic img{
        max-width: 100%;
        max-height: 14rem;
        min-width: 100%;
        min-height: 14rem;
    }
    #inner{
        display: block;
        position: absolute;
        top: 17rem;
        font-size: .85rem;
        width: 95%;
        height: 10.71rem;
        overflow: scroll;
        margin: calc((100% - 95%)/2);
        word-wrap: break-word;
        word-break: break-all;
    }
    #content{
        display: inline-block;
        position: absolute;
        top: 29rem;
        width: 100%;
        height: 3rem;
    }
    #date{
        display: block;
        float: left;
        font-size: .75rem;
        margin: calc((3rem - .75rem)/2);
        color: gray;
    }
    #like{
        display: block;
        float: right;
        margin: .5rem;
    }
    #comment{
        position: absolute;
        top: 32rem;
        display: block;
        /* flex-direction: column;
        flex-wrap: wrap; */
        width: 100%;
        height: 100%;
    }
    .piece{
        position: absolute;
        display: flex;
        margin: calc((100% - 98%)/2);
        width: 98%;
        height: 10.71rem;
        border-radius: 2px;
        background-color: white;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .photo{
        display: inline-block;
        width: 2.5rem;
        height: 10.71rem;
    }
    .photo img{
        height: 2.5rem;
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
    }
    .id{
        display: inline-block;
        width: 5rem;
        height: 1rem;
        font-size: .8rem;
        overflow: hidden;
    }
    .date{
        display: inline-block;
        font-size: .55rem;
        width: 3rem;
    }
    .number{
        display: block;
        position: absolute;
        top: .85rem;
        right: 2.55rem;
        font-size: .25rem;
    }
    .point{
        display: block;
        position: absolute;
        top: 0;
        right: .35rem;
    }
    .inner{
        display: inline-block;
        font-size: 1.2rem;
        width: calc(98% - 2.5rem);
        height: calc(10.71rem - 3rem);
        overflow: hidden;
        word-wrap: break-word;
        word-break: break-all;
    }
    #bottom{
        position: fixed;
        bottom: 0;
        height: 3rem;
        width: 100%;
    }
    #writing{
        margin-top: calc((3rem - 1.5rem)/2);
        margin-left: calc((100% - 95%)/2);
        overflow: scroll;
        border-radius: .5rem;
    }
    textarea:focus{
        border-color: #66afe9;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
</style>
