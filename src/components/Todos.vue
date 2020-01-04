<template>
    <div>
        <div v-for="(todo) in todosFilter" :key="todo.id">
             <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>
        </div>
        <div class="extra-container">
            <TodoCheckAll :anyRemaining='anyRemaining'></TodoCheckAll>
            <TodoItemRemaining :remaining="remaining"></TodoItemRemaining>
        </div>
        <div class="extra-container">
            <button :class="{active:filter=='all'}" @click="filter='all'">All</button>
            <button :class="{active:filter=='active'}" @click="filter='active'">Active</button>
            <button :class="{active:filter=='completed'}" @click="filter='completed'">Completed</button>
        </div>
        
    
    </div>
</template>

<script>
    import  TodoItem from "./TodoItem";
    import TodoItemRemaining from './TodoItemRemaining';
    import TodoCheckAll from './TodoCheckAll';
    export default {
        name: "Todos",
        data(){
            return{
               filter:'all' 
            }
        },
        components: {
            TodoItem,
            TodoItemRemaining,
            TodoCheckAll
        },
        props:  ["todos"],
        computed:{
            remaining(){
               return this.todos.filter(todo=>!todo.completed).length;
            },
            anyRemaining(){
                return this.remaining!=0;
            },
            // eslint-disable-next-line vue/return-in-computed-property
            todosFilter(){
                if(this.filter=='all'){
                   return this.todos; 
                }
                  else if(this.filter=='active'){
                    return this.todos.filter(todo=>!todo.completed)
                }
                else if(this.filter=='completed'){
                  return this.todos.filter(todo=> todo.completed)
                }
                return this.todos; 
            }
           
        }
    }
</script>


<style lang="stylus" scoped>
    .extra-container{
        display : flex;
    }
    .active{
        background :green;
    }
</style>