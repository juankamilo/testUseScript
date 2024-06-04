<script setup lang="ts">

const show = ref(false)

function loadScript(){
    show.value = true
}
</script>
<template>
    <div>
        <h1>useScript Test</h1>
        <button @click="loadScript">Load Script</button>
        <LoadScript v-if="show" />
    </div>
</template>