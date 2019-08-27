<template>
    <div class="attention">
        <div class="store_sign">
            <img src="../../../assets/img/attentionimg/dianpu.png" alt="">
        </div>
        <div class="storename">{{ad.shop_Name}}
            <span @click="del">取消关注</span>
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
      d: ''
    }
  },
  create () {
    console.log(this.ad)
  },
  methods: {
    del () {
      console.log(this.ad.shop_Id)
      this.$http.post('/api/mypage/delShops.action',
        qs.stringify({
          shop_Id: this.ad.shop_Id
        })
      ).then(res => {
        if (res.data === 'ok') {
          this.d = res.data
          this.$emit('dele', this.d)
        }
      })
    }
  }
}
</script>
<style scoped>
.attention{
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid #ccc;
    position: relative;
}
.store_sign{
    width: 3rem;
    height: 3rem;
    position: absolute;
    border-radius: 3rem;
    top: 0.5rem;
    left: 0.5rem;
    background-color: yellow;
}
.store_sign img{
    width: 60%;
    height: 60%;
    margin-top: 20%;
    margin-left: 20%;
}
.storename{
    width: 72%;
    height: 4rem;
    position: absolute;
    right: 0;
    line-height: 4rem;
    font-size: .8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.storename span{
    position: absolute;
    right: 5%;
    color: #ccc;
}
</style>
