<template>
  <div class="split">
    <span class="point"></span>
  </div>
</template>
<script>
export default {
  name: "split"
};
</script>
<style lang="less" scoped>
@import url('../../assets/variable.less');
.split {
  display: flex;
  justify-content: space-between;
  margin: 2vh 0;
  align-items: center;
  .point {
    background: @pink;
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  &::before,
  &::after {
    content: "";
    height: 2px;
    width: 45%;
    background: #fa6d6b;
  }
}
</style>


