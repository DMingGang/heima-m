<template>
<div>
  <van-popup :value='value' @input="$emit('input', false)"  position="bottom" :style="{ height: '90%' }">
<van-datetime-picker
  v-model="currentDate"
  type="date"
  title="选择年月日"
  :min-date="minDate"
  :max-date="maxDate"
  @confirm='confirm'
  @cancel='cancel'
/>
  </van-popup>
</div>
</template>

<script>
import { PatchchannelAPI } from '@/api/index.js'
import { Toast } from 'vant'
export default {
  props: {
    value: {
      type: Boolean,
      require: true
    }
  },
  data () {
    return {
      minDate: new Date(1950, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(this.$store.state.userInfo.birthday)
    }
  },
  methods: {
    async confirm(val) {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      const date = new Date(val)
      const time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      await PatchchannelAPI({ birthday: time })
      Toast.success('修改成功')
      this.$store.dispatch('Infos')
      this.cancel()
    },
    cancel() {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang='scss' scoped>
::v-deep .van-nav-bar__text{
  color: #fff;
}
</style>
