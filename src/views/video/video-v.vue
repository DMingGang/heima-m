<template>
  <div>
    <div class="bgc" v-if="!$store.state.token">
      <img src="@/assets/images/mobile.png" alt="">
      <p @click='loginbtn'>登录</p>
    </div>
    <div v-else class="login-box">
      <div class="left">
        <img class="avatar" :src="$store.state.userInfo.photo" alt="" />
        <span class="name">{{ $store.state.userInfo.name }}</span>
      </div>
      <van-button class="right" round type="info">编辑资料</van-button>
    </div>

    <van-button v-if="$store.state.token" type="danger" size="large"
    @click="signOut"
    >
      退出登录
    </van-button>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  methods: {
    loginbtn() {
      this.$router.push('/login')
    },
    signOut() {
      Dialog.confirm({
        title: '警告',
        message: '确定退出？'
      })
        .then(() => {
        // on confirm
          this.$store.commit('signOut')
        })
        .catch(() => {
        // on cancel
        })
    }
  }
}
</script>

<style lang='scss' scoped>
.bgc{
  width: 100%;
  height: 200px;
  background-image: url('~@/assets/images/banner.png');
  text-align: center;
  line-height: 200px;
}
img{
  width:60px
}
p{
  color: #fff;
  margin-top: -160px;
  font-size: 16px;
}
.login-box {
    background-image: url('~@/assets/images/banner.png');
    height: 188px;
    display: flex;
    padding: 0 18px;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      .avatar {
        width: 66px;
        height: 66px;
        border-radius: 50%;
        border: 2px solid white;
      }

      .name {
        color: white;
        font-size: 16px;
        margin-left: 12px;
      }
    }

    .right {
      height: 28px;
      background: white;
      color: #333;
      font-size: 12px;
    }
  }
</style>
