<template>
    <div class=" bg-slate-600">
        <div v-if="!showResult">
                <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage"></QuizHeader>
            <div>
                <QuestionDetailsComponents :question="quiz.questions[currentQuestionIndex]"
                    @selectOption="onOptionSelected"
                ></QuestionDetailsComponents>
            </div>
            <button  @click="currentQuestionIndex++" class=" bg-yellow-500 text-slate-500 font-semibold rounded-xl text-xl py-2 px-4">Next Question</button>
        </div>
        
        <Result v-if="showResult" :quizQuestionLength="quiz.questions.length"
                :numberOfCorrectAnswers="numberOfCorrectAnswers"></Result>
    </div>
</template>

<script setup>
 import QuizHeader from '@/components/QuizHeader.vue'
 import QuestionDetailsComponents from '@/components/QuestionDetailsComponents.vue';
 import Result from '@/components/Result.vue'
 import { useRoute } from 'vue-router';
 import { ref,watch,computed } from 'vue';
 import quizes from "@/data/quizes.json"

 const Route = useRoute()

 const quizid = parseInt(Route.params.id)

 const quiz = quizes.find(q => q.id === quizid)
 const currentQuestionIndex = ref(0)
 const numberOfCorrectAnswers =  ref(0)
 const showResult = ref(false)

//  const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

//  watch(()=>currentQuestionIndex.value,() =>{
//     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
//  })
 
 const questionStatus = computed(()=>{
    return `${currentQuestionIndex.value}/${quiz.questions.length}`
 })

 const onOptionSelected = (isCorrect) =>{
    if(isCorrect){
        numberOfCorrectAnswers.value++
    }
    if(quiz.questions.length-1 === currentQuestionIndex.value){
        showResult.value=true
    }else{
        currentQuestionIndex.value++
    }
   
 }

 const barPercentage = computed(()=> { return `(${currentQuestionIndex.value/quiz.questions.length})`})


</script>

<style scoped>
</style>