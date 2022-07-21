<template>
  <div class="main">
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <CommentItem @replycomment="$emit('replycomment', $event)"  v-for="item in list" :key="item.id" :commentList='item'></CommentItem>
</van-list>
  </div>
</template>

<script>
import { totalcommentAPI } from '@/api'
import CommentItem from './Comment-item.vue'
export default {
  props: ['artId', 'addcoment'],
  components: {
    CommentItem
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      offset: '',
      totalcount: ''
    }
  },
  methods: {
    async onLoad() {
      const res = await totalcommentAPI('a', this.artId, this.offset, '10')
      this.offset = res.last_id
      this.loading = false
      this.list.push(...res.results)
      // console.log(res);
      this.finished = this.list.length === res.total_count
      this.totalcount = res.total_count
    }
  },
  watch: {
    addcoment: {
      handler(val) {
        if (!val) return
        this.list.unshift(val)
      },
      deep: true
    }
  }
}
</script>

<style>

</style>
