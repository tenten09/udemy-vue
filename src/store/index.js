import Vue from 'vue';
import Vuex from 'vuex';
import count from "./modules/count";
import getters from "./modules/getters";
import mutations from "./modules/mutation";
import actions from "./modules/actions";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: ""
  },
  getters,
  mutations,
  actions,
  modules: {
    count
  }
});