<template>
  <div class="title">
    {{ this.title }}
    <span
      v-if="this.title=='知识测试'"
      class="desc"
    >共10题&nbsp;&nbsp;&nbsp;&nbsp;所有题目均为单项选择题</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/variable.less");

.title {
  box-sizing: border-box;
  font-size: 4rem;
  color: white;
  height: 7vh;
  line-height: 7vh;
  padding-left: 5vw;
  background: @pink;
  position: sticky;
  font-weight: 600;
}
.desc {
  float: right;
  margin-right: 3vw;
  font-size: 3rem;
  font-weight: 400;
}
</style>