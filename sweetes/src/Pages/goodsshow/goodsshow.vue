<template>
    <div>
        <show-head :active.sync="active"></show-head>
        <router-view></router-view>
    </div>
</template>
<script>
import goodsshowhead from '../../components/goodsshowhead/goodsshowhead'
export default {
  data () {
    return {
      active: 'westclass'
    }
  },
  components: {
    'show-head': goodsshowhead
  },
  watch: {
    active (newVal) {
      this.$router.push({
        path: `${this.active}`
      })
    }
  }
}
</script>
<style>
</style>
