import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  addCount(state) {
    state.count += 1;
  },
}

const store = new Vuex.Store({
  state,
  mutations,
});
console.log(store)

export default store;
