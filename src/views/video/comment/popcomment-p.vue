<template>
<div>
  <van-popup :value='value' @input="$emit('input', false)"  position="bottom" :style="{ height: '90%' }">
<van-nav-bar
  title="修改昵称"
  left-text="取消"
  right-text="完成"
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<van-field
      v-model="name"
      rows="2"
      autosize
      type="textarea"
      maxlength="7"
      placeholder="请输入你的用户名"
      show-word-limit
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
      name: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$emit('input', false)
    },
    async onClickRight() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      await PatchchannelAPI({ name: this.name })
      Toast.success('修改成功')
      this.$store.dispatch('Infos')
      this.onClickLeft()
    }
  }
}
</script>

<style lang='scss' scoped>
::v-deep .van-nav-bar__text{
  color: #fff;
}
</style>
