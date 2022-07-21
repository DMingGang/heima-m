<template>
  <div>
    <van-popup
      position="bottom"
      :style="{ height: '20%' }"
      :value='value'
      @input="$emit('input', false)"
      >
      <div class="box">
      <van-field
        class="commit"
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="请输入评论"
        show-word-limit
      />

      <van-button
        type="primary"
        size="mini"
        :disabled="!message"
        @click="onCommit"
        >发布</van-button
      >
    </div>
      </van-popup>
  </div>
</template>

<script>
import { PostcommentAPI } from '@/api/index'
import { Toast } from 'vant'
export default {
  props: {
    value: {
      type: Boolean,
      require: true
    },
    target: {
      type: String,
      require: true
    },
    comId: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    async onCommit() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      });
      const res = await PostcommentAPI(this.target, this.message, this.$route.params.id)
      console.log(res);
      this.message = ''
      Toast.success('提交成功')
      this.$emit('input', false)
      this.$emit('addcomment', res.new_obj)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  padding: 18px;
  align-items: center;

  .commit {
    background-color: #f5f6fa;
  }

  button {
    width: 60px;
    margin-left: 12px;
  }
}
</style>
