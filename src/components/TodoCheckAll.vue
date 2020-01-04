<template>
    <div>
        <div><label for=""><input type="checkbox" :checked="!anyRemaining" @change="allChecked">check All</label></div>
    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
    name:'todo-checkAll',
    props:{
        anyRemaining:{
            type:Boolean,
            required:true
        }
    },
    methods:{
       allChecked(){
           eventBus.$emit('checkAllTodos',this.anyRemaining)
       } 
    }
}
</script>