import Vue from 'vue'
import Vuex from 'vuex'
import informationAboutProdjects from "./informationAboutProdjects";
import developmentsProdjects from "./developmentsProdjects";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    informationAboutProdjects,
    developmentsProdjects

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
