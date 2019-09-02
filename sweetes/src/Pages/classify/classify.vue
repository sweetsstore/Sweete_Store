<template slot-scope>
<div class="main">
    <classify-head></classify-head>
    <classify-goods></classify-goods>
    <!-- <bottom-nav></bottom-nav> -->
</div>
</template>
<script>
import classifyhead from '../../components/classifyhead/classifyhead'
import classifygoods from '../../components/classifygoods/classifygoods'
import bottomnav from '../../components/bottomnav/bottomnav'
export default {
  components: {
    'classify-head': classifyhead,
    'classify-goods': classifygoods,
    'bottom-nav': bottomnav
  }
}
</script>
<style scoped="scoped">
.main{
    margin:0;
    padding:0;
}
</style>
