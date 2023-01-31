<script setup>
 import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const {quiz} = defineProps(['quiz'])

</script>

<template>
    <RouterLink v-bind:to="{name:'quizdetail',params:{id:quiz.id}}" class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 mr-4 mb-4">
        <img class="w-full" :src="quiz.img">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ quiz.name }}</div>
            <p class="text-gray-700 text-base">
                {{ quiz.questions.length }}
            </p>
        </div>
    
    </RouterLink>
</template>