<template>
    <div>
        {{remaining}} Item Left
    </div>
</template>

<script>
export default {
    name:'ItemRemaining',
    props:{
        remaining:{
            type:Number,
            required:true
        }
    }
}
</script>