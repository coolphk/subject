<template>
    <div>
        <v-title title="答案展示"></v-title>
        <ul class="wrapper">
            <li v-for="(item,index) in this.$store.state.wrongAnswer" :key="index">
                <div class="number">题目{{index+1}}</div>
                <div class="question-title">{{item.questionTitle}}</div>
                <div
                        class="answer"
                        v-for="(value,key) in JSON.parse(item.answer)"
                        :key="key"
                        :style="{color:(item.rightAnswer==key?'red':'')}"
                >{{key.substring(3)}}、{{value}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    // import mixins from "@/mixin";
    import VTitle from "./title";

    export default {
        data() {
            return {
                wrong: {}
            };
        },
        components: {
            VTitle
        }
    };
</script>

<style lang="less" scoped>
    li {
        font-size: 3rem;
        font-style: normal;
        list-style: none;
    }

    .wrapper {
        padding: 0 5vw;
    }

    .question-title {
        text-indent: 4vw;
        line-height: 4vh;
        margin-bottom: 2vh;
    }

    .number {
        margin: 2vh auto 1vh auto;
        width: 80%;
        text-align: center;
        background: #cccccccc;
        border-radius: 5px;
        font-size: 4rem;
        padding: 1rem;
    }

    .answer {
        margin-top: 2vh;
    }
</style>
