<script setup>
import { ref } from 'vue';
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css';

const date = ref(new Date())

</script>
<template>

    <DatePicker ></DatePicker>
    <p class="text-3xl">{{  }}</p>
</template>