<script>
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoInput: TodoInput,
    TodoItem: TodoItem,
  },
  data() {
    return {
      todos: [{
        id: '',
        text:'',
        isCompleted: false
      }]
    }
  },
  methods: {
    addTodo(text){
      this.todos.push(text);
    },
    // removeTodo(id) {
    //   this.todos.splice(id)
    // }
    deleteTodo(id) {
      this.todos.splice(id);
    },
    updateTodo(id, todoData) {
      this.todos.forEach((todo)=> {
        if(todo.id === id) {
          todo = todoData 
        }
      })
    }
  }
}
</script>


<template>
  <div class="todoBlock">
    <TodoInput @abc="addTodo"/> 
    <!-- 直接傳入method的方法 this.$emit('abc', this.text);
       帶著文字來 所以上面的func可以接text-->
    <ul>
      <TodoItem v-for="(todo, idx) in todos"
                :todoData="todo.text"
                :id="idx"
                :isCompleted="todo.isCompleted"
                @delete="deleteTodo"
                @update="updateTodo"
                
      />
    </ul>
  </div>
</template>
 <!-- @click.native="removeTodo(idx)" -->


<style>
.todoBlock {
  width: 1080px;
  margin: 0 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li{
  margin-bottom: 3px;
}
a {
  color: #42b983;
}
.done{
  text-decoration: line-through;
}

</style>
