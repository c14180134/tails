<script setup>
 import { defineProps,ref } from 'vue';

 const {questionStatus,barPercentage} = defineProps(["questionStatus","barPercentage"])

</script>


<template>
    <header class="mt-5 headerQd">
        <h1 class=" text-5xl font-semibold text-yellow-500 flex ml-9">Question {{ questionStatus }}</h1>
        <div class="bar mt-3 ml-9 mr-9 w-12/12 h-7 border-solid border-cyan-700 border-4 text-left flex">
            <div class="completion bg-white" :style="`width: ${barPercentage * 100}%;`"></div>
        </div>
    </header>
</template>

<style scoped>
.completion{
    height: 100%;
}
</style>
