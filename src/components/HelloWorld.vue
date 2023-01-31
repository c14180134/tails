<template>
  <div class="hello mt-4">
    <DatePicker v-model="range" mode="dateTime" columns="2" is-range></DatePicker>
  </div>
</template>

<script>
import { ref } from 'vue';
import 'v-calendar/dist/style.css';

const date = ref(new Date())
console.log(new Date())
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
      return{
        range:{
          start:new Date(),
          end: date.value.setDate(Number(date.value.getDate())+4)
        },
        tanggal: new Date(),
      }
  },
  beforeMount(){
    const date = ref(new Date())
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
