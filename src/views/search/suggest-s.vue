<template>
  <div>
   <van-cell v-for="(item,index) in list" :key="index"  @click="resbtn(item)">
  <!-- <van-cell :title="item" /> -->
  <template #title>
    <div class="custom-title" v-html="changecolor(item)">{{item}}</div>
  </template>
</van-cell>
  </div>
</template>

<script>
import { sugAPI } from '@/api/index'
export default {
  props: ['val'],
  data () {
    return {
      list: [],
      flag: false,
      timer: ''
    }
  },
  methods: {
    async getsuglist(val) {
      const res = await sugAPI(val)
      // console.log(res.options);
      this.list = res.options
    },
    changecolor(item) {
      if (!item) return
      return item.replaceAll(this.val, `<span class='active'>${this.val}</span>`)
    },
    resbtn(val) {
      // console.log(123);
      this.$emit('click', val)
    }
  },
  watch: {
    val: {
      handler() {
        if (this.flag) return
        this.flag = true
        this.timer = setTimeout(() => {
          this.getsuglist(this.val)
          this.flag = false
        }, 500)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang='scss' scoped>
::v-deep .active{
  color:blue
}
</style>
