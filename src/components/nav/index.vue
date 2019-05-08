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
        <div
          ref="indicator"
          class="indicator"
          :style="indicator"
        ></div>
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
      indicator: {
        left: this.initLeft, //初始时指示器的坐标
        width: this.initWidth
      },
      initWidth: 0,
      initLeft: 0,
      tabs: ["县情介绍", "生活馆介绍", "天气预报", "知识测试"]
    };
  },
  methods: {
    changeActive(e) {
      this.setIndicator(e.target.offsetWidth,e.target.offsetLeft);
    },
    init() {
      //初始化指示器的坐标位置
      var firstTab = document.getElementsByClassName("active")[0];
      this.setIndicator(firstTab.offsetWidth, firstTab.offsetLeft);
    },
    setIndicator(width, left) {
      this.indicator.width = width + "px";
      this.indicator.left = left + "px";
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
  box-shadow: 0px 0px 5px 3px rgba(114, 91, 91, 0.4);
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
  border:black 1px solid;
}
</style>