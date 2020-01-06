<template>
    <div> <button v-if="showCompletedButton" @click="clearCompleted">Clear Completed</button> </div>
</template>

<script>
import { eventBus } from '../main'
export default {
    name:'TodoClearCompleted',
   props:{
       showCompletedButton:{
           type:Boolean
       }
   },
   methods:{
       clearCompleted(){
           eventBus.$emit('clearCompletedTodo');
       }
   }
}
</script>