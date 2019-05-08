<template>
  <div>
    <div class="title">
      {{ this.title }}
    </div>
  </div>
</template>

<script>
export default {
  props:['title']
};
</script>

<style lang="less" scoped>
.title {
    box-sizing: border-box;
    font-size: 5rem;
    color:white;
    height:7vh;
    line-height:7vh;
    padding-left: 5vw; 
    background:#fa6d6b
}
</style>