<template>
    <div id="app">
        <div id="gouwuche">购物车</div>
        <div id="body">
            <div class="shopping">
                <p id="shopname">纪梵希旗舰店</p>
                <div>
                    <div id="goodspic"></div>
                    <div id="goodsname"></div>
                    <span id="price"></span>
                    <div>
                        <input type="button" value="-" />
                        <strong>0</strong>
                        <input type="button" value="+" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>

<style scoped>
    *{
        margin:0;
    }
    #gouwuche{
        width: 98%;
        height:8%;
        display: flex;
        top: 0;
        color: black;
        background-color: white;
        font-size: 18px;
        float: left;
        vertical-align: center;
        padding: 1%;
    }
    #body{
        width: 100%;
        background: -webkit-linear-gradient(#ddd,#fff);
        margin: 0;
    }
    .shopping{
        width: 100%;
        margin: 2% 0 2% 0;
        height: 80px;
        background-color: white;
    }
</style>
