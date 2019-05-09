<template>
  <div>
    <div class="title">
      {{ this.title }}
    </div>
    <div class="content">
      <ul>
        <li><span class="main-title">卢龙县情简介</span></li>
        <li>卢龙县位于河北省东北部，属秦皇岛市下辖县，总面
          积960平方公里，是祖国国土面积的万分之一。卢龙西隔青
          龙河、滦河与唐山市的迁安、滦县隔河相望，南接昌黎、东
          临抚宁、北隔长城与青龙为邻。卢龙是千年古县，也是秦皇
          岛市最有特色的县。</li>
      </ul>
      <!--  -->

    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="less" scoped>
.title {
  box-sizing: border-box;
  font-size: 5rem;
  color: white;
  height: 7vh;
  line-height: 7vh;
  padding-left: 5vw;
  background: #fa6d6b;
  position: sticky;
  top: 0;
  left: 0;
}
.content {
  font-size: 3rem;
  flex-direction: column;
  text-indent: 6rem;
  li {
    text-align: center;
    margin-bottom: 1rem;
    &:first-child {
      margin-top: 2rem;
      text-indent: 0;
    }
    .main-title {
      // font-size: 3rem;
      color: rgb(235, 26, 22);
      margin: 2vh auto 0 auto;
    }
  }
}
</style>