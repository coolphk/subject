<template>
  <div class="title">{{ this.title }}</div>
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
</style>