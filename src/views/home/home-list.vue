<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" >

 <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
<div v-for="item in list" :key="item.id" @click="Detailsbtn(item.art_id)">
<HomeOne v-if="item.cover.type === 1" :data = item></HomeOne>
<HomeZero v-else-if="item.cover.type === 0" :arr = item></HomeZero>
<HomeThree v-else :data = item></HomeThree>
</div>
    </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import HomeZero from './home-zero.vue'
import HomeOne from './home-one.vue'
import HomeThree from './home-three.vue'
import { getarticalAPI } from '@/api/index'
export default {
  components: {
    HomeZero,
    HomeOne,
    HomeThree
  },
  props: {
    chandId: {
      type: [String, Number],
      require: true
    }
  },
  data () {
    return {
      loading: false,
      finished: false,
      isfirst: true,
      list: [],
      datatime: Date.now(),
      count: 0,
      isLoading: false
    }
  },
  methods: {
    Detailsbtn(id) {
      this.$router.push('/Details-d/' + id)
    },
    async onLoad() {
      const { results, pre_timestamp: preTimestamp } = await getarticalAPI(this.chandId, this.datatime)
      this.datatime = preTimestamp
      if (this.isfirst) {
        this.list = results
        this.isfirst = false
        console.log(this.list);
      } else {
        this.list.push(...results)
      }
      // console.log(preTimestamp);
      this.loading = false
      if (!preTimestamp) {
        this.finished = true
      }
    },
    onRefresh() {
      this.isfirst = true
      this.datatime = Date.now()
      this.onLoad()
      this.isLoading = false
    }
  }
}
</script>

<style lang = 'scss' scoped>
/* .van-cell{
  height: 300px;
} */
</style>
