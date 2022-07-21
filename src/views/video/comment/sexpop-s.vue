<template>
<div>
  <van-popup :value='value' @input="$emit('input', false)"  position="bottom" :style="{ height: '40%' }">
<van-picker
  title="选择性别"
  show-toolbar
  :columns="columns"
  @confirm="onConfirm"
  @cancel="onCancel"
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
      name: '',
      columns: ['男', '女']
    }
  },
  methods: {
    async onConfirm(value, index) {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      await PatchchannelAPI({ gender: index })
      Toast.success('修改成功')
      this.$store.dispatch('Infos')
      this.onCancel()
    },
    onCancel() {
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
