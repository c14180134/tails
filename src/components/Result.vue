<template>
    <div class="home bg-slate-600">
    <h1 class="text-3xl font-bold underline bg-red-200">
      Your Results .....
    </h1>
    <h1 class="text-5xl text-white">{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}</h1>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const {quizQuestionLength, numberOfCorrectAnswers} = defineProps(["quizQuestionLength","numberOfCorrectAnswers"])
</script>