<template>
  <div>
    <v-title :title="this.title"></v-title>
    <div class="content">
      <div class="main-title">卢龙县情简介</div>
      <ul>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;卢龙县位于河北省东北部，属秦皇岛市下辖县，总面
          积960平方公里，是祖国国土面积的万分之一。卢龙西隔青
          龙河、滦河与唐山市的迁安、滦县隔河相望，南接昌黎、东
          临抚宁、北隔长城与青龙为邻。卢龙是千年古县，也是秦皇
          岛市最有特色的县。
          <br>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="first-sentence">源远流长的道德文化。</span>
          卢龙有3600多年的历史，殷商
          时期为孤竹国都，历史的积淀成就了独具特色的孤竹文化。
          《史记·伯夷列传》中记载了伯夷、叔齐“逊国让位”的故事
          和孔子对伯夷叔齐的“求仁得仁”精神的赞美。伯夷叔齐被
          历代帝王及文人雅士所推崇。经过几千年的延续和传承，“
          温良恭俭让”已成为卢龙人的道德操守，塑造了卢龙人吃苦
          耐劳、低调内敛的淳朴民风。
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="first-sentence">自强不息的英雄文化。</span>
          卢龙自古为兵家必争之地。成
          语“老马识途”就出自春秋战国时期齐桓公攻打孤竹国的典
          故。汉武帝时飞将军李广镇守卢龙，发生了“李广射虎”的
          故事，也留下了“精诚所至金石为开”的成语典故。三国时
          期，曹操北征乌桓，在卢龙境内打败乌桓，曹操大获全胜后
          登上了当时隶属卢龙的碣石山，一首《观沧海》直抒胸臆，
          展示了一代政治家的雄才伟略。
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="first-sentence">可歌可泣的革命文化。</span>中国共产党创始人之一的李大
          钊怀着追求真理，救国救民的远大理想，到永平府中学堂即
          现在的卢龙县中学求学，从此踏上了革命的征途。在抗日战
          争期间，卢龙于1938年夏爆发了震惊中外的冀东大暴动，给
          日本帝国主义侵略者以沉重的打击。1942年秋，李运昌所领
          导的八路军进入卢龙，成立了八路军12团红建地方部队。英
          雄的卢龙儿女，英勇善战，涌现了可歌可泣的英雄人物和英
          雄事迹。
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="first-sentence">团结奉献的卢龙精神。</span>为摆脱十年九旱、靠天吃饭的
          境地，在党的坚强领导之下，从上个世纪六十年代初开始，
          历届县委县政府率领全县人民自力更生，接力治水，兴修水
          库121座，配套渠道164.3公里，使全县的水浇地面积达到2
          万公顷，极大改善了农业生产条件。卢龙被授予“全国水利
          建设先进县”。在改造自然的伟大斗争中，形成了“吃苦务
          实，团结奉献”的卢龙精神。
        </li>
      </ul>
      <v-split/>
      <div class="scene">
        <div class="main-title">卢龙风光</div>
        <div class="scene-image">
          <img v-for="item in 8" :key="item" :src="require(`@/assets/scene/0${item}.png`)">
        </div>
      </div>
      <v-split/>
      <div class="main-title">历史典故</div>
      <div class="second-title">《玄鸟生商》</div>
      <ul>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《诗经·商颂·玄鸟》记载，大约4000年前，五帝之一
          帝喾、妃子简狄及妹妹在玄丘水中洗澡，一只黑色的鸟飞过
          来，口中衔着一枚彩色的蛋。姊妹俩正看着，鸟蛋落了下来。
          简狄和妹妹都去捡，简狄手快，先捡到，又怕被妹妹抢去，
          就把鸟蛋含到嘴里，一不留神，咽下去了，可巧就怀孕了。
          之后，生下一个男孩，取名叫契（音谢）。契就是商族的始
          祖，后世尊为玄王。为感念玄鸟（燕子），商族人奉燕子为
          图腾，将居住地大夷山改名为燕山。
        </li>
      </ul>
      <div style="text-align:center">
        <img src="@/assets/scene/timg.png" style="margin:auto" alt>
      </div>
      <v-split/>
      <div class="main-title">红色记忆</div>
      <ul>
        <li>
          <div class="second-title">《高敬之骂城》</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1938年夏，高敬之组织1000多人准备攻打卢龙县城。
          大义凛然的高敬之面对城头上荷枪实弹的军警，破口大骂县
          长牛某的认贼作父卖国求荣，历数日军暴行。他从南门沿东
          城墙根一直骂到北门，累得他口干舌燥。城上的军警不但没
          有向他开枪射击，却给他扔下西瓜、仁丹解渴润喉。在他个
          人声望和各地暴动大军的威慑下，城上军警放下武器，打开
          城门，迎接高敬之进城。
        </li>
        <li>
          <br>
          <div class="second-title">《智取大横河据点》</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1943年10月23日，冀东地区八区队3连在连长刘鹤率
          领下，奇袭卢龙县大横河日军据点。22日下午傍晚，3连指
          战员化装成收秋的农民，把武器捆在秫秸里，或扛着秫秸，
          或赶着驴驮子，或赶着大车，陆续潜入距据点最近的人家院
          内。23日清晨，日军开饭时，在据点给日军做饭的炊事员按
          照与3连事先约定的暗号，打开大门担着水桶出来挑水。3连
          连长刘鹤立刻向全连指战员发出战斗号令。指战员们抓住战
          机，火速出击，冲进据点，用机枪、手榴弹向正在院子里吃
          饭的日军发起猛烈攻击。经过激战，除一名日军逃脱，其余
          30余名日军悉数被歼。此战，八区队缴获迫击炮1门、小炮
          2门，重机枪1挺、步枪30余枝，子弹8000发。
        </li>
        <li>
          <br>
          <div class="second-title">《营山突围战》</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1944年农历三月初五，冀东地区抗日武装八区队的三
          连、四连在队长田川的带领下，准备从范家峪村转移到黄岭
          一带进行抗日活动，途中得知日伪军正从南、东、北三面合
          围扫荡营山抗日根据地。当时有1000多名群众隐藏在此，为
          了保护老百姓免遭日伪军的杀戮，田川决定粉碎敌人的围剿。
          次日天亮前，我八路军部署完毕，7时左右战斗打响，尽管敌
          我力量悬殊，但八路军战士英勇抵抗，击退了敌人一次又一
          次的冲锋，经过10多个小时的激烈战斗，毙敌400人、伤敌
          千余人，我军仅牺牲13人，最终带领群众胜利突围，史称“
          营山突围战”。
        </li>
        <li>
          <br>
          <div class="second-title">《相公庄突围战》</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1945年6月7日晨，八路军第18团（八区队1945年1月
          改编）从卢龙县陈官屯一带向口外转移时，突然发现数千名
          日伪军正从东、西、北三面包抄过来，部队立即分散行动，
          摆脱日伪军，迂回转移。该团3连向东南方向开进时，被日伪
          军发现，3000余日伪军迅速将3连包围在相公庄村。3连迅速
          抢占制高点进行防御。上午，3连打退日伪军两次冲锋。中午
          12时许，日伪军发动第3次进攻。3连据守的村东南“老爷庙”
          被炮火炸塌，3连遂转移至村内一排高房上，集中火力进行防
          御。下午4时40分，日伪军派人送来敦促投降书，限3连在半
          小时内缴械投降。5时10分，日伪军见劝降无效，遂发起第4
          次进攻，并将3连阵地周围堆放的柴禾点燃。3连官兵顽强抵
          抗，日伪军进攻未果。是夜，3连乘日伪军疲惫懈怠之机，由
          指导员带领共产党员组成突击班，秘密向东北方向突围。突
          击班冲出包围后，立即按约定发射信号弹，并引诱日伪军向
          其突围方向调动兵力。日伪军集结兵力追击突击班时，3连其
          余官兵在连长崔祥指挥下，冒充“日军”，排成日军相同队
          形，在日军队后跟进，成功突围。此战，3连牺牲5人（其中
          排长2名）、伤9人，歼灭日伪军500余人。
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VTitle from './title.vue';
import VSplit from "./split.vue";
export default {
  props: ["title"],
  components: {
    VTitle,
    VSplit
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/variable.less");

.main-title {
  font-size: 3rem;
  color: @red;
  margin: 0 auto 2vh auto;
  text-align: center;
}
.second-title {
  font-size: 3rem;
  color: @pink;
  margin: 0 auto 2vh auto;
  text-align: center;
}
.content {
  font-size: 3rem;
  padding: 2vh 3rem;
  li {
    list-style: none;
    margin-bottom: 1vh;
    line-height: 4.5rem;
    .first-sentence {
      color: @pink;
    }
  }

  .scene {
    display: flex;
    flex-direction: column;
    .scene-image {
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