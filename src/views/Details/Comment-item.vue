<template>
  <div class="main">
     <div class="user">
      <div class="image">
        <img :src="commentList.aut_photo" alt="">
      </div>
      <div class="info">
        <span>{{commentList.aut_name}}</span>
        <span>{{commentList.content}}</span>
      </div>
      <div class="good">
        <van-icon name="good-job-o" />赞
      </div>
    </div>
    <div class="times">
      <span>{{commentList.pubdate | relativeDate}}</span>
      <van-button v-if="isShowBtn" type="default" round size="small" @click="$emit('replycomment', commentList)">回复{{commentList.reply_count}}</van-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentList: {
      type: Object,
      require: true
    },
    isShowBtn: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang='scss' scoped>
.user{
  display:flex;
  justify-content: space-between;
}
.image img{
  width:50px;
  height:50px;
  border-radius: 50%;
}
.info{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:2px 0px 15px 10px
}
.info span{
  font-size:12px
}
.good,.times span{
  font-size: 15px;
}
::v-deep .van-button{
  margin-left: 20px;
  margin-top: 1px;
}
.main{
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  padding-right: 10px;
}
</style>
