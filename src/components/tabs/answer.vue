<template>
  <div class="answer-wrapper">
    <v-title title="知识测试"></v-title>
    <div class="question-wrapper">
      <div class="slide" ref="slide" style="left:0">
        <div
          class="question-content"
          v-for="(item,index) in questions"
          :key="index"
          :style="{left:(index*100)+'vw'}"
        >
          <div class="number">第{{index+1}}题</div>
          <div class="question">{{item.questionTitle}}</div>
          <div
            class="answer"
            v-for="(value,key) in JSON.parse(item.answer)"
            :key="key"
            @click="choice(key)"
          >
            <label>
              <input type="radio" name="1" id class="a-radio">
              <span class="b-radio"></span>
              {{key.substring(3)}}、{{value}}
            </label>
          </div>
          <div
            class="number"
            v-if="index != questions.length - 1"
            @click="next(index)"
            style="margin-top:4vh"
          >下一题</div>
          <div class="number" v-else @click="showAnswer(index)" style="margin-top:4vh">查看答案</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VTitle from "./title.vue";
import mixin from "@/mixin";
export default {
  mixins: [mixin],
  data() {
    return {
      isAnswer: false, //是否回答
      answer: ""
    };
  },
  methods: {
    choice(key) {
      this.answer = key;
      this.isAnswer = true;
    },
    //点击下一页事件
    next(index) {
        if (!this.isAnswer) {
        alert("请选择答案。");
      } else {
        //此处原来逻辑为：判断是否是正确答案，如果答案错误将此题序号保存至store中
        //
        // this.answer != this.questions[index].rightAnswer &&
          this.$store.commit("countWrong", this.questions[index]);
        let left = -(index + 1) * 100 + "vw";
        this.$refs.slide.style.left = left;
        this.isAnswer = false;
      }
    },
    showAnswer(index) {
      // this.answer != this.questions[index].rightAnswer &&
        this.$store.commit("countWrong", this.questions[index]);
      this.$router.push({ name: "showanswer" });
    }
  },
  components: {
    VTitle
  },
  created() {
    this.$store.commit("clearAnswer");
    this.$store.dispatch("updateValue");
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/variable.less");
@R: 20px;
.answer-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .question-wrapper {
    flex: 1;
    overflow: hidden;
    .slide {
      width: 1000vw;
      position: relative;
      transition: all 0.5s;
      .question-content {
        float: left;
        padding: 4vw 8vw;
        width: 84vw;
        position: absolute;
        .number {
          margin: 1vh auto 0 auto;
          width: 80%;
          text-align: center;
          background: #cccccccc;
          border-radius: 5px;
          font-size: 4rem;
          padding: 1rem;
        }
        .question {
          margin-top: 3vh;
          text-indent: 6.4rem;
          font-size: 3.2rem;
          line-height: 4vh;
        }
        .answer {
          margin-top: 2vh;
          font-size: 3rem;
          /* 单选样式开始 */
          .a-radio {
            display: none;
          }
          .b-radio {
            display: inline-block;
            border: 1px solid @pink;
            width: @R;
            height: @R;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 2vw;
            position: relative;
          }
          .b-radio:before {
            content: "";
            font-size: 0;
            width: @R / 2;
            height: @R / 2;
            background: @pink;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -(@R / 4);
            margin-top: -(@R / 4);
            border-radius: 50%;
            display: none;
          }
          .a-radio:checked ~ .b-radio:before {
            display: block;
          }
          /* 单选样式结束 */
        }
      }
    }
  }
}
</style>