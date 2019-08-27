<template>
    <div class="myaddress">
        <div class="body1">
            <div class="name">{{ad.user_Addr_Name}}</div>
            <div class="phone">{{ad.user_Addr_Num}}</div>
            <div class="flag" v-show="flag">{{Defaddr}}</div>
        </div>
        <div class="body2">
            <div class="area">{{ad.user_Addr_Pro}}{{ad.user_Addr_City}}{{ad.user_Addr_County}}{{ad.user_Address}}</div>
            <div class="delete" @click="del">删除</div>
        </div>
    </div>
</template>
<script>
import qs from 'qs'
export default {
  props: {
    ad: '',
    index: ''
  },
  data () {
    return {
      Defaddr: '默认',
      user_Address: '',
      flag: true,
      d: ''
    }
  },
  created () {
    if (this.ad.user_Addr_Defaddr === '1') {
      this.flag = true
    } else {
      this.flag = false
    }
  },
  methods: {
    del () {
      console.log(this.ad.user_Addr_Id)
      this.$http.post('/api/mypage/delAddr.action',
        qs.stringify({
          user_Addr_Id: this.ad.user_Addr_Id
        })
      ).then(res => {
        this.d = res.data
        this.$emit('dele', this.d)
      })
    }
  }
}
</script>
<style scoped>
.myaddress{
    width: 100%;
    height: 4rem;
    position: relative;
    margin-top: 3%;
}
.body1{
    width: 95%;
    height: 2rem;
    position: relative;
    left: 5%;
}
.name{
    width: 20%;
    height: 2rem;
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.phone{
    width: 32%;
    height: 2rem;
    position: absolute;
    top: 0;
    left: 24%;
    line-height: 2rem;
    color: #c8c8c8;
}
.flag{
    width: 16%;
    position: absolute;
    top: .2rem;
    right: 24%;
    height: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    background-color: #ffebea;
    color: #dd7454;
    font-size: .933333rem;
    /* display: none; */
}
.body2{
    width: 95%;
    height: 2rem;
    position: relative;
    left: 5%;
}
.area{
    width: 76%;
    height: 2rem;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 2rem;
}
.delete{
    width: 18%;
    height: 2rem;
    position: absolute;
    right: 0;
    border-left: 2px solid #f5f5f5;
    color: #bbbbbb;
    line-height: 2rem;
    text-align: center;
}
</style>
