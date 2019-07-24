<template>
   <header>
        <img src="./img/默认头像.png" id="pic">
        <form id="search" action="#" method="GET">
            <input type="text" >
            <button class="search"><img src="./img/search.png" alt="" srcset=""></button>
        </form>
    </header>
</template>

<script>
export default {
//   name: 'App'
}
</script>

<style>
        *{
            margin:0;
            padding:0;
        }
        header{
            height: .786667rem;
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding-top: .373333rem;
        }
        #pic{
            padding-top: 2.6rem;
            padding-left: .5rem;
        }
        #search{
            height: .773333rem;
            width: 75%;
            display:flex;
            align-items:center;
            justify-content:space-between;
        }
        #search input{
            height:1.2rem;
            width: 85%;
            border-radius: 0.6rem;
            margin-top:2.6rem;
            background-color:white;
            border:.2px black solid;
        }
        #search button{
            border:none;
            padding:0;
            margin-top:2.6rem;
            background-color:transparent;
        }
</style>
