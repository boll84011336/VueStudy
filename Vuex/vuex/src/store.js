import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let LESSONS_URL = 'https://run.mocky.io/v3/eddabb78-bafa-4f07-9582-930594f7d1cf';

const store = new Vuex.Store({
  state: {
    lessons: [],
  },
  mutations: {
    setLessons(state, lessons) {
      state.lessons = lessons;
    },
  },
  actions: {
    fetchLessons({commit}) {
      fetch(LESSONS_URL)
      .then(res => res.json())
      .then(res => {
        commit('setLessons',res.courses) //這邊發出setLessons這mutations，payload=res.courses
      })
    }
  }
});

export default store;
