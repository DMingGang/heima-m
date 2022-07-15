<template>
  <div>
    <div class="tit">
      <span>搜索历史</span>
      <div class="del">
        <van-icon name="delete-o" v-show="isshow" @click="iconbtn"/>
        <span class="all" v-show='isshow === false' @click="alldel">全部删除</span>
        <span class="all"  v-show='isshow === false' @click="fished">完成</span>
      </div>
    </div>
<van-cell v-for="(item,index) in this.$store.state.SearchHistroy" :key="index" :title="item" @click="resbtn(item)">
  <van-icon v-show='isshow === false' name="close" @click="indexdel(index)" />
</van-cell>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow: true
    }
  },
  methods: {
    iconbtn() {
      this.isshow = !this.isshow
    },
    fished() {
      this.isshow = !this.isshow
    },
    alldel() {
      this.$store.commit('alldel')
    },
    indexdel(index) {
      this.$store.commit('indexdel', index)
    },
    resbtn(val) {
      this.$store.commit('getResultHis', val)
      console.log(val);
      this.$emit('search', val)
    }
  }
}
</script>

<style lang='scss' scoped>
.tit{
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  background-color:#fff;
  padding:0px 17px;
  border-bottom:1px solid #f5f6f7
}
.all{
  margin-left: 15px;
}
</style>
