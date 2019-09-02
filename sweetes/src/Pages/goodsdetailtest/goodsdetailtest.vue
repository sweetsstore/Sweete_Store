<template>
    <div>
        <h2>---这是商品详情的测试页---</h2>
        <p>这是第{{msg}}号商品</p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  created () {
    if (this.$route.query.id) {
      this.msg = this.$route.query.id
    } else {
      this.msg = this.$route.params.id
    }
  }
}
</script>
<style scoped="scoped">
</style>
