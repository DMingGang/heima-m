<template>
  <div>
    <van-nav-bar
  title="个人信息"
  left-arrow
  @click-left="onClickLeft"
/>
<van-cell-group>
  <van-cell title="头像" is-link @click="onavaclick">
    <div class="all">
      <img :src="$store.state.userInfo.photo" alt="">
    </div>
  </van-cell>
  <van-cell title="昵称" is-link @click="isshowname = true">
    <div class="name">{{$store.state.userInfo.name}}</div>
  </van-cell>
  <van-cell title="性别" is-link @click="isshowsex = true">
    <div class="sex">{{$store.getters.gender}}</div>
  </van-cell>
  <van-cell title="生日" is-link @click="isshowbir = true">
    <div class="birthday">{{$store.state.userInfo.birthday}}</div>
  </van-cell>
  </van-cell-group>
  <popcomment v-model="isshowname"></popcomment>
  <sexpup v-model="isshowsex"></sexpup>
  <birthdaypup v-model="isshowbir"></birthdaypup>
  <!-- // 修改头像 -->
  <input type="file" v-show="false" ref="filebtn" @change="onimgshow">
  <!-- // 头像弹出层 -->
   <van-popup v-model='isshowava' position="bottom" :style="{ height: '100%' }">
     <div class="box">
     <img v-if="isshowava" :src="selectimg" ref='editAvatarRef' alt="">
       <div class="end">
        <span @click="closethis">取消</span>
        <span @click="overthis">完成</span>
       </div>
     </div>
  </van-popup>
  </div>
</template>

<script>
import popcomment from './comment/popcomment-p.vue'
import sexpup from './comment/sexpop-s.vue'
import birthdaypup from './comment/birthdaypup-b.vue'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import { putavaAPI } from '@/api'
import { Toast } from 'vant'
export default {
  components: {
    popcomment,
    sexpup,
    birthdaypup
  },
  data () {
    return {
      isshowname: false,
      isshowsex: false,
      isshowbir: false,
      isshowava: false,
      selectimg: '',
      cropper: null
    }
  },
  methods: {
    onimgshow() {
      const files = this.$refs.filebtn.files
      const selectfile = files[0]
      this.selectimg = URL.createObjectURL(selectfile)
      // console.log(files, selectfile);
      this.isshowava = true
      this.initimage()
    },
    initimage() {
      this.$nextTick(() => {
        this.cropper = new Cropper(this.$refs.editAvatarRef, {
          viewMode: 1, // 只能在裁剪的图片范围内移动
          dragMode: 'move', // 画布和图片都可以移动
          aspectRatio: 1, // 裁剪区默认正方形
          autoCropArea: 0.7, // 自动调整裁剪图片
          cropBoxMovable: false, // 禁止裁剪区移动
          cropBoxResizable: false, // 禁止裁剪区缩放
          background: false // 关闭默认背景
        })
      })
      // console.log(this.cropper)
    },
    closethis() {
      this.isshowava = false
    },
    async overthis() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      this.cropper.getCroppedCanvas().toBlob(async (blob) => {
        const formData = new FormData()
        formData.append('photo', blob)
        await putavaAPI(formData)
        Toast.success('修改成功')
        this.$store.dispatch('Infos')
        this.closethis()
      })
    },
    onavaclick() {
      this.$refs.filebtn.click()
    },
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style lang='scss' scoped>
::v-deep .van-nav-bar{
  background-color: #49a6fa;
  .van-icon{
    color: #fff;
  }
}
 .all img{
    height: 30px;
    width:30px;
    border-radius: 50%;
    margin-left: 130px;
  }
  .box{
    background-color: #333;
    width: 100vw;
    height:100vh;
    img{
      width:100%;
      margin-top: 40%;
    }
    .end{
      width:100%;
      display:flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      span{
      color: #fff;
      font-size: 16px;
      margin: 12px;
    }
    }
  }
</style>
