<template>
    <li class="todo-item" >
        
        <div>
            <input type="checkbox" :value="id" :checked="isCompleted" v-model="isCheck" > 
            <span :class="isCompleted ? 'completed': ''" @click="completed(id)">
            {{ todoData }}
            </span>
            <button @click="del">刪除</button> 
            <!-- 當click時，發出del事件 上層接收到就可以使用del這個func(在app.vue) -->
            <button @click="edit" class="edit">編輯</button>

        </div>
       
        
        {{ id }}
       
        {{ isCheck }}
    </li>
    
</template>

<script>
export default {
    data() {
        return {
            isCheck: [],
        };
    },
    props: ['todoData', 'id', 'isCompleted'],
    methods:{
        // 發出del事件
        del() {
           this.$emit('delete', this.id);
        },
        edit() {
            this.$emit('update', this.id, this.todoData);
        },
        completed(id){
            this.todos[id].isCompleted = !this.todos[id].isCompleted
        }
    }
  

}
</script>

<style>
.todo-item {
    font-size: 1.5em;
    font-family: Arial;
    background-color: wheat;
    margin: 6px 0;
    padding: 4px 8px;
    cursor: pointer;
}

.todo-item:hover{
    background-color: #def;
}

.del {
    margin: 2px 2px;
    color: green;
    border-radius:5px;
    border:none;
    background-color: rgb(251, 255, 0);
    font-size: 24px;
    font-weight: 700;
}

.edit {
    color: #ffffff;
    background-color: skyblue;
    border: 1px solid skyblue;
    margin-right: 10px;
}
</style>