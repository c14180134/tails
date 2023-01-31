<template>
    <main class=" bg-slate-800">
        <div class="overlay absolute z-10 min-w-max h-screen bg-stone-700 bg-opacity-80" v-if="showModal">
            <div class="modal-note relative p-8 flex flex-col w-4/6 bg-slate-600 mt-16">
                <textarea name="newnote" v-model="newNote" id="newnote" rows="10" cols="30" class=" border"></textarea>
                <p v-if="errorM" class=" text-white">{{ errorM }}</p>
                <button class=" bg-gray-800 font-bold text-yellow-500 p-4 text-2xl mt-3" @click="addNote">Add Note</button>
                <button class=" bg-red-700 font-bold text-white p-4 text-2xl mt-2" @click="showModal = false">Close</button>
            </div>
            
        </div>

        <header class="flex place-content-between mb-5 items-center mt-9 ml-6 mr-6">
            <h1 class=" text-7xl font-black  text-yellow-500">Note</h1>
            <button class=" bg-yellow-500 hover:bg-yellow-400 text-slate-800 font-bold py-2 px-4 rounded-full" 
            @click="showModal = true">
                    +
            </button>
        </header>
        <div class="card-container m-6 flex">
            
            <div v-for="i in notes" :key="i.id" class="max-w-sm rounded flex overflow-scroll scr shadow-lg card w-1/6 h-2/6 mr-7 mb-7 card" :style="{backgroundColor: i.backgroundColor}" >
                <div class="px-6 py-4">
                    <div class="font-bold text-sm mb-2 main-text">{{i.text}}</div>
                    <p class="date font-bold align-bottom">{{i.date.toLocaleDateString("en-US")}}</p>
                </div>
            </div>
            <div class="max-w-sm rounded flex overflow-scroll scr shadow-lg card w-1/6 h-2/6 bg-yellow-500 mr-7 mb-7 card" >
                <div class="px-6 py-4">
                    <div class="font-bold text-sm mb-2 main-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quasi quod obcaecati deleniti. Officia sapiente accusamus, facere vitae, deleniti accusantium eius temporibus quibusdam nemo obcaecati facilis vel exercitationem odio excepturi?</div>
                    <p class="date font-bold align-bottom">22/2/2022</p>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg card w-1/6 h-2/6 bg-yellow-500 mr-7 mb-7">
            <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 main-text"></div>
                    <p class="date"></p>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import { ref } from 'vue';
    
    const showModal = ref(false)
    const newNote = ref("")
    const notes = ref([])
    const errorM = ref("")

    function getRandomColor(){
        return "hsl("+Math.random()*360+",100%,75%)";
    }

    const addNote = () =>{
        if(newNote.value.length > 9){
            notes.value.push({
                id: Math.floor(Math.random()*100000),
                text: newNote.value,
                date: new Date(),
                backgroundColor: getRandomColor()
            })
            showModal.value=false
            newNote.value=""
        }else{
            return errorM.value = "Error need more than 10 char to make note"
        }
    }

</script>
<style>
.overlay{
    text-align: -webkit-center;
    width: -webkit-fill-available;
}
.card::-webkit-scrollbar {
  display: none;
}
</style>