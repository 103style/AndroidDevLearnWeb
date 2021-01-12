<template>
    <section class="real-app">
        <input 
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="what's next?"
            @keyup.enter="addTodo"
        >
        <item 
            v-for="todo in filteredTodos"
            :key="todo.id"
            :todo="todo"
            @del="deleteTodo"
        />

        <tabs 
            :filter="filter" 
            :todos="todos"
            @toggle="toggleFilter"
            @clearAllCompelted="clearAllCompelted"
        />
    </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
    components:{
        Item,
        Tabs,
    },
    methods:{
        addTodo(e){
            this.todos.unshift({
                id: id++,
                content : e.target.value.trim(),
                completed: false,
            })
            e.target.value = ''
        },
        deleteTodo(id){
            //删除 一个符合 todo.id === id 的节点
            this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
        },
        toggleFilter(state){
            this.filter = state
        },
        clearAllCompelted(){
            this.todos = this.todos.filter(todo => !todo.completed)
        }
    },
    data(){
        return {
            todos:[],
            filter:'all',
        }
    },
    computed:{
        filteredTodos(){
            if(this.filter === 'all'){
                return this.todos
            }

            //是否选中completed按钮
            const completed = this.filter === 'completed'
            //返回过滤之后的列表
            return this.todos.filter(todo => todo.completed === completed)
        }
    }
}
</script>

<style lang="stylus" scoped>
.real-app{
    width 600px
    margin  0 auto
    box-shadow 0 0 5px #666
}
.add-input {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: none;
    outline: none;
    color: inherit;
    box-sizing: border-box;
    font-smoothing: antialiased;
    padding: 10px 16px 10px 36px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>