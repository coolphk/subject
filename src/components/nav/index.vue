<template>
  <div class="container">
    <div class="nav">
      <div class="title">
        <span class="back">返回首页</span>
      </div>
      <div class="tabs">
        <ul>
          <li
            v-for="(item,index) in tabs"
            :key="index"
            :id="'li'+index"
            @click="changeActive"
            :class="{activie:index==0}"
          >
            <router-link :to="item.path+'/'+item.desc">{{ item.desc }}</router-link>
          </li>
        </ul>
        <div
          class="indicator"
          :style="indicator"
        ></div>
      </div>
    </div>
    <div class="content">
      <main>
        <router-view />
      </main>
    </div>
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
      tabs: [
        { path: "/xianqing", desc: "县情简介" },
        { path: "/shenghuo", desc: "生活馆介绍" },
        { path: "/weather", desc: "天气预报" },
        { path: "/knowledge", desc: "知识测试" }
      ]
    };
  },
  methods: {
    changeActive(e) {
      this.setIndicator(e.target.offsetWidth, e.target.offsetLeft);
    },
    init() {
      //初始化指示器的坐标位置
      let firstTab = document.querySelectorAll("li")[0];
      this.setIndicator(firstTab.offsetWidth, firstTab.offsetLeft);
    },
    setIndicator(width, left) {
      this.indicator.width = width + 8 + "px";
      this.indicator.left = left - 4 + "px";
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
}
.nav {
  flex: 1;
  background: rgba(230, 39, 39, 0.171);
  box-shadow: 0 0 0.5vh 0.2vh rgba(114, 91, 91, 0.6);
  display: flex;
  margin-top: 3.5185vh;
  color: white;

  .title {
    flex: 0 0 35%;
    overflow: hidden;

    .back {
      display: inline-block;
      font-size: 5rem;
      font-weight: 600;
      margin: 3vh 0 0 12vw;
      letter-spacing: 0.2rem;
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
        margin-right: 1.2vw;
        a {
          color: white;
          font-size: 3.2rem;
        }
      }
    }
    .indicator {
      transition: all 0.3s;
      margin-top: 1vh;
      height: 0.3vh;
      width: 0;
      background: white;
      position: absolute;
      border-radius: 1vw;
    }
  }
}
.content {
  // width:88vw;
  // height: 80vh;
  flex: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  main {
    width: 88vw;
    height: 80vh;
    background: rgb(255, 255, 255);
    box-shadow: 1vw 1vw 0.5vw 0.5vw rgba(0, 0, 0, 0.8);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      height: 1vw;
      width: 1vw;
    }
    &::-webkit-scrollbar-track {
      background-color: #fa6d6b;
    }
    &::-webkit-scrollbar-thumb {
      background-color: red;
      border-radius: 20%;
    }
  }
}
</style>