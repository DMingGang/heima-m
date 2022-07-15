<template>
  <div class="box">
    <div class="contain">
      <p>{{data.title}}</p>
      <div class="main">
      <span>{{data.aut_name}}</span>
      <span>评论{{data.comm_count}}</span>
      <span>{{data.pubdate | relativeDate}}</span>
      </div>
    </div>

<div class="pic">
  <img :src="data.cover.images[0]" alt="">
</div>
  </div>
</template>

<script>
export default {
  props: ['data']
}

</script>

<style lang='scss' scoped>
.box{
  display: flex;
  // flex-direction: column;
   border-bottom: 1px solid #ccc;
   justify-content: space-between;
}
p{
  font-size: 18px;
  margin-bottom: 0;
}
.contain{
  padding: 0 10px;
  flex:7
}
span{
  font-size: 12px;
  color:rgb(198, 191, 185)
}
span:nth-child(2),
span:nth-child(3){
  margin-left:10px
}
img{
width: 100%;
}
.pic{
  flex:3;
  padding:20px 10px
}
</style>
