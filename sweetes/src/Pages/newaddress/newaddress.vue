<template>
    <div class="newaddress">
        <div class="addressBack">
            <div class="addressjiantou">
                <img src="../../assets/img/newaddressimg/tou.png" alt="" class="jiantou" @click="goTo('/personaddress')">
            </div>
            <div class="addressWord">添加收货地址</div>
            <div class="save" @click="save">保存</div>
        </div>
        <input type="text" placeholder="  收货人" ref="person">
        <input type="text" placeholder="  手机号码" ref="tel">
        <select class="se1" @change="option1($event)">
            <option v-for="(op1,index) in ops1" :key="index" :value="op1.id" ref="opt">{{op1.name}}</option>
        </select>
        <select class="se2" @change="option2($event)">
            <option v-for="(op2,index) in ops2" :key="index" :value="op2.id" ref="opt">{{op2.name}}</option>
        </select>
        <select class="se3" @change="option3($event)">
            <option v-for="(op3,index) in ops3" :key="index" :value="op3.id" ref="opt">{{op3.name}}</option>
        </select>
        <textarea placeholder="详细地址:如街道，社区等" ref="address"></textarea>
        <!-- user_Address -->
        <div class="empty"></div>
        <div class="addressfoot">
            <div>设为默认地址</div>
            <div>
              <input type="checkbox" @click="choose">
            </div>
        </div>
    </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    return {
      def: 0,
      id: 0,
      ops1: [],
      ops2: [],
      ops3: [],
      o1: 0,
      o2: 0,
      o3: 0
    }
  },
  created () {
    this.$http.post('/api/area/provinceQuery.action', qs.stringify({
      parentid: this.id
    })
    ).then(res => {
      console.log(res.data)
      this.ops1 = res.data
    })
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    },
    option1 (event) {
      this.o1 = parseInt(event.target.value)
      this.$http.post('/api/area/CityQuery.action', qs.stringify({
        parentid: this.o1
      })
      ).then(res => {
        console.log(res.data)
        this.ops2 = res.data
      })
    },
    option2 (event) {
      if (this.o2) {
        this.o2 = parseInt(event.target.value)
      } else {
        this.o2 = 2
      }
      console.log(this.o2)
      this.$http.post('/api/area/countyQuery.action', qs.stringify({
        parentid: this.o2
      })
      ).then(res => {
        console.log(res.data)
        this.ops3 = res.data
      })
    },
    option3 (event) {
      this.o3 = parseInt(event.target.value)
      console.log(this.o3)
    },
    choose () {
      if (this.def) {
        this.def = 0
      } else {
        this.def = 1
      }
      console.log(this.def)
      console.log(this.ops1)
    },
    op2 () {
      this.$http.post('/api/area/CityQuery.action', qs.stringify({
        parentid: this.o3
      })
      ).then(res => {
        console.log(res)
      })
    },
    save () {
      console.log(this.$refs.person.value)
      console.log(this.$refs.tel.value)
      console.log(this.$refs.address.value)
      console.log(this.def)
      console.log(this.o1)
      console.log(this.o2)
      console.log(this.o3)
      this.$http.post('/api/area/addAddr.action', qs.stringify({
        user_Addr_Name: this.$refs.person.value,
        user_Addr_Num: this.$refs.tel.value,
        user_Address: this.$refs.address.value,
        user_Addr_Defaddr: this.def,
        phidden: this.o1,
        chidden: this.o2,
        dhidden: this.o3
      })
      ).then(res => {
        console.log(res)
      })
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
.newaddress>input{
    display: block;
    width: 100%;
    height: 3rem;
    border: 0;
    padding: 0;
    border-bottom: 1px solid #e6e7eb;
    outline: none;
}
select{
    width: 32%;
    height: 2rem;
    border: 0;
    padding: 0;
    margin: 0;
    size: 6rem;
    -webkit-appearance: none;   /* google */
    -moz-appearance: none;  /* firefox */
    appearance: none;       /* IE */
    border-right: 1px solid #e6e7eb;
}
option{
    text-decoration: none;
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
    border-bottom: 1px solid #e6e7eb;
}
.addressfoot div:nth-child(1){
    width: 42%;
    height: 2rem;
    font-size: .8rem;
    position: absolute;
    left: 2%;
    line-height: 2rem;
}
.addressfoot div:nth-child(2)>input{
    width: 10%;
    height: 1.4rem;
    position: absolute;
    top: .3rem;
    right: 2%;
    margin: 0;
}
</style>
