<template>
  <div>
<van-button class="folling" v-if="!value" @click="isfollow" :loading="loading">+ 关注</van-button>
<van-button class="delfolling" v-else @click="isfollow" :loading="loading">已关注</van-button>
  </div>
</template>

<script>
import { followrarticalAPI, delarticalAPI } from '@/api'
export default {
  props: {
    value: {
      type: Boolean,
      requier: true
    },
    artId: {
      require: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async isfollow() {
      this.loading = true
      if (!this.value) {
        await followrarticalAPI(this.artId)
        this.$emit('input', true)
      } else {
        await delarticalAPI(this.artId)
        this.$emit('input', false)
      }
      this.loading = false
    }
  }
}
</script>

<style lang='scss' scpoed>
.folling{
  /* // flex: 6; */
  height: 30px;
  width:100px;
  border-radius: 20px;
  background:#5095f2;
  // margin-left:150px;
  margin-top: 10px;
  font-size: 14px;
  color:#fff;
  text-align: center;
  line-height: 30px;
}
.delfolling{
  /* // flex: 6; */
  height: 30px;
  width:100px;
  border-radius: 20px;
  background:#fff;
  border:1px solid #ccc;
  // margin-left:150px;
  margin-top: 10px;
  font-size: 14px;
  color:#5095f2;
  text-align: center;
  line-height: 30px;
}
</style>
