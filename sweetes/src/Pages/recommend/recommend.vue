<template>
<div>
    <home-chart :items="items"></home-chart>
    <div id="top">
        <div id="return" @click="go_back">
            <img alt="" src="./img/fanhui.png">
        </div>
        <div id="write" @click="go_write">
            <img alt="" src="./img/pinglun.png">
        </div>
        <div class="module">
            <div class="picture">
                <img alt="" :src="pic">
            </div>
            <div class="idname">{{idname}}</div>
        </div>
    </div>
    <div id="mid">
        <!-- <div id="pic">
            <img alt="" src="./img/8.jpg" @click="go_goods">
        </div> -->
        <div id="inner">{{inner}}</div>
        <div id="content">
            <div id="date">{{date}}</div>
            <div id="like">
                <img alt="" src="./img/aixin.png">
            </div>
        </div>
        <div id="comment">
            <div class="piece" v-for="item in path" :key="item.seeds_Id">
                <div class="photo">
                    <img alt="" :src="item.user_Pic">
                </div>
                <div class="id">{{item.user_Name}}</div>
                <div class="date">{{item.time}}</div>
                <div class="point">
                    <img alt="" src="./img/dianzan.png">
                    <div class="number">{{item.likes}}</div>
                </div>
                <div class="inner">{{item.comment}}</div>
            </div>
        </div>
    </div>
    <div id="bottom">
        <textarea id="writing" wrap="soft" cols="45" required maxlength="50%" placeholder="在这里发表评论" style="width: 75%;height: 1.5rem" v-model="writeinner"></textarea>
        <button id="btn" @click="go_clear($event)">发送</button>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import homechart from '../../components/homechart/homechart'
export default {
  data () {
    return {
      idname: '',
      pic: '',
      inner: '',
      date: '',
      items: [],
      path: [],
      writeinner: ''
    }
  },
  components: {
    'home-chart': homechart
  },
  created () {
    this.seeds_Id = this.$route.query.seeds_Id
    this.seeds_Id = parseInt(this.seeds_Id)
    console.log(this.seeds_Id)
    axios({
      url: 'http://116.62.6.6:8080/up.action',
      method: 'post',
      params: {seeds_Id: this.seeds_Id}
    }).then((res) => {
      console.log(res)
      this.idname = res.data.up.user_Name
      this.pic = res.data.up.user_Pic
      this.inner = res.data.up.description
      this.date = res.data.up.time
      this.path = res.data.list_Discuss
      this.items = res.data.up.path
    })
      .catch(error => {
        console.log(error)
        alert('error')
      })
    // axios.get('http://116.62.6.6:8080/up.action?seeds_Id=1')
    //   .then(response => {
    //     console.log(response)
    //     this.idname = response.data.up.user_Name
    //     this.pic = response.data.up.user_Pic
    //     this.inner = response.data.up.description
    //     this.date = response.data.up.time
    //     this.path = response.data.list_Discuss
    //     this.items = response.data.up.path
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     alert('error')
    //   })
  },
  methods: {
    go_back () {
      this.$router.go(-1)
    },
    go_write () {
      this.$router.push({path: '/comment'})
    },
    go_goods () {
      this.$router.push({path: '/goodsdetails'})
    },
    go_clear (e) {
      console.log(this.seeds_Id)
      console.log(this.writeinner)
      axios({
        url: 'http://116.62.6.6:8080/writeDiscuss.action',
        method: 'post',
        params: {seeds_Id: this.seeds_Id,
          comment: this.writeinner
        }
      }).then((res) => {
        console.log(res)
        this.$router.go(0)
      })
        .catch(error => {
          console.log(error)
          alert('error')
        })
    }
  }
}
</script>

<style>
    body{
        background-color: white;
        margin: 0;
        padding: 0;
    }
    #top{
        position: absolute;
        top: 0;
        width: 100%;
        height: 3rem;
        background-color: transparent;
    }
    #return{
        display: block;
        float: left;
    }
    #write{
        display: block;
        float: right;
        top: 0;
    }
    img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
    img:hover{
        opacity: .25;
    }
    .module{
        display: flex;
        height: 3rem;
        width: calc(100% - 6.5rem);
        flex-direction: row;
        flex-wrap: wrap;
    }
    .picture{
        display: inline-block;
        margin: .5rem;
        width: 2rem;
        height: 2rem;
    }
    .picture img{
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
    }
    .idname{
        display: inline-block;
        width: 7rem;
        height: 1rem;
        font-size: 1rem;
        overflow: hidden;
        margin: 1rem;
    }
    /* #pic{
        position: absolute;
        top: 3rem;
        width: 100%;
        height: 14rem;
    }
    #pic img{
        max-width: 100%;
        max-height: 14rem;
        min-width: 100%;
        min-height: 14rem;
    } */
    #inner{
        display: block;
        position: absolute;
        top: 17rem;
        font-size: .85rem;
        width: 95%;
        height: 10.71rem;
        overflow: scroll;
        margin: calc((100% - 95%)/2);
        word-wrap: break-word;
        word-break: break-all;
    }
    #content{
        display: inline-block;
        position: absolute;
        top: 29rem;
        width: 100%;
        height: 3rem;
    }
    #date{
        display: block;
        float: left;
        font-size: .75rem;
        margin: calc((3rem - .75rem)/2);
        color: gray;
    }
    #like{
        display: block;
        float: right;
        margin: .5rem;
    }
    #comment{
        position: absolute;
        top: 32rem;
        display: block;
        /* flex-direction: column;
        flex-wrap: wrap; */
        width: 100%;
        height: 100%;
    }
    .piece{
        display: flex;
        margin: calc((100% - 98%)/2);
        width: 98%;
        height: 10.71rem;
        border-radius: 2px;
        background-color: white;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .photo{
        display: inline-block;
        width: 2.5rem;
        height: 10.71rem;
    }
    .photo img{
        height: 2.5rem;
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
    }
    .id{
        display: inline-block;
        width: 5rem;
        height: 1rem;
        font-size: .8rem;
        overflow: hidden;
    }
    .date{
        display: inline-block;
        font-size: .55rem;
        width: 7rem;
    }
    .number{
        display: inline-block;
        position: absolute;
        top: .85rem;
        right: 2.55rem;
        font-size: .25rem;
    }
    .point{
        display: inline-block;
        position: absolute;
        top: 0;
        right: .35rem;
    }
    .inner{
        display: inline-block;
        font-size: 1.2rem;
        width: calc(98% - 2.5rem);
        height: calc(10.71rem - 3rem);
        overflow: hidden;
        word-wrap: break-word;
        word-break: break-all;
    }
    #bottom{
        position: fixed;
        bottom: 0;
        height: 3rem;
        width: 100%;
    }
    #writing{
        display: block;
        float: left;
        margin-top: calc((3rem - 1.5rem)/2);
        margin-left: calc((100% - 95%)/2);
        overflow: scroll;
        border-radius: .5rem;
    }
    textarea:focus{
        border-color: #66afe9;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
    #btn{
        width: calc(17.5%);
        /* margin-left: .5rem; */
        margin-top: calc((3rem - 1.5rem)/2);
        margin-left: calc((100% - 95%)/2);
    }
</style>
