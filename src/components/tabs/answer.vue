<template>
  <div class="answer-wrapper">
    <v-title :title="this.title"></v-title>
    <div class="question-wrapper">
      <div class="question-content">
        <div v-for="item in 10" :key="item" class="number">第{{item}}题</div>
      </div>
    </div>
  </div>
</template>

<script>
import VTitle from "./title.vue";
export default {
  props: ["title"],
  components: {
    VTitle
  }
};
</script>

<style lang="less" scoped>
.answer-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .question-wrapper {
    flex: 1;
    .question-content {
      height: 4vh;
      overflow: hidden;
      .number {
        float: left;
        width: 800px;
        text-align: center;
        background: #ccc;
        border-radius: 5px;
        font-size: 5rem;
      }
    }
  }
}
</style>