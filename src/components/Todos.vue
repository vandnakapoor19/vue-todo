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
            <TodoFilter></TodoFilter>  
        </div>
        <div> <TodoClearCompleted :showCompletedButton="showCompletedButton"></TodoClearCompleted></div>
    
    </div>
</template>

<script>
    import { eventBus } from '../main';
    import  TodoItem from "./TodoItem";
    import TodoItemRemaining from './TodoItemRemaining';
    import TodoCheckAll from './TodoCheckAll';
    import TodoFilter from './TodoFiltered';
    import TodoClearCompleted from './TodoClearCompleted';
    
    export default {
        name: "Todos",
        components: {
            TodoItem,
            TodoItemRemaining,
            TodoCheckAll,
            TodoFilter,
            TodoClearCompleted
        },
            data(){
            return{
                filter:'all' 
            }
        },
        props:  ["todos"],
        created(){
            eventBus.$on('filterChanged',(filter)=>this.filter=filter)     
        },
         beforeDestroy(){
            eventBus.$off('filterChanged',(filter)=>this.filter=filter) 
            },
        computed:{  
            remaining(){
               return this.todos.filter(todo=>!todo.completed).length;
            },
            anyRemaining(){
                return this.remaining!=0;
            },
            showCompletedButton(){
                    return this.todos.filter(todo=> todo.completed).length>1
                },
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


<style lang="stylus">
    .extra-container{
        display : flex;
    }
    .active{
        background :green;
    }
</style>