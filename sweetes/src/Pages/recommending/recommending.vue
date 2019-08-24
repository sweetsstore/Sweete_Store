<template>
<div class="home-page">
    <botton-nav></botton-nav>
    <div class="items">
            <div class="box" v-for="item in items" :key="item.seeds_Id">
                <div class="id" @click="return_id($event)">{{item.seeds_Id}}</div>
                <img class="pic" :src="item.cover">
                <div class="desc"><div class="inner">{{item.title}}</div>
                <div class="photo">
                    <img alt="" :src="item.user_Pic">
                </div>
                <div class="idname">{{item.user_Name}}</div>
                <div class="point">
                    <img alt="" src="./recommendingimg/shoucang.png">
                </div>
                <div class="number">{{item.likes}}</div>
                </div>
                <div class="clear"></div>
            </div>
    </div>
</div>
</template>

<script>
import bottonnav from '../../components/bottomnav/bottomnav'
import axios from 'axios'
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    return_id (e) {
      console.log(e.currentTarget.innerHTML)
      this.message = parseInt(e.currentTarget.innerHTML)
      this.$router.push({
        path: '/recommend',
        query: {
          seeds_Id: this.message
        }
      })
    }
  },
  components: {
    'botton-nav': bottonnav
  },
  created () {
    axios.get('http://116.62.6.6:8080/like.action')
      .then(response => {
        console.log(response)
        this.items = response.data
      })
      .catch(error => {
        console.log(error)
        alert('error')
      })
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
body{
    margin: 0;
    padding: 0;
    background-color: whitesmoke;
    height: calc(92%);
}
.home-page{
    min-height: 100%;
}
/* .items{
    height: 92%;
    width: 100%;
} */
.box{
    display: flex;
    float: left;
    background-color: white;
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
    flex-direction: column;
    width: 49%;
    height: auto;
    margin: calc(.5%);
    /* overflow: auto; */
    border-radius: .053333rem;
}
.id{
    width: .5rem;
    height: .5rem;
    font-size: .45rem;
    opacity: 0;
}
.pic{
    display: block;
    width: 100%;
    /* max-width: 100%;
    min-width: 100%; */
    /* height: 0;
    padding-bottom: 100%; */
}
.pic:hover{
    opacity: .25;
}
.desc{
    position: relative;
    display: flex;
    width: 100%;
    height: 6rem;
}
/* .clear{
    clear: both;
} */
.photo{
    position: absolute;
    display: block;
    top: calc(6.666667rem - 3.5rem);
    width: 2.5rem;
    height: 2.5rem;
}
.photo img{
    width: 2.5rem;
    height: 2.5rem;
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
}
.photo img:hover{
    opacity: .25;
}
.idname{
    display: block;
    position: absolute;
    top: calc(6.666667rem - 3.7rem);
    left: 3rem;
    font-size: .85rem;;
    width: 5rem;
    overflow: hidden;
    height: 1rem;
    margin: calc((2.5rem - 1.5rem)/2);
}
.inner{
    position: absolute;
    display: block;
    font-size: .9rem;
    height: 1.5rem;
    padding-top: .8rem;
    width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
}
.point{
    display: block;
    position: absolute;
    top: calc(6.666667rem - 2rem);
    right: .35rem;
}
.point:hover{
    opacity: .25;
}
.number{
    position: absolute;
    display: block;
    top: calc(6.666667rem - 1.8rem);
    right: 1.55rem;
    font-size: .65rem;
}
</style>
