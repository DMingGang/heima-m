<template>
  <div>
    <!-- 底部四个页面入口 -->
<router-view />
  <van-tabbar v-model="active" route>
  <van-tabbar-item to='/home' class="iconfont icon-shouye" replace> <i>首页</i> </van-tabbar-item>
  <van-tabbar-item to='/my-v' class="iconfont icon-wenda" replace><i>问答</i></van-tabbar-item>
  <van-tabbar-item to='/qa-v' replace class="iconfont icon-shipin"><i>视频</i></van-tabbar-item>
  <van-tabbar-item to='/video-v' replace class="iconfont icon-wode"><i>未登录</i></van-tabbar-item>
  <!-- <van-icon name="manager-o" /> -->
</van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
}
</script>

<style lang="scss" scoped>
::v-deep .van-tabbar-item{
  font-size: 22px;
}

i{
  font-size: 15px;
  font-style: normal;
}
</style>
