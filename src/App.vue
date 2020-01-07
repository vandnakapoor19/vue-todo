<template>
  <div id="app">
      <Header />
      <AddTodo v-on:add-todo="addTodo"/>
      <Todos v-bind:todos ="todos"/>
      
    </div>
</template>
<script>
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import axios from 'axios';

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
  methods:{
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
      .then(res => this.$store.state.todos = [...this.$store.state.todos,res.data])
      .catch(err =>console.log(err));
    }
  },
  created(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => this.$store.state.todos=res.data).catch(err => { console.log(err) }); 
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
