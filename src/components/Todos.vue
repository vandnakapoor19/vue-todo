<template>
    <div>
        <div v-for="(todo) in todos" :key="todo.id">
             <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>
        </div>
        <div class="extra-container">
            <div><label for=""><input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos">check All</label></div>
            <div>Item Left {{remaining}}</div>
        </div>
    </div>
</template>

<script>
    import  TodoItem from "./TodoItem";
    export default {
        name: "Todos",
        components: {
            TodoItem
        },
        props:  ["todos"],
        computed:{
            remaining(){
               return this.todos.filter(todo=>!todo.completed).length;
            },
            anyRemaining(){
                return this.remaining!=0
            }
        },
        methods:{
            checkAllTodos(){
                this.todos.forEach(todo=> todo.completed=event.target.checked)
            }
        }
    }
</script>


<style lang="stylus" scoped>
    .extra-container{
        display : flex;
    }
</style>