<template>
  <div class="about">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>

  import HelloWorld from '@/components/HelloWorld.vue';

  export default {
    data() {
        return {
            listUsers: []
        };
    },
    methods: {
        async getData() {
            const res = await fetch("https://dummyjson.com/users");
            const finalRes = await res.json();
            this.listUsers = finalRes.users;
        }
    },
    mounted() {
        this.getData();
    },
    components: { HelloWorld }
}
</script>
