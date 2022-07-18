<template>
   <van-button
    v-if="!value"
    native-type="button"
    size="small"
    type="primary"
    @click = 'sendcode'
  >
    发送验证码
  </van-button>
  <div v-else>{{ s }} s</div>
</template>

<script>
export default {
  name: 'codeBtn',
  props: {
    value: {
      type: Boolean,
      require: true
    }
  },
  data () {
    return {
      s: 60,
      timer: ''
    }
  },
  methods: {
    sendcode() {
      this.$emit('click')
    },
    // 通知父亲可以发送验证码
    sendcodes() {
      this.$emit('sendcodeds')
    },
    stare() {
      this.close()
      this.sendcodes()
      this.timer = setInterval(() => {
        this.s -= 1
        if (this.s === 0) {
          this.close()
        }
      }, 1000);
    },
    close() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
        this.s = 60
        this.$emit('input', false)
      }
    }
  },
  watch: {
    value: {
      handler(value) {
        if (value) {
          this.stare()
        }
      },
      // deep: true,
      immediate: true
    }
  }
}
</script>

<style>

</style>
