

<template>
  <div id="app" class="flex">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <sidebar></sidebar>
    <router-view class="flex-wrap w-screen"/>
  </div>
</template>
<script>
// @ is an alias to /src
import sidebar from '@/components/Sidebar.vue'; 

export default {
  name: 'app',
  components: {
    sidebar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap');

#app {
  font-family: Avenir,"Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
