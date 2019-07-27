<template>
<div>
  <div id="top">
        <div id="return">
            <img alt="" src="./img/fanhui.png">
        </div>
        <div id="write">
            <img alt="" src="./img/tijiao.png">
        </div>
    </div>
    <div id="mid">
        <textarea wrap="soft" cols="50" rows="6" required maxlength="300" placeholder="随便说点什么吧" style="width: 98%;height: 10rem"></textarea>
        <div id="add">
            <img alt="" src="./img/tianjia.png">
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
    #write{
        display: block;
        float: right;
    }
    img:hover{
        opacity: .2;
    }
    #mid{
        display: block;
        position: absolute;
        top: 4rem;
        width: 100%;
    }
    textarea{
        -webkit-appearance: none;
        -moz-appearance: none;
        font-size: 1.2rem;
        border-radius: 4px;
        border: 1px solid #c8cccf;
        color: #6a6f77;
        outline: 0;
    }
    textarea:focus{
        border-color: #66afe9;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
    #add{
        display: block;
        float: left;
    }
</style>
