import Vue from 'vue'
import Vuex from 'vuex'
import { loginAPI, logininfoAPI } from '@/api/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SearchHistroy: JSON.parse(localStorage.getItem('searchhis')) || [],
    ResultHis: [],
    token: JSON.parse(localStorage.getItem('mytoken')) || '',
    userInfo: JSON.parse(localStorage.getItem('useInfo')) || {}
  },
  getters: {
    gender(state) {
      return state.userInfo.gender === 0 ? '男' : '女'
    }
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
    },
    settoken(state, newtoken) {
      state.token = newtoken
      localStorage.setItem('mytoken', JSON.stringify(newtoken))
    },
    useInfo(state, newuserInfo) {
      state.userInfo = newuserInfo
      localStorage.setItem('useInfo', JSON.stringify(newuserInfo))
    },
    signOut(state, payload) {
      state.token = payload
      localStorage.removeItem('mytoken')
    }
  },
  actions: {
    async login(context, { mobile, code }) {
      // console.log(context);
      const { token } = await loginAPI(mobile, code)
      // console.log(token);
      context.commit('settoken', token)
      context.dispatch('Infos')
    },
    async Infos(context) {
      const res = await logininfoAPI()
      // console.log(res);
      context.commit('useInfo', res)
    }
  },
  modules: {
  }
})
