<template>
    <div class="newaddress">
        <div class="addressBack">
            <div class="addressjiantou">
                <img src="./newaddressimg/tou.png" alt="" class="jiantou" @click="goTo('/personaddress')">
            </div>
            <div class="addressWord">添加收货地址</div>
            <div class="save" @click="goTo('/personaddress')">保存</div>
        </div>
        <input type="text" placeholder="  收货人">
        <!-- user_Addr_Name -->
        <input type="text" placeholder="  手机号码">
        <!-- user_Addr_Num -->
        <select class="se1">
            <option>湖北省</option>
            <!-- user_Addr_Pro -->
            <option>陕西省</option>
            <option>山西省</option>
            <option>山东省</option>
            <option>湖北省</option>
            <option>陕西省</option>
            <option>山西省</option>
            <option>山东省</option>
            <option>湖北省</option>
            <option>陕西省</option>
            <option>山西省</option>
            <option>山东省</option>
            <option>湖北省</option>
            <option>陕西省</option>
            <option>山西省</option>
            <option>山东省</option>
            <option>湖北省</option>
            <option>陕西省</option>
            <option>山西省</option>
            <option>山东省</option>
        </select>
        <select class="se2">
            <option>西安市</option>
            <option>咸阳市</option>
            <option>渭南市</option>
            <option>汉中市</option>
            <!-- user_Addr_City -->
        </select>
        <select class="se3">
            <option>新城区</option>
            <option>碑林区</option>
            <option>莲湖区</option>
            <option>灞桥区</option>
            <!-- user_Addr_County -->
        </select>
        <textarea placeholder="详细地址:如街道，社区等"></textarea>
        <!-- user_Address -->
        <div class="empty"></div>
        <div class="addressfoot">
            <div>设为默认地址</div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style scoped>
.addressBack{
    width: 100%;
    height: 2rem;
    position: relative;
    top:0;
    background-color: rgba(200, 200, 200, 0.6);
}
.addressjiantou{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .5rem;
    left: .5rem;
}
.addressWord{
    width: 50%;
    height: 1.4rem;
    position: absolute;
    top: .3rem;
    left: 25%;
    font-size: .8rem;
    line-height: 1.4rem;
    text-align: center;
}
.save{
    width: 30%;
    height: 1.4rem;
    position: absolute;
    top: .3rem;
    right: 5%;
    font-size: 0.7rem;
    line-height: 1.4rem;
    text-align: right;
    color: #fd6924;
}
input{
    display: block;
    width: 100%;
    height: 3rem;
    border: 0;
    padding: 0;
    border-bottom: 1px solid #e6e7eb;
    outline: none;
}
select,option{
    width: 30%;
    height: 2rem;
    border: 0;
    padding: 0;
}
textarea{
    display: block;
    width: 100%;
    height: 6rem;
    border: 0;
    padding: 0;
    resize:none;
    border-top: 1px solid #e6e7eb;
    border-bottom: 1px solid #e6e7eb;
}
.empty{
    width: 100%;
    height: .8rem;
    background-color: #f5f5f5;
}
.addressfoot{
    width: 100%;
    height: 2rem;
    position: relative;
}
.addressfoot div{
    width: 42%;
    height: 2rem;
    font-size: .8rem;
    position: absolute;
    left: 8%;
    line-height: 2rem;
}
</style>
