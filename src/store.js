import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

// const wrongAnswer = ;
export default new Vuex.Store({
    state: {
        wrongAnswer: '',//所有题
        questions: []
    },
    mutations: {
        countWrong(state, payload) {
            state.wrongAnswer = payload
        },
        clearAnswer(state) {
            state.wrongAnswer = [];
        },
        setQuestions(state, payload) {
            state.questions = payload
        }
    },
    actions: {
        async updateValue({commit}) {
            let result = await api.getQuestionRandom();
            commit('setQuestions', result.data.rows);
        }
    }
})
