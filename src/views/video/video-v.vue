<template>
  <div>
    <div class="bgc">
      <img src="@/assets/images/mobile.png" alt="">
      <p @click='loginbtn'>登录</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginbtn() {
      this.$router.push('/login')
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
</style>
