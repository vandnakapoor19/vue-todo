<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{todo.title}}
            <button @click="$emit('del-todo',todo.id)" class="del">X</button>
            </p>
    </div>
</template>

<script>
export default {
    name:"TodoItem",
    props: ["todo"],
    methods:{
        markComplete(){
            this.todo.completed = !this.todo.completed
        }
    }
}
</script>
<style lang="stylus" scoped>
    .todo-item{
        background: #f4f4f4;
        padding : 2%;
        bordar-bottom : 1px #ccc dotted;
    }
    .is-complete{
        text-decoration: line-through;
    }
</style>