<template>
  <div>
    <router-view/>
    <van-tabbar v-model="active">
  <van-tabbar-item to='/home-v' icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to='/my-v' icon="search">问答</van-tabbar-item>
  <van-tabbar-item to='/qa-v' icon="friends-o">视频</van-tabbar-item>
  <van-tabbar-item to='/video-v' icon="setting-o">未登录</van-tabbar-item>
</van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 'home'
    };
  }
}
</script>
<style lang="scss">

</style>
