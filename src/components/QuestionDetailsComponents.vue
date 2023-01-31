<template>
    <div class="question-container flex ml-9 mt-5">
        <h1 class="question text-3xl text-white">{{ question.text }}</h1>
    </div>
    <div class="answer-container flex flex-wrap ml-9 mt-4">
        <div v-for="option in question.options" @click="emitSelectedOption(option.isCorrect)" class="option flex max-w-md w-1/2 h-1/5 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mr-8 mb-8">
            <p class="option-label text-3xl items-center content-center self-center ml-3 p-4">{{ option.label }}</p>
            <div class="option-value self-center ml-3 text-2xl">
                {{ option.text }}
            </div>
        </div>
    </div>
</template>

<script setup>
 import { defineProps,defineEmits} from 'vue';
 const {question} = defineProps(['question'])
 const emit = defineEmits(["selectOption"])

 const emitSelectedOption = (isCorrect)=>{
    emit("selectOption",isCorrect)
 }
</script>