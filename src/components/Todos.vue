<template>
    <div>
        <div v-for="(todo) in todosFilter" :key="todo.id">
             <TodoItem v-bind:todo="todo" />
        </div>
        <div class="extra-container">
            <TodoCheckAll></TodoCheckAll>
            <TodoItemRemaining></TodoItemRemaining>
        </div>
        <div class="extra-container">
            <TodoFilter></TodoFilter>  
        </div>
        <div> <TodoClearCompleted></TodoClearCompleted></div>
    
    </div>
</template>

<script>
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
        computed:{  
          
            anyRemaining(){
                return this.$store.getters.anyRemaining;
            },
            todosFilter(){
               return this.$store.getters.todosFilter;
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