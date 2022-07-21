<template>
  <div class="main">
    <van-nav-bar
  title="黑马头条"
  left-arrow
  color='red'
  @click-left="onClickLeft"
  fixed
/>
  <div class='box'>
    <h6 class="title"> {{userartical.title}}</h6>
    <div class="userbox">
      <div class="info">
        <div class="img">
        <img :src="userartical.aut_photo" alt="">
        <div class="tit"><span> {{userartical.aut_name}}</span>
             <span>{{userartical.pubdate | relativeDate}} </span>
        </div>
        <follow v-model="userartical.is_followed" :artId= 'userartical.aut_id'></follow>
        </div>
      </div>
    </div>
     <div class="texts markdown-body" v-html="userartical.content"></div>
      <div class="body-end">------------- 正文结束 -------------</div>
      <Comment @replycomment='onreplycomment' :addcoment='addcom' :artId = 'this.$route.params.id'></Comment>
  </div>
  <div class="article-bottom">
      <div class="commit">
        <div @click="isShowcommit = true">写评论</div>
      </div>

      <van-icon class="icon chat" name="chat-o" :badge="userartical.comm_count" />

      <van-icon class="icon star" name="star" />

      <van-icon class="icon goods" name="good-job" />
    </div>
    <!-- // 弹出层 -->
    <commit v-if="userartical.art_id" v-model="isShowcommit" :target='userartical.art_id' @addcomment="addcom = $event" />
    <reply :selectcomment='selectcomment' v-model="isShowreply"></reply>
  </div>

</template>

<script>
import { getuserarticalAPI } from '@/api/index.js'
import follow from '@/views/follow/follow-f.vue'
import Comment from '@/views/Details/Comment-c.vue'
import commit from './commit-c.vue'
import reply from './reply-r.vue'
export default {
  components: {
    follow,
    Comment,
    commit,
    reply
  },
  data () {
    return {
      userartical: [],
      isShowcommit: false,
      addcom: null,
      isShowreply: false,
      selectcomment: {}
    }
  },
  created () {
    this.getuserartical()
  },
  methods: {
    onreplycomment(data) {
      this.isShowreply = true
      this.selectcomment = data
      // console.log(this.selectcomment);
    },
    onClickLeft() {
      this.$router.back()
    },
    async getuserartical() {
      const res = await getuserarticalAPI(this.$route.params.id)
      // console.log(res);
      this.userartical = res
    }
  }
}
</script>

<style lang='scss' scoped>
.main{
  padding-bottom: 50px;
}
.body-end{
  font-size: 16px;
  text-align: center;
  color:#ccc;
  margin: 35px 0px 35px 0;
}
.tit span{
  font-size: 12px;
}
.texts{
  margin-top: 30px;
  font-size: 12px;
}
.tit{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:5px 0;
  margin: 0 5px;
  flex: 2;
}
.info {
  display: flex;
  // justify-content: space-between;
}
.userbox{
  // display: flex;
  margin-top:-30px;
}
.box{
  padding:0px 15px;
  margin-top:60px
}
.img{
  display: flex;
  flex:2
}
.img img{
  height: 50px;
  width:50px;
  border-radius: 50px;
}
::v-deep .van-nav-bar__content{
  background-color: #5095f2;
}
::v-deep .van-icon-arrow-left {
      color: white;
    }
::v-deep .van-nav-bar__title{
  color:#fff
}
 .article-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 46px;
    width: 100vw;
    z-index: 10;
    background-color: white;
    border-top: 1px solid #333;
    display: flex;
    padding: 0 18px;
    align-items: center;

    .commit {
      font-size: 14px;
      display: flex;
      align-items: center;
      margin-right: 28px;
      div {
        height: 26px;
        line-height: 26px;
        border: 1px solid #c9c9c9;
        width: 180px;
        text-align: center;
        border-radius: 50px;
      }
    }

    .icon {
      margin-right: 18px;
      display: inline-block;
      font-size: 24px;
    }
  }
</style>
