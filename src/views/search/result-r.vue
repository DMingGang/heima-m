<template>
  <div>
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="(item,index) in list" :key="index" :title="item.title" />
</van-list>
  </div>
</template>

<script>
import { searchAPI } from '@/api/index'
export default {
  props: {
    val: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      page: 1,
      perPage: 10,
      list: [],
      loading: false,
      finished: false
    }
  },
  created () {
    this.$store.commit('changehis', this.val)
  },
  methods: {
    async getreslist() {
      const res = await searchAPI(this.page, this.perPage, this.val)
      this.page++
      // console.log(res)
      this.list.push(...res.results)
      this.loading = false
      if (this.list.length === res.total_count) {
        this.finished = true
      }
    },
    onLoad() {
      this.getreslist()
    }
  }
}
</script>

<style>

</style>
