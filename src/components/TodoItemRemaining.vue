<template>
    <div>
        {{remaining}} Item Left
    </div>
</template>

<script>
export default {
    name:'ItemRemaining',
    computed:{
        remaining(){
            return this.$store.getters.remaining;
        }
    }
}
</script>