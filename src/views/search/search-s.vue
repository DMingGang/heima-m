<template>
  <div class="main">
     <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
    background="#5094f3"
  />
  <div class="box">
  <history v-if="iswhat === 'his'" @search = 'search'></history>
  <suggest :val='value' v-else-if="iswhat === 'sug'" @click="getres"></suggest>
  <result v-else :val='value' ></result>
  </div>
  </div>
</template>

<script>
import history from './history-h.vue'
import suggest from './suggest-s.vue'
import result from './result-r.vue'
export default {
  components: {
    history,
    suggest,
    result
  },
  data() {
    return {
      value: '',
      his: 'his',
      sug: 'sug',
      res: 'res',
      iswhat: 'his'
    };
  },
  methods: {
    search(val) {
      setTimeout(() => {
        this.iswhat = this.res
      }, 0)
      this.value = val
    },
    onSearch() {
      this.iswhat = this.res
    },
    onCancel() {
      this.$router.push('/home')
    },
    getres(val) {
      // console.log(val);
      this.value = val
      setTimeout(() => {
        this.iswhat = this.res
      }, 0)
    }
  },
  watch: {
    value: {
      handler(val) {
        if (!val) {
          this.iswhat = this.his
        } else {
          this.iswhat = this.sug
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .van-search__action{
  color:#fff
}
::v-deep .van-search{
  position: fixed;
  width: 100%;
}
.box{
  padding-top: 60px;
}
</style>
