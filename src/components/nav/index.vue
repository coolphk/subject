<template>
  <div>
    <div class="nav">
      <div class="title">
        <span class="back">返回首页</span>
      </div>
      <div class="tabs">
        <ul>
          <li
            v-for="(item,index) in tabs"
            :key="item"
            :id="'li'+index"
            :class="index=='0'?'active':''"
            @click="changeActive"
          >{{ item }}</li>
        </ul>
        <div ref="indicator" class="indicator" :style="{width:inWidth}"></div>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  data() {
    return {
      startPos: 0, //初始时指示器的坐标
      inWidth: 0,
      tabs: ["县情介绍", "生活馆介绍", "天气预报", "知识测试"]
    };
  },
  methods: {
    changeActive(e) {
      //获取点击时的dom元素x轴坐标，并且减去开始时坐标，取得位移的距离
      var range = e.target.offsetLeft - this.startPos;
      this.$refs.indicator.style.transform = "translateX(" + range + "px)";
      this.$refs.indicator.style.width = e.target.offsetWidth + "px";
    },
    init() {
      var width = document.getElementsByClassName("active")[0].clientWidth;
      this.inWidth = width + "px";
      //初始化指示器的坐标位置，以备点击选项卡按钮时使用
      this.startPos = this.$refs.indicator.offsetLeft;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less" scoped>
.nav {
  width: 100vw;
  height: 15.333vw;
  background: rgba(230, 39, 39, 0.171);
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.4);
  display: flex;
  margin-top: 0.6667vw;
  color: white;

  .title {
    flex: 0 0 35%;
    overflow: hidden;

    .back {
      display: inline-block;
      font-size: 5rem;
      font-weight: 500;
      margin: 5.3333vw 0 0 12vw;
      letter-spacing: 0.5rem;
    }
  }

  .tabs {
    flex: 0 0 65%;
    padding-top: 4vh;
    padding-left: 4vw;
    position: relative;
    ul {
      li {
        display: inline-block;
        margin-right: 1.5vw;
        font-size: 3rem;
      }
    }
    .indicator {
      transition: all 0.3s;
      margin-top: 0.5vh;
      height: 0.3vh;
      width: 0;
      background: white;
      position: absolute;
    }
  }
}
.content {
  margin: 3vh 3vw;
}
</style>