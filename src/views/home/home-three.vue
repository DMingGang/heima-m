<template>
  <div class="container">
    <p class="title">{{ data.title }}</p>
    <div class="cover">
      <img
        v-for="(item, index) in data.cover.images"
        :key="index"
        :src="item"
        alt=""
        srcset=""
      />
    </div>
    <div class="bottom">
      <span class="author">{{ data.aut_name }}</span>
      <span class="commont">评论：{{ data.comm_count }}</span>
      <span class="time">{{ data.pubdate | relativeDate }}</span>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
// 2.1. 国际化：导入简体中文语言包
import 'dayjs/locale/zh-cn'
// 3.1. 想要使用相对时间，需要导入插件：RelativeTime
import relativeTime from 'dayjs/plugin/relativeTime'

// 2.2. 国际化：全局使用简体中文
dayjs.locale('zh-cn')
// 3.2. 使用 RelativeTime 插件
dayjs.extend(relativeTime)

export default {
  name: 'HomeListItem0',
  props: {
    data: Object
  },
  filters: {
    relativeDate: function (value) {
      return dayjs().to(dayjs(value))
    }
  }

}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 12px;
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
  .title {
    font-size: 20px;
    line-height: 22px;
    margin: 0;
  }

  .cover {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    img {
      object-fit: cover;
      display: block;
      width: 33%;
      height: 67px;
    }
  }

  .bottom {
    margin-top: 12px;
    display: flex;
    font-size: 12px;
    color: #afafaf;

    span {
      margin-right: 16px;
    }
  }
}
</style>
