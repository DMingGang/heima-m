import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SearchHistroy: JSON.parse(localStorage.getItem('searchhis')),
    ResultHis: [],
    token: ''
  },
  getters: {
  },
  mutations: {
    changehis(state, payload) {
      if (state.SearchHistroy.includes(payload)) {
        const index = state.SearchHistroy.findIndex((item) => {
          return item === payload
        })
        state.SearchHistroy.splice(index, 1)
      }
      state.SearchHistroy.unshift(payload)
      localStorage.setItem('searchhis', JSON.stringify(state.SearchHistroy))
    },
    alldel(state, payload) {
      state.SearchHistroy = []
      localStorage.setItem('searchhis', JSON.stringify(state.SearchHistroy))
    },
    indexdel(state, payload) {
      state.SearchHistroy.splice(payload, 1)
      localStorage.setItem('searchhis', JSON.stringify(state.SearchHistroy))
    },
    getResultHis(state, payload) {
      state.ResultHis = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
