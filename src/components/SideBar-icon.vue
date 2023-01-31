<template>
    <div class="sidebar-icon">
        <router-link class="button"  v-bind:to="{name:names}"><font-awesome-icon :icon=icon /></router-link> 
    </div>
</template>

<script>
export default {
    name: "sidebar-icon",
    props:{
        icon: {
        type: String,
        default: "",
        description: "Icon name. Will be overwritten by slot if slot is used"
      },
        names: {
        type: String,
        default: "",
        description: "path routes"
      },
    }
}
</script>