import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'
Vue.use(Vuex)

const wrongAnswer = new Set([]);
export default new Vuex.Store({
  state: {
    wrongAnswer,
    questions: []
  },
  mutations: {
    countWrong(state, payload) {
      state.wrongAnswer.add(payload)
    },
    clearAnswer(state) {
      state.wrongAnswer.clear();
    },
    setQuestions(state, payload) {
      state.questions = payload
    }
  },
  actions: {
    async updateValue({
      commit
    }) {
      let result = await api.getQuestionRandom();
      commit('setQuestions', result.data.rows);
    }
  }
})