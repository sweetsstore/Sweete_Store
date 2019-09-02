<template>
    <div>
        <show-head></show-head>
        <good-goods :items="items"></good-goods>
    </div>
</template>
<script>
import goodsshowhead from '../../components/goodsshowhead/goodsshowhead'
import goods from '../../components/goods/goods'
import axios from 'axios'
// import qs from 'qs'
export default {
  data () {
    return {
      items: [],
      message: ''
    }
  },
  components: {
    'show-head': goodsshowhead,
    'good-goods': goods
  },
  created () {
    if (this.$route.query.str) {
      this.message = this.$route.query.str
      axios({
        url: '/api/search.action',
        method: 'post',
        params: {str: this.message}
      }).then((res) => {
        this.items = res.data
      })
    }
  }
}
</script>
<style>
</style>
