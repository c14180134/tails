<script setup>
import q from "@/data/quizes.json"
import QuestionCard from "@/components/QuestionCard.vue"
import { ref,watch  } from "vue";

const quizes= ref(q)
const Search = ref("")

watch(Search, () =>{
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(Search.value.toLowerCase()))
})

</script>
<template>
    <div class="bg-slate-700 w-screen">
        <header class=" flex mt-8 mb-3 ml-5 items-center">
            <h1 class="text-6xl font-black  text-slate-500">Quizes</h1>
            <input v-model="Search" type="text" class=" p-2 rounded-xl bg-gray-300 ml-5" placeholder="Search...">
        </header>
        <div class="option-container m-3 flex flex-wrap">
            <QuestionCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"></QuestionCard>
        </div>
    </div>
</template>

<style scoped>
</style>