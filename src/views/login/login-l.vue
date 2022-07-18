<template>
  <div>
<van-nav-bar title="登录" left-text="返回" left-arrow>
  <template #left>
    <van-icon name="cross" size="18" color="#fff" @click='$router.back()' />
  </template>
</van-nav-bar>
<van-form @submit="onSubmit" ref="formRef">
  <van-field
    v-model="mobile"
    name="mobile"
     left-icon="phone-circle-o"
     placeholder="请输入手机号码"
     :rules="[
      { required: true, message: '请填写手机号码' },
      { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}
    ]"
  />
  <van-field
    v-model="code"
    name="验证码"
    placeholder="请输入验证码"
    :rules="[{ required: true, message: '请填写验证码' }]"
  >
   <template #left-icon>
          <i class="toutiao toutiao-yanzhengma"></i>
        </template>
   <template #button>
         <codeBtn v-model="iscode" @click="refcode" @sendcodeds= 'sendcodeds'></codeBtn>
        </template>
  </van-field>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" >提交</van-button>
  </div>
</van-form>
  </div>
</template>

<script>
import { sendcodedAPI } from '@/api'
import { Toast } from 'vant'
export default {
  data() {
    return {
      mobile: '13911111111',
      code: '246810',
      iscode: false
    }
  },
  methods: {
    async onSubmit() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      await this.$store.dispatch('login', { mobile: this.mobile, code: this.code })
      Toast.success('登录成功');
      this.$router.push('/video-v')
    },
    refcode() {
      this.$refs.formRef.validate('mobile').then(() => {
        console.log('成功')
        this.iscode = true
      }).catch(err => console.error('验证失败' + err))
    },
    sendcodeds() {
      sendcodedAPI(this.mobile)
    }
  }
}
</script>

<style lang='scss' scoped>
::v-deep .van-nav-bar{
  background-color: #5093f4;
   .van-nav-bar__title {
      color: white;
    }
}

</style>
