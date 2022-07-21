<template>
  <div>
    <van-popup :value='value' @input="$emit('input', false)" position="bottom" :style="{ height: '80%' }" >
<div class="box">
    <van-nav-bar title="评论的回复">
      <template #left>
        <van-icon name="cross" @click="this.$router.back()"></van-icon>
      </template>
    </van-nav-bar>
  </div>
    <CommentItem class="reply_top" :commentList='selectcomment' :isShowBtn="false"></CommentItem>
    <div class="article-bottom">
      <div class="commit">
        <div @click="isShowcommit = true">写评论</div>
      </div>
    </div>
    <commit v-model="isShowcommit" :target="selectcomment.com_id" :comId='this.$route.params.id'></commit>
     <van-list an-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
    <CommentItem class="reply_top" v-for="item in list" :key="item.id" :commentList='item' :isShowBtn="false"></CommentItem>
     </van-list>
     </van-popup>

  </div>
</template>

<script>
import { totalcommentAPI } from '@/api'
import CommentItem from '@/views/Details/Comment-item.vue'
import commit from './commit-c.vue'
export default {
  components: {
    CommentItem,
    commit
  },
  props: {
    value: {
      type: Boolean,
      require: true
    },
    selectcomment: Object
  },
  data () {
    return {
      list: [],
      show: false,
      isShowcommit: false,
      loading: false,
      finished: false,
      offset: ''
    }
  },
  methods: {
    async onLoad() {
      const res = await totalcommentAPI('c', this.selectcomment.com_id, this.offset, '10')
      this.offset = res.last_id
      this.loading = false
      this.list.push(...res.results)
      console.log(res);
      this.finished = this.list.length === res.total_count
    }
  },
  watch: {
    selectcomment: {
      handler() {
        this.list = []
        this.finished = false
        this.loading = true
        this.onLoad()
      },
      deep: true
    }
  }
}
</script>

<style lang='scss' scoped>
::v-deep .van-icon{
 color:#fff
}
.reply_top {
  padding: 16px;
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
    padding: 0 80px;
    align-items: center;

    .commit {
      font-size: 14px;
      display: flex;
      align-items: center;
      // margin-right: 28px;
      div {
        height: 26px;
        line-height: 26px;
        border: 1px solid #c9c9c9;
        width: 180px;
        text-align: center;
        border-radius: 50px;
      }
    }
  }
</style>
