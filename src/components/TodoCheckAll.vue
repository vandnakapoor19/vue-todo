<template>
    <div>
        <div><label for=""><input type="checkbox" :checked="!anyRemaining" @change="allChecked">check All</label></div>
    </div>
</template>

<script>
export default {
    name:'todo-checkAll',
    methods:{
       allChecked(){
           this.$store.dispatch('checkAll',event.target.checked);
       } 
    },
    computed:{
        anyRemaining(){
             return this.$store.getters.anyRemaining;
        }
    }
}
</script>