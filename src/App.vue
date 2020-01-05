<template>
  <div id="app">
      <Header />
      <AddTodo v-on:add-todo="addTodo"/>
      <Todos v-bind:todos ="todos" v-on:del-todo="delTodo"/>
      <div> <button v-if="showCompletedButton" @click="clearCompleted">Clear Completed</button> </div>
    </div>
</template>

<script>
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import axios from 'axios';
import { eventBus } from './main'

export default {
  name: 'app',
  components: {
    Todos,
    Header,
    AddTodo
  },
  data() {
   return{
     todos :  []
   } 
  },
   computed:{
      showCompletedButton(){
            return this.todos.filter(todo=> todo.completed).length>1
        }
     },
  methods:{
    delTodo(id){
      this.todos = this.todos.filter(todo=>todo.id!=id)
    },
    checkAllTodos(){
        this.todos.forEach(todo=> todo.completed=event.target.checked)
      },
      fiterChanged(){
        console.log('test1111');
      },
    addTodo(newTodo){
      const {title,completed} = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos',
      {
        title, 
        completed
      })
      .then(res => this.todos = [...this.todos,res.data])
      .catch(err =>console.log(err));
    },
    clearCompleted(){
      this.todos = this.todos.filter(todo=>!todo.completed);
    }
  },
  created(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => this.todos=res.data).catch(err => { console.log(err) });
         eventBus.$on('checkAllTodos',(checked)=>this.checkAllTodos(checked));
    }
}
</script>

<style>
*{
  box-sizing:border-box;
  margin: 0;
  padding: 0;
}
body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn{
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover{
  background: #666;
}
</style>
