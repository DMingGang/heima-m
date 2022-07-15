<template>
  <div>
<van-nav-bar title="登录" left-text="返回" left-arrow>
  <template #left>
    <van-icon name="cross" size="18" color="#fff" @click='$router.back()' />
  </template>
</van-nav-bar>
<van-cell-group>
  <van-field
    v-model="value1"
    left-icon="phone-circle-o"
    placeholder="请输入手机号"
    :rules="[
      { required: true, message: '请填写您的手机号码！' },
      { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}
    ]"
      type="tel"
  />
  <van-field
    v-model="value2"
    clearable
    left-icon="music-o"
    placeholder="请输入验证码"
  >
   <template #left-icon>
          <i class="toutiao toutiao-yanzhengma"></i>
        </template>
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
  </van-field>
</van-cell-group>
  <div class="loginbox">登录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: ''
    };
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
::v-deep .toutiao{
      margin-top: 5px;
      display: inline-block;
    }
    .loginbox{
      height: 50px;
      width:80%;
      background-color: #5093f4;
      margin:0 auto;
      border-radius: 5px;
      color:#fff;
      font-size: 12px;
      text-align: center;
      line-height: 50px;
      margin-top: 20px;
    }
</style>
