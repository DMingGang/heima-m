<template>
  <div class="container">
    <!-- bg: #5093F4 -->
    <!-- navbar -->
    <van-nav-bar fixed>
      <template #title>
        <van-button class="search-btn" type="info" @click="searchbtn">
          <template #icon>
            <van-icon color="#ffffff" name="search" />
          </template>
          搜索
        </van-button>
      </template>
    </van-nav-bar>
    <!-- 1 rem === html 根元素的 fontsize -->
    <!-- tabs -->
    <div class="tabs">
      <van-tabs v-model="tabindex" animated>
        <van-tab v-for="item in tuijian" :key="item.id" :title="item.name">
          <!-- 当前 tabs 下对应的 内容 -->
          <!-- pull to refresh -->
          <!-- list -->
          <homelist :chandId = getChannelId ></homelist>
        </van-tab>
      </van-tabs>

      <div class="hamburger-btn">
        <i class="toutiao toutiao-gengduo"></i>
      </div>
    </div>
  </div>
</template>
<script>
import Homelist from './home-list.vue'
import { tuijianAPI } from '@/api/index'
export default {
  components: {
    Homelist
  },
  data () {
    return {
      tuijian: [],
      tabindex: 0
    }
  },
  created () {
    this.tuijianAPIS()
  },
  methods: {
    async tuijianAPIS() {
      const res = await tuijianAPI()
      // console.log(res.channels);
      this.tuijian = res.channels
    },
    searchbtn() {
      this.$router.push('/search')
    }
  },
  computed: {
    getChannelId() {
      return this.tuijian[this.tabindex].id
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .van-nav-bar__content {
  background-color: #5093f4;
}

::v-deep .van-nav-bar__title {
  width: 100%;
}

.search-btn {
  background-color: #6faaf4;
  border-radius: 50px;
  width: 100%;
  height: 32px;
}

.tabs {
  position: relative;
  ::v-deep .van-tab {
    border-right: 1px solid #edeff3;
    min-width: 100px;
    font-size: 14px;
  }
  ::v-deep .van-tabs__nav {
    padding-right: 40px;
  }

  ::v-deep .van-tab--active {
    color: #5093f4;
  }

  ::v-deep .van-tabs__line {
    background-color: #5093f4;
  }

  ::v-deep .van-tabs__wrap {
    border-bottom: 1px solid #cbcbcb;
    position: fixed;
    top: 46px;
    width: 100%;
    left: 0;
    z-index: 10;
  }

  ::v-deep .van-tabs__content {
    padding-top: 92px;
    padding-bottom: 48px;
  }
  .hamburger-btn {
    position: fixed;
    top: 48px;
    z-index: 10;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.88rem;
    height: 1.09333rem;
    background-color: #fff;
  }
}
</style>
