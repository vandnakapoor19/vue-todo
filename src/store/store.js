import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        filter:'all' ,
        todos :  []
    },
    getters:{
        // All Computed functions are going into store getter
        remaining(state){
            return state.todos.filter(todo=>!todo.completed).length;
         },
         anyRemaining(state, getters){
             return getters.remaining!=0;
         },
         showCompletedButton(state){
                 return state.todos.filter(todo=> todo.completed).length>1
             },
         todosFilter(state){
             if(state.filter=='all'){
                 return state.todos; 
             }
             else if(state.filter=='active'){
                 return state.todos.filter(todo=>!todo.completed)
             }
             else if(state.filter=='completed'){
             return state.todos.filter(todo=> todo.completed)
             }
             return state.todos; 
         }
    },
    mutations:{
        clearCompleted(state){
            state.todos =   state.todos.filter(todo=>!todo.completed);
        },
        changeFilter(state,filter){
            state.filter=filter;
        },
        checkAll(state,check){
            state.todos.forEach(todo=> todo.completed=check)
        },
        delTodo(state, id){
            state.todos = state.todos.filter(todo=>todo.id!=id)
        }
    }
});