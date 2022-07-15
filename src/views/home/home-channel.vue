<template>
  <div class="main">
    <div class="tit">
      <span>我的频道</span>
      <span v-if="isshow" @click="isshow = false">编辑</span>
      <span v-else @click="isshow = true">完成</span>
    </div>
    <div class="my"
     v-for="(item,index) in list"
      :key="item.id"
      :class="{active:index === tabindex}"
      @click="redcolor(index)"
      >
      <van-icon name="close"
      v-if="!isshow && index!==0"
      @click.stop="delbtn(index)"
      />
      <span >{{item.name}}</span>
    </div>
    <div class="tui">频道推荐</div>
    <div class="my"
     v-for="item in tuijian"
      :key="item.id"
      @click="addbtn(item)"
      >
      <span >+{{item.name}}</span>
    </div>
  </div>
</template>

<script>
import { allchannelAPI } from '@/api/index.js'
export default {
  // props: ['list', 'tabindex'],
  props: {
    list: {
      type: Array,
      require: true
    },
    tabindex: {
      type: Number,
      require: true
    }
  },
  data () {
    return {
      isshow: true,
      allchannel: []
    }
  },
  methods: {
    addbtn(item) {
      this.$emit('addbtn', item)
    },
    delbtn(index) {
      this.$emit('delindex', index)
    },
    redcolor(val) {
      if (this.isshow === false) return
      this.$emit('redindex', val)
    },
    async getallchannel() {
      const { channels } = await allchannelAPI()
      console.log(channels);
      this.allchannel = channels
    }
  },
  created () {
    this.getallchannel()
  },
  computed: {
    tuijian() {
      const arr = []
      this.allchannel.forEach((allitem) => {
        let flag = false
        this.list.forEach(mitem => {
          if (allitem.name === mitem.name) {
            flag = true
          }
        })
        if (!flag) {
          arr.push(allitem)
        }
      })
      return arr
    }
  }
}
</script>

<style lang='scss' scoped>
.main{
  padding-top:50px;
  padding-left:10px;
  padding-right:10px;
  .tit{
    display: flex;
    justify-content: space-between;
    span{
      font-size: 18px;
    }
    &>span:nth-child(2){
      padding: 2px 17px;
      font-size: 12px;
      color: red;
      border: 1px solid red;
      border-radius: 50px;
    }
  }
  .my{
    position: relative;
    margin-top: 18px;
    background-color:#e6e6e6;
    display: inline-block;
    width: 21%;
    font-size: 12px;
    text-align: center;
    height:30px;
    line-height: 30px;
    margin-left:10px;
  }
  .tui{
    font-size: 18px;
    margin-top: 15px;
  }
  .active{
    color: red;
  }
}
::v-deep .van-icon{
  position: absolute;
  right: -5px;
  top: -5px;
  font-size: 15px;
  z-index: 999;
}
</style>
