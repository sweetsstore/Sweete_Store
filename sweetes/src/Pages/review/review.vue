<template>
<div>
    <div id="top">
        <div id="return">
            <img alt="" src="./img/fanhui.png">
        </div>
        <div id="shopcart">
            <img alt="" src="./img/gouwuche.png">
        </div>
    </div>
    <div id="mid">
        <div class="piece">
            <div class="photo">
                <img alt="" src="./img/touxiang.png">
            </div>
            <div class="id">zhangjinruileiminxiaoye</div>
            <div class="date">2019-7-27</div>
            <div class="inner">kajfbckahcljlihoihgiyhgvjGKCJBcnlakcljabkjgkJGLJHLJHBJFJGVjvjgchgdhtutetegfchgcjhfyiug</div>
            <div class="twice">
                <img alt="" src="./img/pinglun.png">
            </div>
        </div>
        <div class="piece">
            <div class="photo">
                <img alt="" src="./img/touxiang.png">
            </div>
            <div class="id">zhangjinruileiminxiaoye</div>
            <div class="date">2019-7-27</div>
            <div class="inner">kajfbckahcljlihoihgiyhgvjGKCJBcnlakcljabkjgkJGLJHLJHBJFJGVjvjgchgdhtutetegfchgcjhfyiug</div>
            <div class="twice">
                    <img alt="" src="./img/pinglun.png">
            </div>
        </div>
        <div class="piece">
            <div class="photo">
                <img alt="" src="./img/touxiang.png">
            </div>
            <div class="id">zhangjinruileiminxiaoye</div>
            <div class="date">2019-7-27</div>
            <div class="inner">kajfbckahcljlihoihgiyhgvjGKCJBcnlakcljabkjgkJGLJHLJHBJFJGVjvjgchgdhtutetegfchgcjhfyiug</div>
            <div class="twice">
                    <img alt="" src="./img/pinglun.png">
            </div>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style>
body{
        margin: 0;
        padding: 0;
        background-color: whitesmoke;
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
    #shopcart{
        display: block;
        float: right;
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
    #mid{
        position: absolute;
        top: 3rem;
        display: block;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
    }
    .piece{
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
    .twice{
        display: inline-block;
        width: 1rem;
        height: 1rem;
    }
</style>
