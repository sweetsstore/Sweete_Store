<template>
<div class="homes">
<home-head></home-head>
<home-chart></home-chart>
<home-nav></home-nav>
<home-new></home-new>
<home-footer></home-footer>
</div>
</template>
<script>
import homehead from '../../components/homehead/homehead'
import homenav from '../../components/homenav/homenav'
import homefooter from '../../components/homefooter/homefooter'
import homechart from '../../components/homechart/homechart'
import homenew from '../../components/homenew/homenew'
export default {
  components: {
    'home-head': homehead,
    'home-nav': homenav,
    'home-footer': homefooter,
    'home-chart': homechart,
    'home-new': homenew
  }
}
</script>
<style scoped="scoped">
*{
    margin:0;
    padding:0;
}
.homes{
    height:0;
    margin:0;
    padding:0;
}
</style>
