<template>
  <div>
    <header>
      <span class="goBack" @click="go_back">&lt;</span>
      <span>发表评价</span>
      <span class="publish">发布</span>
    </header>
    <section>
      <p>评价课程</p>
      <div class="comment">
        <span
          v-for="(item, index) in stars"
          :key="index"
          class="icon iconfont star"
          :class="{active:index<=n}"
          @click="changeN(index)"
        >&#xe606;</span>
        <p>{{stars[n]}}</p>
      </div>
      <p>点击评星</p>
      <textarea
        name="info"
        id
        cols="30"
        rows="10"
        :maxlength="150"
        placeholder="请尽可能详尽描述您的学习经历，例如学习成果、老师讲课风格、课程内容等。"
      ></textarea>
      <div class="commentPicturl clearfix">
        <div id="image_box"></div>
        <div class="addPicturl">
          <span class="icon iconfont">&#xe615;</span>
          <p>添加图片</p>
          <input id="up_image" type="file" name="file"  multiple @change="change_image"/>
        </div>
      </div>
    </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      stars: ['不满意', '较差', '一般', '较满意', '非常好'],
      n: 2
    }
  },
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
      var imagebox = document.querySelector('#image_box')
      var addPicturl = document.querySelector('.addPicturl')
      for (var index = 0; index < upimage.files.length; index++) {
        htl += `<img style="width:100px;height:100px;margin-left:10px" src="${URL.createObjectURL(upimage.files[index])}"></img>`
      }
      if (upimage.files.length > 9) {
        alert('最多可传9张图片')
      } else {
        imagebox.innerHTML = htl
      }
      addPicturl.style.left = 0.241546 + 'rem'
    }
  }
}
</script>
<style>
header {
  width: 100%;
  height: 1.207729rem;
  background-color: #eee;
}
header span {
  font: 0.483092rem "微软雅黑";
}
header .goBack {
  padding-left: 0.241546rem;
  font-size: 0.724638rem;
  display: inline-block;
  width: 1.207729rem;
  height: 1.207729rem;
}
header .publish {
  padding-left: 4.347826rem;
  color: #e98c40;
}
section .comment {
  height: 1.690821rem;
  width: 4.347826rem;
  margin: 0 auto;
  padding: 0.483092rem 0 0.120773rem;
}
section .comment .star {
  padding-right: 0.241546rem;
  font-size: 0.724638rem;
  color: #c1c1c1;
}
section {
  width: 100%;
  padding: 0 0.483092rem;
  padding-bottom: 0.483092rem;
}
section > p {
  height: 0.724638rem;
  font-size: 0.483092rem;
  text-align: center;
  line-height: 0.724638rem;
  padding: 0.241546rem 0;
}
section .comment p {
  font-size: 0.410628rem;
  padding-top: 0.241546rem;
  padding-left: 2.415459rem;
  color: #e98c40;
}
section .comment .active {
  color: #e98c40;
}
section textarea {
  width: 100%;
  height: 3.623188rem;
  border: none;
  margin: 0 auto;
  font-size: 0.410628rem;
  margin-top: 0.483092rem;
  text-indent: 2em;
}
section .addPicturl {
  width: 2.415459rem;
  height: 2.415459rem;
  border: 0.024155rem solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
section .commentPicturl{
  position: relative;
   width: 100%;
   border-bottom: .024155rem solid #c1c1c1;
   padding-bottom: .483092rem;
}
section .addPicturl span {
  font-size: 1.207729rem;
  margin: 0 auto;
}
section .addPicturl p {
  font-size: 0.410628rem;
  color: #676565;
}
section .commentPicturl input {
   opacity: 0;
  width: 2.415459rem;
  height: 2.415459rem;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
#image_box{
  float: left;
}
</style>
