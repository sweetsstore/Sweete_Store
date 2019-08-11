<template>
    <header>
    <img src="../../assets/homeimg/默认头像.png" id="pic">
    <form id="search" action="#" method="GET">
        <input type="text" >
        <button><img src="../../assets/homeimg/search.png" alt="图片走丢了"></button>
    </form>
  </header>
</template>
<script>
export default {}
</script>
<style scoped="scoped">
header{
    width:100%;
    height:3.7rem;
    position:relative;
    top:0.5rem;
}
#pic{
    margin-left:0.5rem;
    display:inline-block;
}
#search{
    height: 3.6rem;
    width:75%;
    position:absolute;
    left:23%;
    top:0;
}
#search input{
    display:inline-block;
    height:1.5rem;
    width: 100%;
    border-radius: 2rem;
    background-color: whitesmoke;
    border:.2px black solid;
    margin-top:1rem;
}
#search button{
    height:.5rem;
    border:none;
    background-color:transparent;
    position:absolute;
    left:90%;
    top:1rem;
}
</style>
