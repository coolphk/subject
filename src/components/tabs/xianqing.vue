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
          岛市最有特色的县。<br>
        </li>
        <li>
          <span class="first-sentence">源远流长的道德文化。</span>
          卢龙有3600多年的历史，殷商
          时期为孤竹国都，历史的积淀成就了独具特色的孤竹文化。
          《史记·伯夷列传》中记载了伯夷、叔齐“逊国让位”的故事
          和孔子对伯夷叔齐的“求仁得仁”精神的赞美。伯夷叔齐被
          历代帝王及文人雅士所推崇。经过几千年的延续和传承，“
          温良恭俭让”已成为卢龙人的道德操守，塑造了卢龙人吃苦
          耐劳、低调内敛的淳朴民风。</li>
        <li>
          <span class="first-sentence">自强不息的英雄文化。</span>
          卢龙自古为兵家必争之地。成
          语“老马识途”就出自春秋战国时期齐桓公攻打孤竹国的典
          故。汉武帝时飞将军李广镇守卢龙，发生了“李广射虎”的
          故事，也留下了“精诚所至金石为开”的成语典故。三国时
          期，曹操北征乌桓，在卢龙境内打败乌桓，曹操大获全胜后
          登上了当时隶属卢龙的碣石山，一首《观沧海》直抒胸臆，
          展示了一代政治家的雄才伟略。</li>
        <li><span class="first-sentence">可歌可泣的革命文化。</span>中国共产党创始人之一的李大
          钊怀着追求真理，救国救民的远大理想，到永平府中学堂即
          现在的卢龙县中学求学，从此踏上了革命的征途。在抗日战
          争期间，卢龙于1938年夏爆发了震惊中外的冀东大暴动，给
          日本帝国主义侵略者以沉重的打击。1942年秋，李运昌所领
          导的八路军进入卢龙，成立了八路军12团红建地方部队。英
          雄的卢龙儿女，英勇善战，涌现了可歌可泣的英雄人物和英
          雄事迹。</li>
        <li><span class="first-sentence">团结奉献的卢龙精神。</span>为摆脱十年九旱、靠天吃饭的
          境地，在党的坚强领导之下，从上个世纪六十年代初开始，
          历届县委县政府率领全县人民自力更生，接力治水，兴修水
          库121座，配套渠道164.3公里，使全县的水浇地面积达到2
          万公顷，极大改善了农业生产条件。卢龙被授予“全国水利
          建设先进县”。在改造自然的伟大斗争中，形成了“吃苦务
          实，团结奉献”的卢龙精神。</li>
      </ul>
      <!--  -->
      <div class="split">
        <span class="point"></span>
      </div>
      <div class="scene">
        <div class="main-title">
          卢龙风光
        </div>
        <div class="scene-image">
          <img v-for="item in 8" :key="item" :src="require(`@/assets/scene/0${item}.png`)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="less" scoped>
@pink: #fa6d6b;

.title {
  box-sizing: border-box;
  font-size: 5rem;
  color: white;
  height: 7vh;
  line-height: 7vh;
  padding-left: 5vw;
  background: @pink;
  position: sticky;
  top: 0;
  left: 0;
}
.content {
  font-size: 3rem;
  padding: 2vh 3rem;

  .main-title {
    font-size: 3rem;
    color: rgb(235, 26, 22);
    margin: 0 auto;
  }

  li {
    list-style: none;
    margin-bottom: 1vh;

    &:first-child {
      text-align: center;
      margin-top: 2vh;
    }
    &:not(:first-child) {
      text-indent: 3rem;
      line-height: 3rem;
      .first-sentence {
        color: @pink;
      }
    }
  }
  .split {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2vh;
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
  .scene {
    display: flex;
    flex-direction: column;
    .scene-title {
      margin-top: 4vh;
    }
    .scene-image {
      margin-top: 2vh;
      display: flex;
      flex-wrap: wrap;
      img {
        width: 50%;
        height: 50%;
        margin-bottom: 3px;
      }
    }
  }
}
</style>