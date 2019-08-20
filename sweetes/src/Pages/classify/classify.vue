<template slot-scope>
<div class="main">
    <classify-head></classify-head>
    <classify-menu></classify-menu>
    <classify-goods></classify-goods>
</div>
</template>
<script>
import classifyhead from '../../components/classifyhead/classifyhead'
import classifymenu from '../../components/classifymenu/classifymenu'
import classifygoods from '../../components/classifygoods/classifygoods'
export default {
  components: {
    'classify-menu': classifymenu,
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
