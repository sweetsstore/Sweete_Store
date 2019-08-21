<template slot-scope>
<div class="main">
    <classify-head></classify-head>
    <classify-goods></classify-goods>
</div>
</template>
<script>
import classifyhead from '../../components/classifyhead/classifyhead'
import classifygoods from '../../components/classifygoods/classifygoods'
export default {
  components: {
    'classify-head': classifyhead,
    'classify-goods': classifygoods
  }
}
</script>
<style scoped="scoped">
*{
    margin:0;
    padding:0;
}
.main{
    position:relative;
}
</style>
