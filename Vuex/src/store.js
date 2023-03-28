import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = '';

const store = new Vuex.Store({
    state: {
        todos: [],
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos
            //這邊的state.todos 是上面的 ，後面的todos 是payload
        },
    },
    actions: {
        fetchTodos(){
            fetch(`${url}/todos`)
            .then(res => res.json())
            .then(todos => {
                store.commit('setTodos', todos);
            })
        },
    },
});

export default store;
