<template>
    <div class="list-container">
        <div class="top-ops">
                <div>
                    <img src="../../../static/images/HomeRecommendShopInfoAdress@2x.png" alt="">
                    <span>浙江省杭州市...</span>
                </div>
                <div class="ops">
                    <span v-if="cartStatus === 'account'" @click="cartStatus = 'edit'">编辑商品</span>
                    <span v-if="cartStatus === 'edit'" @click="cartStatus = 'account'">完成</span>
                </div>
        </div>
        <div class="paddingB200">
            <div class="shop-list" v-for="(item,index) in cartShops" :key="index">
                <div class="shop-name">
                    <label>
                        <input type="checkbox"
                            name="shopRadio"
                            :value="item.productShopId"
                            @click="shopCheck($event,cartShops)"
                        class="disN">
                        <b></b>
                    </label>
                    <div>
                        <div>
                            <img src="../../../static/images/mall@2x.png" alt="">
                            <span class="name">{{item.shopName}}</span>
                        </div>
                        <span>
                            <img src="../../../static/images/jtxq@2x.png" alt="">
                        </span>
                    </div>
                </div>
                <div class="goods-list" v-for="(goods,goodsIndex) in item.detailLists" :key="goodsIndex">
                    <label>
                        <input type="checkbox"
                            name="goodRadio"
                            :price="goods.price"
                            :num="goods.number" :dataId="item.productShopId"
                            :value="goods.cartDetailId"
                            @click="goodsCkeck($event,item.detailLists,cartShops,item.productShopId)"
                        class="disN">
                        <b></b>
                    </label>
                    <div class="middle">
                        <img :src="goods.reportImage" alt="">
                        <div>
                            <p class="name">{{goods.name}}</p>
                            <p class="spec">{{goods.specifications}}</p>
                            <p class="tab">
                                <img src="../../../static/images/lsspbq@2x.png" alt="">
                            </p>
                        </div>
                    </div>
                    <div class="right">
                        <p class="price">￥{{goods.price}}</p>
                        <p class="num">X{{goods.number}}</p>
                        <p class="caculate">
                            <span class="mark" @click="numDecrease(goods.number)"></span>
                            <span class="beeforCacul">{{goods.number}}</span>
                            <span class="cacul" :num="goods.cartDetailId">{{goods.number}}</span>
                            <span class="mark" @click="numAdd(goods.number)"></span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="edit" v-if="cartStatus === 'edit'">
                <label>
                    <input type="checkbox" name="allRadio" class="disN" @click="allCheck($event)">
                    <b></b>
                    <span>全选</span>
                </label>
                <span class="delet">删除(3)</span>
            </div>
            <div class="gotopay" v-if="cartStatus === 'account'">
                <label>
                    <input type="checkbox" name="allRadio" class="disN" @click="allCheck($event)">
                    <b></b>
                    <span class="marginR40">全选</span>
                    <span>合计：</span>
                    <span class="sum">￥{{sumPrice.toFixed(2)}}</span>
                </label>
                <span class="delet" @click="cauSum">去结算({{totalNumber}})</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {     
    },
    name: "life",
    data() {
        return {
            cartStatus:"account",  //购物车状态，account结算，edit删除编辑状态
            cartShops: [],  //店铺列表
            sumPrice:0,  //合计金额
            totalNumber: 0, //总数
            shopList:[],  //店铺列表
            goodsList:[],  //商品列表
        };
    },
    watch: {   
    },
    mounted() {
        this.getCartDetail();                     
    },
    methods: {
        //购物车列表
        getCartDetail: function(){
            this.$http.get("api/product/v1/getCartDetail").then( res => {
                if(res.data.code === 200){
                    //console.log(res.data.data)
                    this.cartShops = res.data.data.cartShops;
                }else{
                    Toast(res.data.msg);
                }
            }).catch( error => {
                console.log(error)
            })
        },
        //商品选择
        goodsCkeck: function(event,goodsList,shopList,shopId){                                 
            //商品列表+-，店铺是否checked(店铺列表+-),全选是否checked
            var input = document.getElementsByTagName('input')
            if(event.currentTarget.checked){
                this.goodsList.push(String(event.currentTarget.value));
                //如果店铺内所有商品全选，店铺选中
                var newArr = this.goodsList;
                var tt = goodsList.every(function(itemValue){
                    return (newArr.indexOf(String(itemValue.cartDetailId)) != -1)
                })
                if(tt){
                    //店铺内全选,店铺checked,店铺列表+
                    for(var i = 0;i<input.length;i++){
                        if(input[i].value == shopId){
                            input[i].checked = true;
                        }
                    }
                    this.shopList.push(String(shopId)); //防止shopid是number类型造成麻烦
                    //如果所有店铺都全选，则全选按钮checked
                    if(this.shopList.length === shopList.length){
                        //所有店铺全选
                        for(var i = 0;i<input.length;i++){
                            if(input[i].name == 'allRadio'){
                                input[i].checked = true;
                            }
                        }
                    }
                }
            }else{
                //商品列表--
                this.goodsList.splice(this.goodsList.indexOf(event.currentTarget.value),1)
                //如果店铺checked，则取消，店铺列表--
                for(var i = 0;i<input.length;i++){
                    if(input[i].value == shopId){
                        if(input[i].checked){
                            input[i].checked = false;
                            this.shopList.splice(this.shopList.indexOf(String(shopId)),1); //防止shopid是number类型造成麻烦
                        }
                    }
                    //任意一个不选，全选取消
                    if(input[i].name == 'allRadio'){
                        input[i].checked = false;
                    }
                }
            }
            //计算总价和数量
            this.caculate();
        },
        //店铺选择
        shopCheck: function(event,shopList){
            //店铺选中则对应商品全选，否则全不选
            //console.log(event.currentTarget)
            var input = document.getElementsByTagName('input')
            if(event.currentTarget.checked){
                //店铺列表+，店铺checked,店铺内商品全checked，商品列表++
                //console.log(this.shopList)
                this.shopList.push(String(event.currentTarget.value));
                //店铺内商品全checked
                for(var i = 0;i<input.length;i++){
                    if(input[i].getAttribute('dataId') == event.currentTarget.value){
                        //将没有选中的checked,并加入列表，去重
                        if(!input[i].checked){
                            input[i].checked = true;
                            //商品列表++
                            this.goodsList.push(String(input[i].value))
                        }
                    }
                }
                //所有店铺全选
                if(this.shopList.length === shopList.length){
                    for(var i = 0;i<input.length;i++){
                        if(input[i].name == 'allRadio'){
                            input[i].checked = true;
                        }
                    }
                }
            }else{
                //店铺取消checked,店铺列表--，店铺内所有商品取消checked,商品列表--
                this.shopList.splice(this.shopList.indexOf(String(event.currentTarget.value)),1);
                //店铺内所有商品取消checked
                for(var i = 0;i<input.length;i++){
                    if(input[i].getAttribute('dataId') == event.currentTarget.value){
                        input[i].checked = false;
                        //商品列表--
                        this.goodsList.splice(this.goodsList.indexOf(input[i].value),1);
                    }
                    //任意一个不选，全选取消
                    if(input[i].name == 'allRadio'){
                        input[i].checked = false;
                    }
                }
            }
            //计算总价和数量
            this.caculate();
        },
        //所有全选
        allCheck: function(event){
            var input = document.getElementsByTagName('input')
            if(event.currentTarget.checked){
                //全选checked,所有店铺checked,店铺列表++,所有商品checked,商品列表++
                for(var i = 0;i<input.length;i++){
                    //去重
                    if(!input[i].checked){
                        input[i].checked = true;
                        if(input[i].name == 'shopRadio'){
                            this.shopList.push(String(input[i].value))
                        }
                        if(input[i].name == 'goodRadio'){
                            this.goodsList.push(String(input[i].value))
                        }
                    }
                }
            }else{
                //全不选取消checked,店铺全部取消checked,店铺列表清空，所有商品取消checked,商品列表清空
                for(var i = 0;i<input.length;i++){
                    input[i].checked = false;
                    this.shopList = [];
                    this.goodsList = [];
                }
            }
            //计算总价和数量
            this.caculate();
        },
        //计算总金额总数量
        caculate: function(){
            var input = document.getElementsByTagName('input');
            var newArr = [];
            for(var i = 0;i<input.length;i++){
                if(input[i].name == 'goodRadio' && input[i].checked){
                    var num = input[i].parentNode.parentNode.children[2].children[2].children[2].innerHTML;
                    newArr.push(
                        {
                            'price': input[i].getAttribute('price'),
                            'num': num
                        }
                    )
                }
            }
            this.totalNumber = newArr.length;
            //归零
            this.sumPrice = 0;
            for(var j = 0,len = newArr.length;j<len;j++){
                this.sumPrice += newArr[j].price * newArr[j].num;
            }
        },
        //数量减小
        numDecrease: function(num){
            //如果当前input选中，则修改数量计算价格，如果当前input没有选中，则修改数量不计算价格
            var spanList = event.currentTarget.parentNode.children;
            for(var i = 0,len = spanList.length;i<len;i++){
                if(spanList[i].getAttribute("class") == 'beeforCacul'){
                    spanList[i].style.display = 'none';
                }
                if(spanList[i].getAttribute("class") == 'cacul'){
                    spanList[i].style.display = 'block';
                    var caculNum = spanList[i].innerHTML;
                    if(caculNum < 2){
                        Toast('宝贝不能再少了哦');
                    }else{
                        caculNum --
                        spanList[i].innerHTML = caculNum;
                    }
                }
            }
            if(event.currentTarget.parentNode.parentNode.parentNode.children[0].children[0].checked){
                this.caculate();
            }
        },
        //数量增加
        numAdd: function(num){
            var spanList = event.currentTarget.parentNode.children;
            //console.log(event.currentTarget.parentNode.children)
            for(var i = 0,len = spanList.length;i<len;i++){
                if(spanList[i].getAttribute("class") == 'beeforCacul'){
                    spanList[i].style.display = 'none';
                }
                if(spanList[i].getAttribute("class") == 'cacul'){
                    spanList[i].style.display = 'block';
                    var caculNum = spanList[i].innerHTML;
                    caculNum ++;
                    spanList[i].innerHTML = caculNum;
                }
            }
            if(event.currentTarget.parentNode.parentNode.parentNode.children[0].children[0].checked){
                this.caculate();
            }
        },
        //去结算
        cauSum:function(){
            if(this.sumPrice === 0){
                Toast('您还没有选择宝贝哦');
            }else{
                this.$router.push('/cart/order')
            }
        },
    }
};
</script>

<style scoped>
</style>
