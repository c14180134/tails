<template>
    <!-- eslint-disable-next-line vue/max-attributes-per-line -->
    <div class="static top-0 left-0 w-20 m-0
                flex  flex-col
                bg-gray-900 text-white shadow-lg">
        <SideBarIcon icon="fa-solid fa-rectangle-list" names="tableview"></SideBarIcon>
        <!-- <SideBarIcon icon="fa-solid fa-user" names="home" class="mt-9"></SideBarIcon> -->
        <SideBarIcon icon="fa-solid fa-user-secret" names="about" ></SideBarIcon>
        <!-- <SideBarIcon icon="fa-solid fa-book" names="note"></SideBarIcon> -->
        <SideBarIcon icon="fa-solid fa-circle-question" names="quiz"></SideBarIcon>
        
    </div>
</template>
  
<script>
import SideBarIcon from './SideBar-icon.vue';

export default {
  name: 'HomeView',
  components: {
    SideBarIcon
  }
}
</script>