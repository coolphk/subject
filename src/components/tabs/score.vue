<template>
    <div class="score-container">
        <div class="score-num">
            {{rightNum}}
        </div>
        <div class="score-text">
            {{score}}分
        </div>
        <div class="button" @click="$router.push('/showanswer')">
            查看答案
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                score: 0,
                rightNum: 0
            }
        },
        created() {
            const questions = this.$store.state.questions;
            questions.map( (item)=> {
                if (item.isRight) {
                    this.score += 10;
                    this.rightNum += 1
                }
            }, 0)
        }
    };
</script>

<style lang="less" scoped>
    .score-container {
        height: 100%;
        background: top/100% url("~@/assets/score/score_bg.png") no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        .score-num {
            margin: 650px 0 0 600px;
            font-size: 45px;
            color: #000;
        }
        .score-text {
            font-family: 楷体;
            margin: 100px auto;
            font-weight: 800;
            font-size: 102px;
            color: rgb(213, 25, 31);
        }
        .button {
            width: 400px;
            height:200px;
            line-height:100px;
            margin: 200px auto;
            font-size: 60px;
            color: #fff;
            text-align: center;
            vertical-align: middle;
            background: top/100% url("~@/assets/score/btn_bg.png") no-repeat;
        }
    }
</style>
