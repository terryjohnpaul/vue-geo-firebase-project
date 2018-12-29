<template>
  <div id="app">
    <appnavbar></appnavbar>
    <router-view/>
    
  </div>
</template>

<script>
import navbar from "@/components/layouts/navbar.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    appnavbar: navbar
  }
};
</script>

<style>
body {
  background-image: url(https://i.pinimg.com/originals/52/d4/8a/52d48a2e1cb69da394a68072ce096169.jpg);
  background-size: cover;
}
</style>
