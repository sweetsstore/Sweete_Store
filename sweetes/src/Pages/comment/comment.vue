<template>
<div>
  <div id="top">
        <div id="return" @click="go_back">
            <img alt="" src="./img/fanhui.png">
        </div>
        <div id="write">
            <img alt="" src="./img/tijiao.png">
        </div>
    </div>
    <div id="mid">
        <textarea wrap="soft" cols="50" rows="6" required maxlength="300" placeholder="随便说点什么吧" style="width: 98%;height: 10rem"></textarea>
        <div id="add">
            <img alt="" src="./img/tianjia.png">
            <input id="up_image" type="file" name="file"  multiple @change="change_image"/>
        </div>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    go_back () {
      this.$router.go(-1)
    },
    changeN (i) {
      this.n = i
    },
    change_image (i) {
      var htl = ''
      var upimage = document.querySelector('#up_image')
      var add = document.querySelector('#add')
      var addPicturl = document.querySelector('.addPicturl')
      for (var index = 0; index < upimage.files.length; index++) {
        htl += `<img style="width:100px;height:100px;margin-left:10px" src="${URL.createObjectURL(upimage.files[index])}"></img>`
      }
      if (upimage.files.length > 9) {
        alert('最多可传9张图片')
      } else {
        add.innerHTML = htl
      }
      addPicturl.style.left = 0.241546 + 'rem'
    }
  }
}
</script>

<style>
    body{
        margin: 0;
        padding: 0;
        background-color: whitesmoke;
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
    }
    img:hover{
        opacity: .2;
    }
    #mid{
        display: block;
        position: absolute;
        top: 4rem;
        width: 100%;
    }
    textarea{
        -webkit-appearance: none;
        -moz-appearance: none;
        font-size: 1.2rem;
        border-radius: 4px;
        border: 1px solid #c8cccf;
        color: #6a6f77;
        outline: 0;
    }
    textarea:focus{
        border-color: #66afe9;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
    #add{
        display: block;
        float: left;
    }
</style>
