<template>
    <div> <button v-if="showCompletedButton" @click="clearCompleted">Clear Completed</button> </div>
</template>

<script>
export default {
    name:'TodoClearCompleted',
   computed:{
       showCompletedButton(){
           return this.$store.getters.showCompletedButton;
       }
   },
   methods:{
       clearCompleted(){
           this.$store.commit('clearCompleted');
       }
   }
}
</script>