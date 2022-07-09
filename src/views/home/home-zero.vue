<template>
  <div class="box">
<p>{{arr.title}}</p>
<div class="main">

  <span>{{arr.aut_name}}</span>
  <span>评论{{arr.comm_count}}</span>
  <span>{{arr.pubdate | relativeDate}}</span>
</div>
  </div>
</template>

<script>
// import '@/Dayjs/index.js'
export default {
  props: ['arr']
}
</script>

<style lang='scss' scoped>
.box{
     border-bottom: 1px solid #ccc;
     padding-bottom: 10px;
}
p{
  font-size: 18px;
  margin-left: 20px;
}
.main{
  padding: 0 20px;
  display: flex;
}
span{
  font-size: 12px;
  color:rgb(198, 191, 185)
}
span:nth-child(2),
span:nth-child(3){
  margin-left:10px
}
</style>
