<template>
<div class="homes">
<home-head :user="user"></home-head>
<home-chart :items="items"></home-chart>
<home-nav></home-nav>
<home-new></home-new>
<home-footer :arrs="arrs"></home-footer>
<bottom-nav></bottom-nav>
</div>
</template>
<script>
import homehead from '../../components/homehead/homehead'
import homenav from '../../components/homenav/homenav'
import homefooter from '../../components/homefooter/homefooter'
import homechart from '../../components/homechart/homechart'
import homenew from '../../components/homenew/homenew'
import bottomnav from '../../components/bottomnav/bottomnav'
import axios from 'axios'
export default {
  data () {
    return {
      items: [],
      arrs: [],
      user: []
    }
  },
  components: {
    'home-head': homehead,
    'home-nav': homenav,
    'home-footer': homefooter,
    'home-chart': homechart,
    'home-new': homenew,
    'bottom-nav': bottomnav
  },
  created () {
    axios({
      url: '/api/find.action',
      method: 'get'
    }).then((res) => {
      console.log(res.data)
      this.items = res.data.indexPic
      this.arrs = res.data.newGoods
      this.user = res.data.userPicture
    }).catch()
  }
}
</script>
<style scoped="scoped">
.homes{
    margin:0;
    padding:0;
}
</style>
